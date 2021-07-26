import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import Box from '@material-ui/core/Box/Box'
import React from 'react'
import { Route, Switch, useLocation, withRouter } from 'react-router-dom'
import { ILocationState } from '../interfaces'
import { Pluralize } from '../services/api/date'
import { BackButton } from './BackButton'

const Header: React.FC = () => {
    const { state } = useLocation<ILocationState>()
    const pluralizeMonths = (state: ILocationState) => {
        if (state !== undefined) {
            const { monthEu, day } = state

            return new Pluralize(monthEu, day).pluralizeMonths
        }
        return false
    }
    return (
        <AppBar color="primary" position="sticky">
            <Container disableGutters>
                <Toolbar component="div">
                    <Switch>
                        <Route path="/" exact>
                            <Typography variant="h1">TODO Календарь</Typography>
                        </Route>
                        <Route path="/:id" exact>
                            <Box position="absolute" left="0" top="8px">
                                <BackButton />
                            </Box>
                            <Box>
                                <Typography variant="h1">{state?.monthRu}</Typography>
                            </Box>
                        </Route>
                        <Route path="/:id/:id" exact>
                            <Box position="absolute" left="0" top="8px">
                                <BackButton />
                            </Box>
                            <Box>
                                <Typography variant="h1">Список задач на {pluralizeMonths(state)}</Typography>
                            </Box>
                        </Route>
                    </Switch>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default withRouter(Header)
