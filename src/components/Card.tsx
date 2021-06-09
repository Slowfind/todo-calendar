import { Box, Typography } from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid/Grid'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const month: string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        color: '#fff',
        display: 'block',
    },
    textCenter: {
        textAlign: 'center',
    },
    padding4: {
        padding: 46,
    },
    card: {
        backgroundColor: deepPurple[500],
    },
}))
export const Card: React.FC = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={4}>
            {month.map((item, i) => (
                <Grid key={item} item xs={3}>
                    <Box borderRadius={4} boxShadow={5} className={classes.card}>
                        <Link to={`/${item}`} className={`${classes.textCenter} ${classes.padding4} ${classes.link}`}>
                            <Typography variant="body1">{item}</Typography>
                        </Link>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}
