import produce, { Draft } from 'immer'
import { TActionsTodo, TTodoActions } from './contracts/actionTypes'
import { AddTodoState, ITodo, ITodoState, LoadingState } from './contracts/state'

const initialState: ITodoState = {
    todos: [] as ITodo[],
    addTodoState: AddTodoState.NEVER,
    loadingState: LoadingState.NEVER,
}

export const todoReducer = produce((draft: Draft<ITodoState>, action: TTodoActions) => {
    switch (action.type) {
        case TActionsTodo.FETCH_TODOS:
            draft.todos = []
            draft.loadingState = LoadingState.LOADING
            break
        case TActionsTodo.SET_LOADING:
            draft.loadingState = action.payload
            break
        case TActionsTodo.SET_TODOS:
            draft.todos = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case TActionsTodo.SET_ADD_TODO:
            draft.addTodoState = action.payload
            break
        case TActionsTodo.FETCH_ADD_TODO:
            draft.addTodoState = AddTodoState.LOADING
            break
        case TActionsTodo.ADD_TODO:
            // @ts-ignore
            draft.todos?.push(action.payload)
            draft.addTodoState = AddTodoState.NEVER
            break
        default:
            break
    }
}, initialState)
