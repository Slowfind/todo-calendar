import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { IMonths, IMonthsState } from './ducks/dates/contracts/state'
import { rootReducer } from './rootReducer'
import rootSaga from './saga'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const sagaMiddleware = createSagaMiddleware()

export const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

export interface RootState {
    date: IMonthsState
}

export const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
