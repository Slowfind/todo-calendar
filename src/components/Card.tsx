import Box from '@material-ui/core/Box'
import { deepPurple } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid/Grid'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchDate } from '../store/ducks/dates/actionCreators'
import { IDateState } from '../store/ducks/dates/contracts/state'
import { selectDateMonthEu, selectDateMonthRu, selectIsLoading } from '../store/ducks/dates/selectors'

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
export const Card: React.FC<IDateState<object>> = () => {
    const classes = useStyles()
    const monthEu = useSelector(selectDateMonthEu)
    const monthRu = useSelector(selectDateMonthRu)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchDate())
    }, [dispatch])

    return (
        <Grid container spacing={4}>
            {!isLoading ? (
                monthRu &&
                monthRu.map((item, i) => (
                    <Grid key={item} item xs={3}>
                        <Box borderRadius={4} boxShadow={5} className={classes.card}>
                            <Link
                                to={`/${monthEu[i].toLowerCase()}`}
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
