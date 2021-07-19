import { Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { ITodo } from '../../interfaces'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

declare var confirm: (question: string) => boolean
export const Todos: React.FC = ({ location: { pathname, state } }: any) => {
    const [todos, setTodos] = React.useState<ITodo[]>([])

    const addHandler = (text: string) => {
        const newTodo: ITodo = {
            text,
            id: Date.now(),
            completed: false,
        }
        setTodos((prev) => [...prev, newTodo])
    }
    const removeHandler = (id: number) => {
        const shoudRemove = confirm('Вы уверены, что хотите удалить элемент?')
        shoudRemove && setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleHandler = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    }

    return (
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
            <Grid item xs={8}>
                <Box>
                    <TodoForm addTodo={addHandler} />
                </Box>
                <Box>
                    <TodoList toggleTodo={toggleHandler} removeTodo={removeHandler} todos={todos} />
                </Box>
            </Grid>
        </Grid>
    )
}
