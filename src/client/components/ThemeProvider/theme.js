import { createMuiTheme } from '@material-ui/core'
import {
  lime,
  red,
  pink,
  yellow,
  orange,
  indigo,
} from '@material-ui/core/colors'

/* [TODO] place each theme in a separate folder, then import them in the index file and merge together */

const THEME = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  transitions: {
    create: () => 'none',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*, *::before, *::after': {
          transition: 'none !important',
          animation: 'none !important',
        },
      },
    },
  },
  palette: {
    primaryColor1: orange[400],
    primary: {
      main: indigo[900],
      contrastText: lime[100],
      dark: lime[100],
    },
    secondary: {
      main: lime[100],
      contrastText: lime[100],
    },
    error: {
      main: orange[400],
    },
    red: '#ef5350',
    indigo: '#512da8',
    lime: '#d4e157',
    lightRed: '#e57373',
    pink: pink[400],
    yellow: yellow[500],
    eggshell: lime[100],
    // oldLace: 'rgba(255, 245, 225, 0.3)',
    orange: orange[400],
    blue: 'rgba(3, 3, 79, 0.5)',
    lightGrey: '#757575',
    oldLace: '#FFF5E1',
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
