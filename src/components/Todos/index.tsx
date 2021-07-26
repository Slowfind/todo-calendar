import { Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ILocationState } from '../../interfaces'
import { fetchAddTodo, fetchTodo } from '../../store/ducks/todos/actionCreators'
import { selectTodosItems } from '../../store/ducks/todos/selectors'
import { TodoForm } from './TodoForm'

declare var confirm: (question: string) => boolean
export const Todos: React.FC = () => {
    // const { state } = useLocation<ILocationState>()
    const dispatch = useDispatch()
    const todos = useSelector(selectTodosItems)
    React.useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])
    console.log(todos, 'todos')
    // // const [todos, setTodos] = React.useState<ITodo[]>([])
    // const addHandler = (text: string) => {
    //     // }
    //     // setTodos((prev) => [...prev, newTodo])
    //     dispatch(fetchAddTodo(text, state))
    // }
    // const removeHandler = (id: number) => {
    //     const shoudRemove = confirm('Вы уверены, что хотите удалить элемент?')
    //     shoudRemove && setTodos((prev) => prev.filter((todo) => todo.id !== id))
    // }

    // const toggleHandler = (id: number) => {
    //     setTodos((prev) =>
    //         prev.map((todo) => {
    //             if (todo.id === id) {
    //                 return {
    //                     ...todo,
    //                     completed: !todo.completed,
    //                 }
    //             }
    //             return todo
    //         })
    //     )
    // }

    return (
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
            <Grid item xs={8}>
                <Box>
                    <TodoForm />
                </Box>
                {/* <Box>
                    <TodoList toggleTodo={toggleHandler} removeTodo={removeHandler} todos={todos} />
                </Box> */}
            </Grid>
        </Grid>
    )
}
