import { Action } from 'redux'
import { IDateState, LoadingState } from './state'

export enum DatesActionsType {
    SET_DATES = 'date/SET_DATES',
    SET_LOADING = 'date/SET_LOADING',
    FETCH_DATE = 'date/FETCH_DATE',
    FETCH_MONTH = 'date/FETCH_MONTH',
}

export interface ISetDateAction extends Action<DatesActionsType> {
    type: DatesActionsType.SET_DATES
    payload: IDateState['date']
}

export interface ISetLoadingDateAction extends Action<DatesActionsType> {
    type: DatesActionsType.SET_LOADING
    payload: LoadingState
}

export interface IFetchDateAction extends Action<DatesActionsType> {
    type: DatesActionsType.FETCH_DATE
}

export interface IMonthAction extends Action<DatesActionsType> {
    type: DatesActionsType.FETCH_MONTH
    payload: string | null
}
