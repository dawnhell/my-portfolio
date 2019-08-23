import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'

const Projects = ({}) => {
  return (
    <Paper>
      <h4>projects</h4>
    </Paper>
  )
}

Projects.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default Projects
