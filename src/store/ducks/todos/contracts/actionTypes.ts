import { Action } from 'redux'
import { AddTodoState, ITodo, ITodoState, LoadingState } from './state'

export enum TActionsTodo {
    SET_TODOS = 'todos/SET_TODO',
    FETCH_TODOS = 'todos/FETCH_TODO',
    SET_LOADING = 'todos/SET_LOADING',
    ADD_TODO = 'todos/ADD_TODO',
    FETCH_ADD_TODO = 'todos/FETCH_ADD_TODO',
    SET_ADD_TODO = 'todos/SET_ADD_TODO',
    FETCH_REMOVE_TODO = 'todos/FETCH_REMOVE_TODO',
    REMOVE_TODO = 'todos/REMOVE_TODO',
    SET_REMOVE_TODO = 'todos/SET_REMOVE_TODO',
    FETCH_TOGGLE_TODO = 'todos/FETCH_TOGGLE_TODO',
    TOGGLE_TODO = 'todos/TOGGLE_TODO',
    SET_TOGGLE_TODO = 'todos/SET_TOGGLE_TODO',
}
/* TODOS */
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
/* ----- */

/* ADD_TODO */
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
/* --------- */

/* REMOVE_TODO */
export interface IFetchRemoveTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.FETCH_REMOVE_TODO
    payload: ITodo['id']
}

export interface IRemoveTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.REMOVE_TODO
    payload: ITodo['id']
}

export interface ISetRemoveTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.SET_REMOVE_TODO
    payload: AddTodoState
}
/* ----------- */

/* TOGGLE TODO */
export interface IFetchToggleTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.FETCH_TOGGLE_TODO
    payload: ITodo['id']
    completed: ITodo['completed']
}
export interface IToggleTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.TOGGLE_TODO
    payload: ITodo['id']
}

export interface ISetToggleTodoAction extends Action<TActionsTodo> {
    type: TActionsTodo.SET_TOGGLE_TODO
    payload: AddTodoState
}
/* ----------- */

export type TTodoActions =
    | ISetTodoAction
    | IFetchTodoAction
    | ISetLoadingTodoAction
    | IAddTodoAction
    | IFetchAddTodoAction
    | ISetAddTodoAction
    | IFetchRemoveTodoAction
    | IRemoveTodoAction
    | ISetRemoveTodoAction
    | IFetchToggleTodoAction
    | IToggleTodoAction
    | ISetToggleTodoAction
