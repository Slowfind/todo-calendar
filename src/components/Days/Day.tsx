import { List, ListItem, ListItemText } from '@material-ui/core'
import Box from '@material-ui/core/Box/Box'
import Grid from '@material-ui/core/Grid/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TTodo } from '../../interfaces'
import { MyDate } from '../../services/api/date'
import { selectTodosItems } from '../../store/ducks/todos/selectors'
import { TodosItem } from './TodosItem'

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        color: '#fff',
        display: 'block',
    },
    dayCard: {
        position: 'relative',
        minHeight: 50,
        padding: '8px 24px 8px 8px',
        color: '#000',
        borderRadius: 4,
        boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px',
    },
}))

type Tx = {
    arr1: TTodo['todos']
    arr2: number[]
}
export const Day: React.FC = ({
    location: {
        state: { monthRu, monthEu },
    },
    match: {
        params: { id },
    },
}: any) => {
    const todos = useSelector(selectTodosItems)
    const classes = useStyles()
    const { fullDaysInMonth } = new MyDate(monthEu)

    const filteredDays: Tx = (arr1, arr2) => {
        return arr1?.filter((item) => arr2.includes(item.months.day) && item.months.monthEu === monthEu).map((item) => item.months.day)
    }
    // console.log(filteredDays(todos, fullDaysInMonth))
    const difference = (arr1: number[], arr2: number[]) => {
        return arr2?.filter((item) => !arr1?.includes(item))
    }
    console.log(difference(filteredDays(todos, fullDaysInMonth), fullDaysInMonth))
    return (
        <Grid container spacing={4}>
            {fullDaysInMonth.map((day) => {
                return (
                    <Grid key={day} item xs={3}>
                        <Link
                            className={`${classes.link} ${classes.dayCard}`}
                            to={{
                                pathname: `/${id}/${day}`,
                                state: {
                                    monthRu,
                                    monthEu,
                                    day,
                                },
                            }}
                        >
                            <Box fontWeight="700" position="absolute" bottom="0" right="0" p={1}>
                                <Box component="span">{day}</Box>
                            </Box>
                            <TodosItem day={day} monthEu={monthEu} todos={todos} />
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    )
}
