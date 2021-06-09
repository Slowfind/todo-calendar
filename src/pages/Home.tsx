import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card } from '../components/Card'
import { Day } from '../components/Day'

export const Home: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Card />
            </Route>
            <Route exact path="/:id">
                <Day />
            </Route>
        </Switch>
    )
}
