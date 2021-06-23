import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import Box from '@material-ui/core/Box/Box'
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { BackButton } from './BackButton'

const Header: React.FC = ({ location }: any) => {
    const { pathname } = location

    const pathnameTitle = pathname.replace(/[^a-zа-яё\s]/gi, ' ')
    const pathnameNumber = pathname.replace(/\D/g, '')

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
                                <Typography variant="h1">{pathnameTitle}</Typography>
                            </Box>
                        </Route>
                        <Route path="/:id/:id" exact>
                            <Box position="absolute" left="0" top="8px">
                                <BackButton />
                            </Box>
                            <Box>
                                <Typography variant="h1">
                                    TODO LIST {pathnameNumber} {pathnameTitle}
                                </Typography>
                            </Box>
                        </Route>
                    </Switch>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default withRouter(Header)
