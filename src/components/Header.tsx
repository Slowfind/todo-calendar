import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import Box from '@material-ui/core/Box/Box'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BackButton } from './BackButton'

export const Header: React.FC = () => {
    return (
        <AppBar color="primary" position="sticky">
            <Container disableGutters>
                <Toolbar component="div">
                    <Switch>
                        <Route exact path="/">
                            <Typography variant="h1">TODO Календарь</Typography>
                        </Route>
                        <Route exact path="/:id">
                            <Box position="absolute" left="0" top="8px">
                                <BackButton />
                            </Box>

                            <Box>
                                <Typography variant="h1">Январь</Typography>
                            </Box>
                        </Route>
                    </Switch>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
