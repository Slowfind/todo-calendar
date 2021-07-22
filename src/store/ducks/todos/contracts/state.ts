// export enum LoadingState {
//     LOADING = 'LOADING',
//     ERROR = 'ERROR',
//     NEVER = 'NEVER',
// }

import { ILocationState } from '../../../../interfaces'

export interface ITodo {
    months: ILocationState
    text: string
    id: number
    completed: boolean
}

export interface ITodoState {
    todo?: ITodo[]
}
