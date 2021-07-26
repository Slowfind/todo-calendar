import TextField from '@material-ui/core/TextField'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ILocationState, ITodoFormProps } from '../../interfaces'
import { fetchAddTodo } from '../../store/ducks/todos/actionCreators'

export const TodoForm: React.FC = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const { state } = useLocation<ILocationState>()
    const dispatch = useDispatch()

    const keyPressHandler = (event: React.KeyboardEvent) => {
        let text = inputRef.current!.value
        if (text.length >= 1) {
            if (event.key === 'Enter') {
                dispatch(fetchAddTodo(text, state))
                text = ''
            }
        }
        return false
    }

    return (
        <form>
            <TextField onKeyPress={keyPressHandler} inputRef={inputRef} fullWidth id="todo" placeholder="Введите задачу" />
        </form>
    )
}
