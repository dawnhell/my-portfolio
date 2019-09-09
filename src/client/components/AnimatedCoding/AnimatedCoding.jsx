import React from 'react'
import { useSpring, animated } from 'react-spring'

import { makeStyles } from '@material-ui/core'

import CYBER_PLATFORM from '../../assets/platform.png'
import CYBER_PERSON from '../../assets/person.png'
import CYBER_LAPTOP from '../../assets/laptop.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const platformTransition = (x, y) =>
  `translate3d(${x / 30 - 530}px, ${y / 24 - 250}px, 0)`
const programmerTransition = (x, y) =>
  `translate3d(${x / 24 - 450}px, ${y / 24 - 600}px, 0)`
const laptopTransition = (x, y) =>
  `translate3d(${x / 18 - 600}px, ${y / 18 - 330}px, 0)`

const useStyles = makeStyles(theme => ({
  platform: {
    position: 'absolute',
    borderRadius: '5px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
    width: '600px',
    height: '300px',
    backgroundImage: `url(${CYBER_PLATFORM})`,
    filter: 'drop-shadow(-2px -4px 20px rgba(0,0,100,0.7))',
  },

  programmer: {
    position: 'absolute',
    borderRadius: '5px',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
    width: '400px',
    height: '700px',
    backgroundImage: `url(${CYBER_PERSON})`,
    filter: 'drop-shadow(4px 11px 10px rgba(0,0,0,0.6))',
  },

  laptop: {
    position: 'absolute',
    borderRadius: '5px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform',
    width: '227px',
    height: '250px',
    backgroundImage: `url(${CYBER_LAPTOP})`,
    filter: 'drop-shadow(5px 5px 16px black)',
  },

  animatedCoding: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100vh',
    overflow: 'hidden',
    zIndex: 0,
  },

  animatedCodingWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
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
      className={classes.animatedCoding}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className={classes.animatedCodingWrapper}>
        <animated.div
          className={classes.platform}
          style={{ transform: props.xy.interpolate(platformTransition) }}
        />
        <animated.div
          className={classes.laptop}
          style={{ transform: props.xy.interpolate(laptopTransition) }}
        />
        <animated.div
          className={classes.programmer}
          style={{ transform: props.xy.interpolate(programmerTransition) }}
        />
      </div>
    </div>
  )
}

export default AnimatedCoding
