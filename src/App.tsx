import { Box, Container } from '@material-ui/core'
import React from 'react'
import Header from './components/Header'
import { Home } from './pages/Home'

/* туду
1. Сделать через редакс дни
*/
function App() {
    return (
        <Box component="main">
            <Header />
            <Box pt={5}>
                <Container>
                    <Home />
                </Container>
            </Box>
        </Box>
    )
}

export default App
