import produce, { Draft } from 'immer'
import { TDateActions } from './actionCreators'
import { DatesActionsType } from './contracts/actionTypes'
import { IDate, IDateState, LoadingState } from './contracts/state'

const initialDateState: IDateState = {
    date: {} as IDate,
    month: null,
    loadingState: LoadingState.NEVER,
}

export const dateReducer = produce((draft: Draft<IDateState>, action: TDateActions) => {
    switch (action.type) {
        case DatesActionsType.SET_DATES:
            draft.date = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case DatesActionsType.FETCH_DATE:
            draft.date = {} as IDate
            draft.loadingState = LoadingState.LOADING
            break
        case DatesActionsType.SET_LOADING:
            draft.loadingState = action.payload
            break
        case DatesActionsType.FETCH_MONTH:
            draft.month = action.payload
            break
        default:
            break
    }
}, initialDateState)
