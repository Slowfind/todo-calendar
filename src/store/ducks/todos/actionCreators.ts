import { IFetchTodoAction, ISetTodoAction, TActionsTodo } from './contracts/actionTypes'
import { ITodo, ITodoState } from './contracts/state'

export const addTodo = (payload: ITodoState['todo']): ISetTodoAction => ({
    type: TActionsTodo.ADD_TODO,
    payload,
})

export const fetchTodo = (payload: string, months: ITodo['months']): IFetchTodoAction => ({
    type: TActionsTodo.FETCH_TODO,
    payload,
    months,
})
