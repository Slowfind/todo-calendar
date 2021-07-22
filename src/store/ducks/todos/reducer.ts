import produce, { Draft } from 'immer'
import { TActionsTodo, TTodoActions } from './contracts/actionTypes'
import { ITodo, ITodoState } from './contracts/state'

const initialState: ITodoState = {
    todo: [] as ITodo[],
}

export const todoReducer = produce((draft: Draft<ITodoState>, action: TTodoActions) => {
    switch (action.type) {
        case TActionsTodo.FETCH_TODO:
            draft.todo = []
            break
        case TActionsTodo.ADD_TODO:
            // @ts-ignore
            draft.todo?.push(action.payload)
            break
        default:
            break
    }
}, initialState)
