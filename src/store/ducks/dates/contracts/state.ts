export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface IMonths {
    ru: string[]
    eu: string[]
}

export interface IMonthsState {
    months: IMonths
    loadingState: LoadingState
}
