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
}

export interface IDateState<T> {
    date: T
    loadingState: LoadingState
}
