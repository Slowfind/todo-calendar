import TextField from '@material-ui/core/TextField'
import React from 'react'
import { ITodoFormProps } from '../../interfaces'

export const TodoForm: React.FC<ITodoFormProps> = ({ addTodo }) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            addTodo(inputRef.current!.value)
            inputRef.current!.value = ''
        }
    }

    return <TextField onKeyPress={keyPressHandler} inputRef={inputRef} fullWidth id="todo" placeholder="Введите задачу" />
}
