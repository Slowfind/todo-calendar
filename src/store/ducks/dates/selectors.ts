import { RootState } from '../../store'
import { IMonths, IMonthsState, LoadingState } from './contracts/state'

export const selectDate = (state: RootState): IMonthsState => state.date

export const selectLoadingState = (state: RootState): LoadingState => selectDate(state).loadingState

export const selectIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectMonthRu = (state: RootState): IMonths['ru'] => selectDate(state).months.ru
export const selectMonthEu = (state: RootState): IMonths['eu'] => selectDate(state).months.eu
