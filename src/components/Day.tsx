import moment from 'moment'
import Box from '@material-ui/core/Box/Box'
import Grid from '@material-ui/core/Grid/Grid'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

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

export const Day: React.FC = () => {
    const classes = useStyles()
    let params: { id: string } = useParams()
    let id = params.id
    let monthNumber = moment().month(id).format('MM')
    let yearNumber = moment().year()
    let month = moment(`${yearNumber}-${monthNumber}`).format('YYYY-MM')

    const getDaysByMonth = (month: string) => {
        const daysInMonth = moment(month).daysInMonth()
        return Array.from({ length: daysInMonth }, (_, i) => i + 1)
    }
    return (
        <Grid container spacing={4}>
            {getDaysByMonth(month).map((item) => (
                <Grid key={item} item xs={3}>
                    <Link className={`${classes.link} ${classes.dayCard}`} to={`/${id}/${item}`}>
                        <Box fontWeight="700" position="absolute" bottom="0" right="0" p={1}>
                            <Box component="span">{item}</Box>
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
