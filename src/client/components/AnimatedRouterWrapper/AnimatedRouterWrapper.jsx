import React from 'react'
import { AnimatedSwitch } from 'react-router-transition'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'

const useClasses = makeStyles(theme => ({
  AnimatedSwitch: {
    position: 'relative',

    '& > div': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
}))

const AnimatedRouterWrapper = ({ children }) => {
  const classes = useClasses()

  return (
    <AnimatedSwitch
      // atEnter={{ opacity: 0 }}
      // atLeave={{ opacity: 0 }}
      // atActive={{ opacity: 1 }}

      atEnter={{ offset: -100 }}
      atLeave={{ offset: 100 }}
      atActive={{ offset: 0 }}
      mapStyles={styles => ({
        transform: `translateY(${styles.offset}vh)`,
      })}
      className={classes.AnimatedSwitch}
    >
      {children}
    </AnimatedSwitch>
  )
}

AnimatedRouterWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default AnimatedRouterWrapper
