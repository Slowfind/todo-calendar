import { Action } from 'redux'
import { ITodo, ITodoState } from './state'

export enum TActionsTodo {
    ADD_TODO = 'todo/ADD_TODO',
    FETCH_TODO = 'todo/FETCH_TODO',
}

export interface ISetTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.ADD_TODO
    payload: ITodoState['todo']
}

export interface IFetchTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.FETCH_TODO
    payload: string
    months: ITodo['months']
}

export type TTodoActions = ISetTodoAction | IFetchTodoAction
