import { Action } from 'redux'
import { AddTodoState, ITodo, ITodoState, LoadingState } from './state'

export enum TActionsTodo {
    SET_TODOS = 'todos/SET_TODO',
    FETCH_TODOS = 'todos/FETCH_TODO',
    SET_LOADING = 'todos/SET_LOADING',
    ADD_TODO = 'todos/ADD_TODO',
    FETCH_ADD_TODO = 'todos/FETCH_ADD_TODO',
    SET_ADD_TODO = 'todos/SET_ADD_TODO',
}

export interface ISetTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.SET_TODOS
    payload: ITodoState['todos']
}

export interface IFetchTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.FETCH_TODOS
}

export interface ISetLoadingTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.SET_LOADING
    payload: LoadingState
}

export interface IAddTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.ADD_TODO
    payload: ITodoState['todos']
}

export interface IFetchAddTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.FETCH_ADD_TODO
    payload: string
    months: ITodo['months']
}

export interface ISetAddTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.SET_ADD_TODO
    payload: AddTodoState
}

export type TTodoActions =
    | ISetTodoAction
    | IFetchTodoAction
    | ISetLoadingTodoAction
    | IAddTodoAction
    | IFetchAddTodoAction
    | ISetAddTodoAction
