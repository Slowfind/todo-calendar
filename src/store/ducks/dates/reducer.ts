import produce, { Draft } from 'immer'
import { TDateActions } from './actionCreators'
import { DatesActionsType } from './contracts/actionTypes'
import { IMonths, IMonthsState, LoadingState } from './contracts/state'

const initialDateState: IMonthsState = {
    months: {} as IMonths,
    loadingState: LoadingState.NEVER,
}

export const dateReducer = produce((draft: Draft<IMonthsState>, action: TDateActions) => {
    switch (action.type) {
        case DatesActionsType.FETCH_DATE:
            draft.months = {} as IMonths
            draft.loadingState = LoadingState.LOADING
            break
        case DatesActionsType.SET_DATES:
            draft.months = action.payload
            draft.loadingState = LoadingState.LOADED
            break
        case DatesActionsType.SET_LOADING:
            draft.loadingState = action.payload
            break
        default:
            break
    }
}, initialDateState)
