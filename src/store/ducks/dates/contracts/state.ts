export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface IDate {
    monthRu: string[]
    monthEu: string[]
    yearNumber: number
    monthNumber: number
    month: () => string
}

export interface IDateState<T> {
    item: T
    loadingState: LoadingState
}
