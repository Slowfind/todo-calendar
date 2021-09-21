import { Box, Container } from '@material-ui/core'
import React from 'react'
import Header from './components/Header'
import { Home } from './pages/Home'

/*  todo */
/*
    Простые:
        1. Нужно сделать, чтобы не тормозил checked
        2. Сделать прелоадеры
    Сложные:
        1. Сделать компонент отдельных туду для листа
        2. Сделать заглушку, чтобы в днях была надпись "добавить туду"
        3. Сделать, чтобы приложение понимало время. И делала карточку зачеркнутой
        4. Если задача просрочена, она автоматически completed: true
        5. Добавить возможность изменения задачи
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
