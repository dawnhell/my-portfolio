import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import ThemeProvider from '../ThemeProvider/ThemeProvider'
import store from '../../lib/store'

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider>{children}</ThemeProvider>
  </Provider>
)

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default StoreProvider
