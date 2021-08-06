import { call, put, takeEvery } from 'redux-saga/effects'
import { calendarApi } from '../../../services/api/date'
import { addTodo, removeTodo, setAddTodo, setLoadingTodo, setRemoveTodo, setTodo, setToggleTodo, toggleTodo } from './actionCreators'
import { IFetchAddTodoAction, IFetchRemoveTodoAction, IFetchToggleTodoAction, TActionsTodo } from './contracts/actionTypes'
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
export function* fetchRemoveTodoRequest({ payload }: IFetchRemoveTodoAction): any {
    try {
        yield call(calendarApi.removeTodo, payload)
        yield put(removeTodo(payload))
    } catch (error) {
        yield put(setRemoveTodo(AddTodoState.ERROR))
    }
}

export function* fetchToggleTodoRequest({ payload, completed }: IFetchToggleTodoAction): any {
    try {
        yield call(calendarApi.toggleTodo, payload, (completed = !completed))
        yield put(toggleTodo(payload))
    } catch (error) {
        yield put(setToggleTodo(AddTodoState.ERROR))
    }
}

export function* todoSaga() {
    yield takeEvery(TActionsTodo.FETCH_TODOS, fetchTodoRequest)
    yield takeEvery(TActionsTodo.FETCH_ADD_TODO, fetchAddTodoRequest)
    yield takeEvery(TActionsTodo.FETCH_REMOVE_TODO, fetchRemoveTodoRequest)
    yield takeEvery(TActionsTodo.FETCH_TOGGLE_TODO, fetchToggleTodoRequest)
}
