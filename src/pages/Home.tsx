import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Card } from '../components/Card'
import { Day } from '../components/Days/Day'
import { Todos } from '../components/Todos'
import { fetchDate } from '../store/ducks/dates/actionCreators'
import { fetchTodo } from '../store/ducks/todos/actionCreators'

/* туду
1. сделать тут передачу месяцев через json-server

*/

export const Home: React.FC = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchDate())
        dispatch(fetchTodo())
    }, [dispatch])

    return (
        <Switch>
            <Route exact path="/" component={Card} />

            <Route exact path="/:id" component={Day} />

            <Route exact path="/:id/:id" component={Todos} />
        </Switch>
    )
}
