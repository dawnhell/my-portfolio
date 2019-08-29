import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import AnimatedCoding from '../AnimatedCoding/AnimatedCoding'

const useStyles = makeStyles(theme => ({
  home: {
    position: 'relative',
    height: '100vh',
  },
  typist: {},
  animatedCoding: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
}))

const Home = ({}) => {
  const classes = useStyles()

  return (
    <Box className={classes.home}>
      <Typist>
        <h2>Hi there!</h2>
        <h4>My name is Vladislav Klochkov</h4>
        <h4>and I'm a Front-end developer</h4>
      </Typist>

      <Box className={classes.animatedCoding}>{/*<AnimatedCoding />*/}</Box>
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
