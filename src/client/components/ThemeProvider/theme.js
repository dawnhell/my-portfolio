import { createMuiTheme } from '@material-ui/core'
import { blueGrey, cyan, deepOrange } from '@material-ui/core/colors'

const THEME = createMuiTheme({
  palette: {
    primary: {
      light: blueGrey.A200,
      main: blueGrey.A400,
      dark: blueGrey.A700,
    },
    secondary: {
      light: cyan.A200,
      main: cyan.A400,
      dark: cyan.A700,
    },
    error: {
      light: deepOrange.A200,
      main: deepOrange.A400,
      dark: deepOrange.A400,
    },
  },
})

export default THEME
