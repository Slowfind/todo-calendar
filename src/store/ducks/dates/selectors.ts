import { RootState } from '../../store'
import { IDate, IDateState, LoadingState } from './contracts/state'

export const selectDate = (state: RootState): IDateState => state.date

export const selectLoadingState = (state: RootState): LoadingState => selectDate(state).loadingState

export const selectIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectMonthRu = (state: RootState): IDate['monthRu'] => {
    return selectDate(state).date.monthRu
}
export const selectMonthEu = (state: RootState): IDate['monthEu'] => {
    return selectDate(state).date.monthEu
}

export const selectMonth = (state: RootState): string | null => {
    return selectDate(state)?.month
}
