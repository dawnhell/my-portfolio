import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import SideNav from '../SideNav/SideNav'
import Routes from '../Routes/Routes'

import BACKGROUND_IMG from '../../assets/4 abstract background by freeject.net.jpg'

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    backgroundImage: `url(${BACKGROUND_IMG})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  content: {
    // backgroundColor: theme.palette.oldLace,
  },
}))

const Wrapper = () => {
  const classes = useStyles()

  return (
    <Router>
      <Box className={classes.contentWrapper}>
        <Grid container className={classes.content}>
          <Grid item xs={2}>
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
