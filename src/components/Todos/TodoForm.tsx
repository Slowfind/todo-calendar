import TextField from '@material-ui/core/TextField'
import React from 'react'
import { ITodoFormProps } from '../../interfaces'

export const TodoForm: React.FC<ITodoFormProps> = ({ addTodo }) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputRef.current!.value.length >= 1) {
            addTodo(inputRef.current!.value)
        }
        inputRef.current!.value = ''
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField inputRef={inputRef} fullWidth id="todo" placeholder="Введите задачу" />
        </form>
    )
}
