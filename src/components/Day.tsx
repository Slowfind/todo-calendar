import Box from '@material-ui/core/Box/Box'
import Grid from '@material-ui/core/Grid/Grid'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMonth } from '../store/ducks/dates/actionCreators'
import { selectMonth } from '../store/ducks/dates/selectors'
import { date } from '../services/api/date'

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

export const Day: React.FC = ({
    location: { state },
    match: {
        params: { id },
    },
}: any) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const month: string | null = useSelector(selectMonth)

    React.useEffect(() => {
        id && dispatch(setMonth(id))
    }, [id, dispatch])

    return (
        <Grid container spacing={4}>
            {month &&
                date(month).map((i) => (
                    <Grid key={i} item xs={3}>
                        <Link className={`${classes.link} ${classes.dayCard}`} to={`/${id}/${i}`}>
                            <Box fontWeight="700" position="absolute" bottom="0" right="0" p={1}>
                                <Box component="span">{i}</Box>
                            </Box>
                            <Box>
                                <List dense component="nav" aria-label="main mailbox folders">
                                    <ListItem>
                                        <ListItemText primary="Выучить реакт" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Выучить тайпскрипт" />
                                    </ListItem>
                                </List>
                            </Box>
                        </Link>
                    </Grid>
                ))}
        </Grid>
    )
}
