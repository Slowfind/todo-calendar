import Box from '@material-ui/core/Box'
import { deepPurple } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid/Grid'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchDate } from '../store/ducks/dates/actionCreators'
import { IDate, IDateState } from '../store/ducks/dates/contracts/state'
import { selectIsLoading, selectMonthEu, selectMonthRu } from '../store/ducks/dates/selectors'

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
export const Card: React.FC<IDateState<IDate>> = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const monthEu = useSelector(selectMonthEu)
    const monthRu = useSelector(selectMonthRu)
    const isLoading = useSelector(selectIsLoading)

    React.useEffect(() => {
        dispatch(fetchDate())
    }, [dispatch])

    return (
        <Grid container spacing={4}>
            {!isLoading ? (
                monthRu?.map((item, i) => (
                    <Grid key={item} item xs={3}>
                        <Box borderRadius={4} boxShadow={5} className={classes.card}>
                            <Link
                                to={{
                                    pathname: `/${monthEu[i].toLowerCase()}`,
                                    state: monthRu[i],
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
