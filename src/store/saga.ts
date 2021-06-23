import { all } from '@redux-saga/core/effects'
import { dateSaga } from './ducks/dates/sagas'

export default function* rootSaga() {
    yield all([dateSaga()])
}
