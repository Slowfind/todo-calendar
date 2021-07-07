import { Action } from 'redux'
import { IDate, IDateState, LoadingState } from './state'

export enum DatesActionsType {
    SET_DATES = 'date/SET_DATES',
    SET_LOADING = 'date/SET_LOADING',
    FETCH_DATE = 'date/FETCH_DATE',
}

export interface ISetDateAction extends Action<DatesActionsType> {
    type: DatesActionsType.SET_DATES
    payload: IDateState<IDate>['date']
}

export interface ISetLoadingDateAction extends Action<DatesActionsType> {
    type: DatesActionsType.SET_LOADING
    payload: LoadingState
}

export interface IFetchDateAction extends Action<DatesActionsType> {
    type: DatesActionsType.FETCH_DATE
}
