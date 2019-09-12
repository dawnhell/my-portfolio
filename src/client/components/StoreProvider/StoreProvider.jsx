import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import store from '../../lib/store'

const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default StoreProvider
