import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AnimatedCoding from '../AnimatedCoding/AnimatedCoding'

const useStyles = makeStyles(theme => ({
  home: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
  },

  typist: {
    color: theme.palette.oldLace,
    margin: '0 10rem',
    zIndex: 1,
    letterSpacing: '-1px',

    '& h2': {
      display: 'inline-block',
      fontFamily: "'Press Start 2P', cursive",
      fontSize: '3rem',
      margin: '2rem 0',
      textShadow: `
        0 -1px 0 #fff,
        0 1px 0 #2e2e2e,
        0 2px 0 #2c2c2c,
        0 3px 0 #2a2a2a,
        0 4px 0 #282828,
        0 5px 0 #262626,
        0 6px 0 #242424,
        0 7px 0 #222,
        0 8px 0 #202020,
        0 9px 0 #1e1e1e,
        0 10px 0 #1c1c1c,
        0 11px 0 #1a1a1a,
        0 12px 0 #181818,
        0 13px 0 #161616,
        0 14px 0 #141414,
        0 15px 0 #121212,
        0 22px 30px rgba(0, 0, 0, 0.9)
      `,
    },

    '& h4': {
      display: 'inline-block',
      fontFamily: "'Press Start 2P', cursive",
      fontSize: '2rem',
      fontWeight: 'normal',
      margin: '1rem 0',
      textShadow: `
        0 -1px 0 #fff,
        0 1px 0 #2e2e2e,
        0 2px 0 #2c2c2c,
        0 3px 0 #2a2a2a,
        0 4px 0 #282828,
        0 5px 0 #262626,
        0 6px 0 #242424
      `,
    },

    '& p': {
      display: 'inline-block',
      fontFamily: "'Press Start 2P', cursive",
      fontSize: '2rem',
      margin: '1rem 0',
      textShadow: `
        0 -1px 0 #fff,
        0 1px 0 #2e2e2e,
        0 2px 0 #2c2c2c,
        0 3px 0 #2a2a2a,
        0 4px 0 #282828,
        0 5px 0 #262626,
        0 6px 0 #242424
      `,
    },

    '& span': {
      fontFamily: '"Bungee Shade", cursive;',
      fontSize: '2.5rem',
      verticalAlign: 'bottom',
    },

    '& .Cursor': {
      animationName: '$blinker',
      animationDuration: '2s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      fontSize: '3rem',
      verticalAlign: 'text-bottom',
    },
  },

  neonGlow: {
    animation: '$neonGlow 1.5s ease-in-out infinite alternate',
  },

  '@keyframes blinker': {
    '0%': { opacity: 1.0 },
    '50%': { opacity: 0.0 },
    '100%': { opacity: 1.0 },
  },

  '@keyframes neonGlow': {
    from: {
      textShadow: `
        0 0 10px #fff,
        0 0 20px  #fff,
        0 0 30px  #fff,
        0 0 40px  #FFDD1B,
        0 0 70px  #FFDD1B,
        0 0 80px  #FFDD1B,
        0 0 100px #FFDD1B,
        0 0 150px #FFDD1B
      `,
    },
    to: {
      textShadow: `
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #fff,
        0 0 20px #FFDD1B,
        0 0 35px #FFDD1B,
        0 0 40px #FFDD1B,
        0 0 50px #FFDD1B,
        0 0 75px #FFDD1B
      `,
    },
  },
}))

const Home = ({}) => {
  const classes = useStyles()

  return (
    <Box className={classes.home}>
      <Typist className={classes.typist} avgTypingDelay={40} startDelay={1000}>
        <h2>Hi there!</h2>
        <br />
        <h4>My name is Uladzislau Klachkou</h4>
        <br />
        <p>
          and I'm a{' '}
          <span className={classes.neonGlow}>Front-End developer</span>
        </p>
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
