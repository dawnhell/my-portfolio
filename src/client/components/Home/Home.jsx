import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import SideNav from '../SideNav/SideNav'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    background: theme.palette.primary.light,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const Home = ({}) => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={2}>
        <SideNav />
      </Grid>
      <Grid item xs={10}>
        <Box className={classes.paper}>
          <Button variant="contained" color="primary">Toggle</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

Home.propTypes = {}

export default Home
