import { combineReducers } from 'redux'
import { dateReducer } from './ducks/dates/reducer'

export const rootReducer = combineReducers({
    date: dateReducer,
})
