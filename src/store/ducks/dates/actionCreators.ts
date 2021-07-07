import { DatesActionsType, IFetchDateAction, ISetDateAction, ISetLoadingDateAction } from './contracts/actionTypes'
import { IDate, IDateState, LoadingState } from './contracts/state'

export const setDateLoading = (payload: LoadingState): ISetLoadingDateAction => ({
    type: DatesActionsType.SET_LOADING,
    payload,
})

export const setDate = (payload: IDateState<IDate>['date']): ISetDateAction => ({
    type: DatesActionsType.SET_DATES,
    payload,
})

export const fetchDate = (): IFetchDateAction => ({
    type: DatesActionsType.FETCH_DATE,
})

export type TDateActions = ISetLoadingDateAction | ISetDateAction | IFetchDateAction
