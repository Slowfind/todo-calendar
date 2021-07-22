import { combineReducers } from 'redux'
import { dateReducer } from './ducks/dates/reducer'
import { todoReducer } from './ducks/todos/reducer'

export const rootReducer = combineReducers({
    date: dateReducer,
    todo: todoReducer,
})
