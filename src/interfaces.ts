import { ITodo } from './store/ducks/todos/contracts/state'

export interface ITodoFormProps {
    addTodo(text: string): any
}

export type TTodo = {
    todos: ITodo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

export type TMonths = {
    monthEu: string[]
    monthRu: string[]
    isLoading: boolean
}

export interface ILocationState {
    monthRu: string
    monthEu: string
    day: number
}
