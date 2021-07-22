import { call, put, takeEvery } from 'redux-saga/effects'
import { DateApi } from '../../../services/api/date'
import { addTodo } from './actionCreators'
import { IFetchTodoAction, TActionsTodo } from './contracts/actionTypes'
import { ITodo } from './contracts/state'

export function* ff({ payload, months }: IFetchTodoAction): any {
    try {
        const newTodo: ITodo = {
            months,
            text: payload,
            id: Date.now(),
            completed: false,
        }
        const todo = yield call(DateApi.addTodo, newTodo)
        console.log(todo)
        yield put(addTodo(todo))
    } catch (error) {
        console.log(error)
    }
}

export function* todoSaga() {
    yield takeEvery(TActionsTodo.FETCH_TODO, ff)
}
