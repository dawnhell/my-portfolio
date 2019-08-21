import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import ThemeProvider from '../ThemeProvider/ThemeProvider'
import store from '../../lib/store'

const Wrapper = props => {
  const { children } = props

  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default Wrapper
