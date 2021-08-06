import {
    IFetchAddTodoAction,
    IAddTodoAction,
    TActionsTodo,
    IFetchTodoAction,
    ISetTodoAction,
    ISetLoadingTodoAction,
    ISetAddTodoAction,
    IRemoveTodoAction,
    ISetRemoveTodoAction,
    ISetToggleTodoAction,
    IToggleTodoAction,
    IFetchToggleTodoAction,
    IFetchRemoveTodoAction,
} from './contracts/actionTypes'
import { TodoStateChanger, ITodo, ITodoState, LoadingState } from './contracts/state'

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
export const setAddTodo = (payload: TodoStateChanger): ISetAddTodoAction => ({
    type: TActionsTodo.SET_ADD_TODO,
    payload,
})

export const fetchRemoveTodo = (payload: ITodo['id']): IFetchRemoveTodoAction => ({
    type: TActionsTodo.FETCH_REMOVE_TODO,
    payload,
})

export const removeTodo = (payload: ITodo['id']): IRemoveTodoAction => ({
    type: TActionsTodo.REMOVE_TODO,
    payload,
})

export const setRemoveTodo = (payload: TodoStateChanger): ISetRemoveTodoAction => ({
    type: TActionsTodo.SET_REMOVE_TODO,
    payload,
})

export const fetchToggleTodo = (payload: ITodo['id'], completed: ITodo['completed']): IFetchToggleTodoAction => ({
    type: TActionsTodo.FETCH_TOGGLE_TODO,
    payload,
    completed,
})
export const toggleTodo = (payload: ITodo['id']): IToggleTodoAction => ({
    type: TActionsTodo.TOGGLE_TODO,
    payload,
})
export const setToggleTodo = (payload: TodoStateChanger): ISetToggleTodoAction => ({
    type: TActionsTodo.SET_TOGGLE_TODO,
    payload,
})
