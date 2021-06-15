import { Box, Container } from '@material-ui/core'
import React from 'react'
import Header from './components/Header'
import { Home } from './pages/Home'

/* туду
1. подключить библиотеку moment.js
2. сделать месяца через json-server редакс-сагой
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
