import { Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ILocationState } from '../../interfaces'
import { fetchAddTodo, fetchRemoveTodo, fetchToggleTodo } from '../../store/ducks/todos/actionCreators'
import { ITodo } from '../../store/ducks/todos/contracts/state'
import { selectTodosItems } from '../../store/ducks/todos/selectors'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

declare var confirm: (question: string) => boolean
export const Todos: React.FC = () => {
    const { state } = useLocation<ILocationState>()
    const dispatch = useDispatch()
    const todos = useSelector(selectTodosItems)
    const addHandler = (text: string) => {
        dispatch(fetchAddTodo(text, state))
    }
    const removeHandler = (id: ITodo['id']) => {
        const shoudRemove = confirm('Вы уверены, что хотите удалить задачу?')
        shoudRemove && dispatch(fetchRemoveTodo(id))
    }
    const toggleHandler = (id: ITodo['id'], completed: ITodo['completed']) => {
        dispatch(fetchToggleTodo(id, completed))
    }
    const todosThisMonth = todos?.filter((todo) => {
        return todo?.months.day === state.day && todo?.months.monthEu === state.monthEu
    })
    return (
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
            <Grid item xs={8}>
                <Box>
                    <TodoForm addTodo={addHandler} />
                </Box>
                <Box>
                    <TodoList onToggle={toggleHandler} onRemove={removeHandler} month={state} todos={todosThisMonth} />
                </Box>
            </Grid>
        </Grid>
    )
}
