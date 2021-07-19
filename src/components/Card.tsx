import Box from '@material-ui/core/Box'
import { deepPurple } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid/Grid'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

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
        fontSize: '2.4rem',
        fontWeight: 700,
    },
}))
interface IPr {
    monthEu: string[]
    monthRu: string[]
    isLoading: boolean
}
export const Card: React.FC<IPr> = ({ monthEu, monthRu, isLoading }) => {
    const classes = useStyles()

    return (
        <Grid container spacing={4}>
            {!isLoading ? (
                monthRu?.map((item, i) => (
                    <Grid key={item} item xs={3}>
                        <Box borderRadius={4} boxShadow={5} className={classes.card}>
                            <Link
                                to={{
                                    pathname: `/${monthEu[i].toLowerCase()}`,
                                    state: {
                                        months: {
                                            monthRu: monthRu[i],
                                            monthEu: monthEu[i],
                                        },
                                    },
                                }}
                                className={`${classes.textCenter} ${classes.padding4} ${classes.link}`}
                            >
                                {item}
                            </Link>
                        </Box>
                    </Grid>
                ))
            ) : (
                <div>Загрузка ...</div>
            )}
        </Grid>
    )
}
