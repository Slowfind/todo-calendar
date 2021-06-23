import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card } from '../components/Card'
import { Day } from '../components/Day'
import { TodoList } from '../components/TodoList'

export const Home: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Card} />

            <Route exact path="/:id" component={Day} />

            <Route exact path="/:id/:id" component={TodoList} />
        </Switch>
    )
}
