import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import SideNav from '../SideNav/SideNav'
import Routes from '../Routes/Routes'

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.oldLace,
  },
}))

const Wrapper = () => {
  const classes = useStyles()

  return (
    <Router>
      <Grid container className={classes.content}>
        <Grid item xs={2}>
          <SideNav />
        </Grid>

        <Grid item xs={10}>
          {Routes}

          <Redirect to="/home" />
        </Grid>
      </Grid>
    </Router>
  )
}

export default Wrapper
