import ThemeProvider from '@material-ui/styles/ThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { theme } from './theme'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </CssBaseline>
    </ThemeProvider>,
    document.getElementById('root')
)
