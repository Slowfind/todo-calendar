import moment from 'moment'
import 'moment/locale/ru' // without this line it didn't work
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card } from '../components/Card'
import { Day } from '../components/Day'
import { TodoList } from '../components/TodoList'

moment.updateLocale('ru', {
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
})
const month: string[] = Array.apply(0, Array(12)).map((_, i) => moment().month(i).format('MMMM'))
console.log(month, '2323')

export const Home: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Card month={month} />
            </Route>

            <Route exact path="/:id" component={Day} />

            <Route exact path="/:id/:id" component={TodoList} />
        </Switch>
    )
}
