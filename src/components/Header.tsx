import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import Box from '@material-ui/core/Box/Box'
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Pluralize } from '../services/api/date'
import { BackButton } from './BackButton'

const Header: React.FC = ({ location: { pathname, state } }: any) => {
    const pluralizeMonths = (state: any, pathname: any) => {
        const pathnameNumber = pathname.replace(/\D/g, '')
        if (state !== undefined) {
            const {
                months: { monthEu },
            } = state
            return new Pluralize(monthEu, pathnameNumber).pluralizeMonths
        }
        return null
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
                                <Typography variant="h1">{state?.months?.monthRu}</Typography>
                            </Box>
                        </Route>
                        <Route path="/:id/:id" exact>
                            <Box position="absolute" left="0" top="8px">
                                <BackButton />
                            </Box>
                            <Box>
                                <Typography variant="h1">Список дел на {pluralizeMonths(state, pathname)}</Typography>
                            </Box>
                        </Route>
                    </Switch>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default withRouter(Header)
