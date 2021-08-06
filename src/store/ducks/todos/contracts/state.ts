import { ILocationState } from '../../../../interfaces'
export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export enum TodoStateChanger {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface ITodo {
    months: ILocationState
    text: string
    id: number
    completed: boolean
}

export interface ITodoState {
    todos?: ITodo[]
    loadingState: LoadingState
    todoStateChanger: TodoStateChanger
}
