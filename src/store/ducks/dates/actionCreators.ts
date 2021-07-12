import { DatesActionsType, IFetchDateAction, IMonthAction, ISetDateAction, ISetLoadingDateAction } from './contracts/actionTypes'
import { IDateState, LoadingState } from './contracts/state'

export const setDateLoading = (payload: LoadingState): ISetLoadingDateAction => ({
    type: DatesActionsType.SET_LOADING,
    payload,
})

export const setDate = (payload: IDateState['date']): ISetDateAction => ({
    type: DatesActionsType.SET_DATES,
    payload,
})

export const setMonth = (payload: string): IMonthAction => ({
    type: DatesActionsType.FETCH_MONTH,
    payload,
})

export const fetchDate = (): IFetchDateAction => ({
    type: DatesActionsType.FETCH_DATE,
})

export type TDateActions = ISetLoadingDateAction | ISetDateAction | IFetchDateAction | IMonthAction
