import produce, { Draft } from 'immer'
import { TActionsTodo, TTodoActions } from './contracts/actionTypes'
import { TodoStateChanger, ITodo, ITodoState, LoadingState } from './contracts/state'

const initialState: ITodoState = {
    todos: [] as ITodo[],
    todoStateChanger: TodoStateChanger.NEVER,
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
            draft.todoStateChanger = action.payload
            break
        case TActionsTodo.FETCH_ADD_TODO:
            draft.todoStateChanger = TodoStateChanger.LOADING
            break
        case TActionsTodo.ADD_TODO:
            // @ts-ignore
            draft.todos?.push(action.payload)
            draft.todoStateChanger = TodoStateChanger.NEVER
            break
        case TActionsTodo.FETCH_REMOVE_TODO:
            draft.todoStateChanger = TodoStateChanger.LOADING
            break
        case TActionsTodo.SET_REMOVE_TODO:
            draft.todoStateChanger = action.payload
            break
        case TActionsTodo.REMOVE_TODO:
            draft.todos = draft.todos?.filter((todo) => todo.id !== action.payload)
            break
        case TActionsTodo.FETCH_TOGGLE_TODO:
            draft.todoStateChanger = TodoStateChanger.LOADING
            break
        case TActionsTodo.SET_TOGGLE_TODO:
            draft.todoStateChanger = action.payload
            break
        case TActionsTodo.TOGGLE_TODO:
            draft.todos?.map((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            break
        default:
            break
    }
}, initialState)
