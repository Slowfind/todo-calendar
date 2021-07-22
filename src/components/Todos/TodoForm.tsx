import TextField from '@material-ui/core/TextField'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ILocationState } from '../../interfaces'
import { fetchTodo } from '../../store/ducks/todos/actionCreators'

export const TodoForm: React.FC = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const { state } = useLocation<ILocationState>()
    const dispatch = useDispatch()
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (inputRef.current!.value.length >= 1) {
            if (event.key === 'Enter') {
                dispatch(fetchTodo(inputRef.current!.value, state))
                inputRef.current!.value = ''
            }
        }
    }

    return <TextField onKeyPress={keyPressHandler} inputRef={inputRef} fullWidth id="todo" placeholder="Введите задачу" />
}
