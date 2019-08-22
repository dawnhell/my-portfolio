import { createMuiTheme } from '@material-ui/core'
import {
  lime,
  red,
  pink,
  yellow,
  orange,
  indigo,
} from '@material-ui/core/colors'

const THEME = createMuiTheme({
  palette: {
    primary: {
      main: indigo[900],
      contrastText: lime[100],
    },
    secondary: {
      main: lime[100],
      contrastText: lime[100],
    },
    error: {
      main: orange[400],
    },
    red: red[600],
    pink: pink[400],
    yellow: yellow[500],
    eggshell: lime[100],
    orange: orange[400],
  },
  typography: {
    fontFamily: [
      '"Fjalla One"',
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
  },
})

export default THEME
