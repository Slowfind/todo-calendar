import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Card } from '../components/Card'
import { Day } from '../components/Day'
import { Todos } from '../components/Todos'
import { fetchDate } from '../store/ducks/dates/actionCreators'
import { selectIsLoading, selectMonthEu, selectMonthRu } from '../store/ducks/dates/selectors'

/* туду
1. сделать тут передачу месяцев через json-server

*/

export const Home: React.FC = () => {
    const dispatch = useDispatch()

    const monthEu = useSelector(selectMonthEu)
    const monthRu = useSelector(selectMonthRu)
    const isLoading = useSelector(selectIsLoading)
    console.log(monthEu)
    React.useEffect(() => {
        dispatch(fetchDate())
    }, [dispatch])

    return (
        <Switch>
            <Route exact path="/">
                <Card monthEu={monthEu} monthRu={monthRu} isLoading={isLoading} />
            </Route>

            <Route exact path="/:id" component={Day} />

            <Route exact path="/:id/:id" component={Todos} />
        </Switch>
    )
}
