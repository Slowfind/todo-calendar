import { all } from '@redux-saga/core/effects'
import { dateSaga } from './ducks/dates/sagas'
import { todoSaga } from './ducks/todos/sagas'

export default function* rootSaga() {
    yield all([dateSaga(), todoSaga()])
}
