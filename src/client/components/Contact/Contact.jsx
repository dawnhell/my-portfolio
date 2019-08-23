import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'

const Contact = ({}) => {
  return (
    <Paper>
      <h4>contact</h4>
    </Paper>
  )
}

Contact.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default Contact
