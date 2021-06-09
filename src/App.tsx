import { Box, Container } from '@material-ui/core'
import React from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'

/* туду
1. сделать липкую шапку с загаловком и кнопкой назад // check
2. сделать чтобы менялось название заголовка, и кнопка назад появлялась на других страницах
3. создать нормальное оформление карточек дней
4. сделать через редакс
5. создать страницу задач
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
