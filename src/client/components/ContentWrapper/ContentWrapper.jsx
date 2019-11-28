import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import SideNav from '../SideNav/SideNav'
import Routes from '../Routes/Routes'
import AnimatedRouterWrapper from '../AnimatedRouterWrapper/AnimatedRouterWrapper'

import BACKGROUND_IMG from '../../assets/images/1 abstract background by freeject.net.jpg'
import CYBERFRIVING_GIF from '../../assets/images/cyber_driving.gif'

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    backgroundImage: `url(${BACKGROUND_IMG})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },

  overlayGif: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundImage: `url(${CYBERFRIVING_GIF})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    filter: 'opacity(0.3) saturate(200%) hue-rotate(90deg)',
    width: '100%',
    height: '100%',
  },

  content: {
    backgroundColor: theme.palette.blue,
  },

  leftSide: {
    zIndex: 2,
  },
}))

const ContentWrapper = () => {
  const classes = useStyles()

  return (
    <Router>
      <Box className={classes.contentWrapper}>
        <Box className={classes.overlayGif} />

        <Grid container className={classes.content}>
          <Grid item xs={2} className={classes.leftSide}>
            <SideNav />
          </Grid>

          <Grid item xs={10}>
            <AnimatedRouterWrapper>
              {Routes}

              <Redirect to="/home" />
            </AnimatedRouterWrapper>
          </Grid>
        </Grid>
      </Box>
    </Router>
  )
}

export default ContentWrapper
