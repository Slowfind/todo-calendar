import produce, { Draft } from 'immer'
import { TDateActions } from './actionCreators'
import { DatesActionsType } from './contracts/actionTypes'
import { IDateState, LoadingState } from './contracts/state'

const initialDateState: IDateState<object> = {
    date: {},
    loadingState: LoadingState.NEVER,
}

export const dateReducer = produce((draft: Draft<IDateState<object>>, action: TDateActions) => {
    switch (action.type) {
        case DatesActionsType.SET_DATES:
            draft.date = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case DatesActionsType.FETCH_DATE:
            draft.date = {}
            draft.loadingState = LoadingState.LOADING
            break
        case DatesActionsType.SET_LOADING:
            draft.loadingState = action.payload
            break
        default:
            break
    }
}, initialDateState)
