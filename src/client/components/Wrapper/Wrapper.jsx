import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import SideNav from '../SideNav/SideNav'
import Routes from '../Routes/Routes'

import BACKGROUND_IMG from '../../assets/images/1 abstract background by freeject.net.jpg'
import NOISE_BACKGROUND_IMG from '../../assets/images/4 noise texture by freeject.net.jpg'

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    backgroundImage: `url(${BACKGROUND_IMG})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  '$contentWrapper::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundImage: `url(${NOISE_BACKGROUND_IMG})`,
    width: '100%',
    height: '100%',
    opacity: '0.2',
    zIndex: '-1',
  },
  content: {
    backgroundColor: theme.palette.blue,
  },
  leftSide: {
    zIndex: 2,
  },
}))

const Wrapper = () => {
  const classes = useStyles()

  return (
    <Router>
      <Box className={classes.contentWrapper}>
        <Grid container className={classes.content}>
          <Grid item xs={2} className={classes.leftSide}>
            <SideNav />
          </Grid>

          <Grid item xs={10}>
            {Routes}

            <Redirect to="/home" />
          </Grid>
        </Grid>
      </Box>
    </Router>
  )
}

export default Wrapper
