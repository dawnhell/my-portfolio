import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from '@material-ui/core/styles'

import THEME from './theme'

const ThemeProvider = props => {
  const { children } = props

  return <MuiThemeProvider theme={THEME}>{children}</MuiThemeProvider>
}

ThemeProvider.defaultProps = {
  children: null,
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default ThemeProvider
