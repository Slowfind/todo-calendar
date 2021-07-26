import { RootState } from '../../store'
import { LoadingState } from '../dates/contracts/state'
import { ITodoState } from './contracts/state'

export const selectTodos = (state: RootState): ITodoState => state.todo

export const selectLoadingState = (state: RootState): LoadingState => selectTodos(state).loadingState

export const selectIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED

export const selectIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectTodosItems = (state: RootState): ITodoState['todos'] => selectTodos(state).todos
