import { call, put, takeEvery } from 'redux-saga/effects'
import { calendarApi } from '../../../services/api/date'
import { delay } from '../../store'
import { setDate, setDateLoading } from './actionCreators'
import { DatesActionsType } from './contracts/actionTypes'
import { LoadingState } from './contracts/state'

export function* fetchDateRequest(): any {
    try {
        const items = yield call(calendarApi.fetchMonth)
        yield call(delay, 500)
        yield put(setDate(items))
    } catch (error) {
        yield put(setDateLoading(LoadingState.ERROR))
    }
}

export function* dateSaga() {
    yield takeEvery(DatesActionsType.FETCH_DATE, fetchDateRequest)
}
