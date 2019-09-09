import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AnimatedCoding from '../AnimatedCoding/AnimatedCoding'

const useStyles = makeStyles(theme => ({
  home: {
    zIndex: 1,
  },
  typist: {
    '.Cursor': {
      animationName: 'blinker',
      animationDuration: '0.7s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',

      '@keyframes blinker': {
        '0%': { opacity: 1.0 },
        '50%': { opacity: 0.0 },
        '100%': { opacity: 1.0 },
      },
    },
  },
}))

const Home = ({}) => {
  const classes = useStyles()

  return (
    <Box className={classes.home}>
      <Typist className={classes.typist} avgTypingDelay={40} startDelay={1000}>
        <h2>Hi there!</h2>
        <h4>My name is Vladislav Klochkov</h4>
        <h4>and I'm a Front-End developer</h4>
      </Typist>

      <AnimatedCoding />
    </Box>
  )
}

Home.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default Home
