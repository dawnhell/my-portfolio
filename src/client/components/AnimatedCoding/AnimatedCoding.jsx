import React from 'react'
import { useSpring, animated } from 'react-spring'

import { makeStyles } from '@material-ui/core'

import COMPUTER_ICON from '../../assets/computer.svg'
import DEVELOPER_ICON from '../../assets/developer.svg'
import SUN_ICON from '../../assets/sun.svg'
import ISLAND_ICON from '../../assets/island.svg'
import PROGRAMMER_ICON from '../../assets/programmer.svg'
import CLOUDS_ICON from '../../assets/clouds.svg'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    background: '#f0f0f0',
  },

  card1: {
    position: 'absolute',
    borderRadius: '5px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
    minWidth: '20ch',
    minHeight: '20ch',
    width: '25vw',
    height: '25vw',
    backgroundImage: `url(${ISLAND_ICON})`,
  },

  card2: {
    position: 'absolute',
    borderRadius: '5px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
    width: '15ch',
    height: '15ch',
    backgroundImage: `url(${SUN_ICON})`,
  },

  card3: {
    position: 'absolute',
    borderRadius: '5px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
    opacity: 0.9,
    width: '15ch',
    height: '15ch',
    backgroundImage: `url(${CLOUDS_ICON})`,
  },

  card4: {
    position: 'absolute',
    borderRadius: '5px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
    width: '15ch',
    height: '15ch',
    backgroundImage: `url(${PROGRAMMER_ICON})`,
  },

  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const AnimatedCoding = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  const classes = useStyles()

  return (
    <div
      className={classes.container}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className={classes.card1}
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className={classes.card2}
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className={classes.card3}
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className={classes.card4}
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  )
}

export default AnimatedCoding
