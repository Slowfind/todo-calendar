import { deepPurple, deepOrange, red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Ubuntu',
            'Helvetica Neue',
            'sans-serif',
        ].join(', '),
        body1: {
            fontSize: '1.4rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h1: {
            fontSize: '2.4rem',
            fontWeight: 600,
        },
    },
    palette: {
        primary: {
            main: deepPurple[500],
            light: '#9a67ea',
            dark: '#320b86',
            contrastText: '#fff',
        },
        secondary: {
            main: deepOrange[500],
            contrastText: '#fff',
        },
        error: {
            main: red[700],
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '10px 0',
            },
        },
        MuiToolbar: {
            root: {
                display: 'flex',
                justifyContent: 'center',
            },
        },
        MuiIconButton: {
            root: {
                borderRadius: 9999,
                transition: '.3s ease-in-out',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.24)',
                },
            },
        },
    },
})
