import { ITodo } from './store/ducks/todos/contracts/state'

export interface ITodoFormProps {
    addTodo(text: string): void
}

export type TTodo = {
    todos?: ITodo[]
    onRemove: (id: ITodo['id']) => void
    onToggle: (id: ITodo['id'], completed: ITodo['completed']) => void
    month: ILocationState
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
