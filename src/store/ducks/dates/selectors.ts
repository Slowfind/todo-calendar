import { RootState } from '../../store'
import { IDate, IDateState, LoadingState } from './contracts/state'

export const selectDate = (state: RootState): IDateState<IDate> => state.date

export const selectLoadingState = (state: RootState): LoadingState => selectDate(state).loadingState

export const selectIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectDateItem = (state: RootState): IDateState<IDate>['item'] => selectDate(state).item

export const selectDateMonthEu = (state: RootState): string[] => selectDateItem(state).monthEu

export const selectDateMonthRu = (state: RootState): string[] => selectDateItem(state).monthRu
