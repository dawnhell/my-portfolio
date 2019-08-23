import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'

const About = ({}) => {
  return (
    <Paper>
      <h4>about</h4>
    </Paper>
  )
}

About.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default About
