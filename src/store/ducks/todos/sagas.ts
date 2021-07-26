import { call, put, takeEvery } from 'redux-saga/effects'
import { calendarApi } from '../../../services/api/date'
import { addTodo, setAddTodo, setLoadingTodo, setTodo } from './actionCreators'
import { IFetchAddTodoAction, TActionsTodo } from './contracts/actionTypes'
import { AddTodoState, ITodo, LoadingState } from './contracts/state'

export function* fetchTodoRequest(): any {
    try {
        const todos = yield call(calendarApi.fetchTodo)
        yield put(setTodo(todos))
    } catch (error) {
        yield put(setLoadingTodo(LoadingState.ERROR))
    }
}

export function* fetchAddTodoRequest({ payload, months }: IFetchAddTodoAction): any {
    try {
        const newTodo: ITodo = {
            months,
            text: payload,
            id: Date.now(),
            completed: false,
        }
        const todo = yield call(calendarApi.addTodo, newTodo)
        yield put(addTodo(todo))
    } catch (error) {
        yield put(setAddTodo(AddTodoState.ERROR))
    }
}

export function* todoSaga() {
    yield takeEvery(TActionsTodo.FETCH_TODOS, fetchTodoRequest)
    yield takeEvery(TActionsTodo.FETCH_ADD_TODO, fetchAddTodoRequest)
}
