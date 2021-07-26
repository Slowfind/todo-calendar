import {
    IFetchAddTodoAction,
    IAddTodoAction,
    TActionsTodo,
    IFetchTodoAction,
    ISetTodoAction,
    ISetLoadingTodoAction,
    ISetAddTodoAction,
} from './contracts/actionTypes'
import { AddTodoState, ITodo, ITodoState, LoadingState } from './contracts/state'

export const setTodo = (payload: ITodoState['todos']): ISetTodoAction => ({
    type: TActionsTodo.SET_TODOS,
    payload,
})

export const fetchTodo = (): IFetchTodoAction => ({
    type: TActionsTodo.FETCH_TODOS,
})

export const setLoadingTodo = (payload: LoadingState): ISetLoadingTodoAction => ({
    type: TActionsTodo.SET_LOADING,
    payload,
})

export const addTodo = (payload: ITodoState['todos']): IAddTodoAction => ({
    type: TActionsTodo.ADD_TODO,
    payload,
})

export const fetchAddTodo = (payload: string, months: ITodo['months']): IFetchAddTodoAction => ({
    type: TActionsTodo.FETCH_ADD_TODO,
    payload,
    months,
})
export const setAddTodo = (payload: AddTodoState): ISetAddTodoAction => ({
    type: TActionsTodo.SET_ADD_TODO,
    payload,
})
