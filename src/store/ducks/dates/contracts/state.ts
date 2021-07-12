export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface IDate {
    monthRu: string[]
    monthEu: string[]
}

export interface IDateState {
    month: string | null
    date: IDate
    loadingState: LoadingState
}
