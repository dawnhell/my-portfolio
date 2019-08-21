import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}))

const Home = ({}) => {
  const classes = useStyles()

  return (
    <Box>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button
        variant="contained"
        color="secondary"
        disabled
        className={classes.button}
      >
        Disabled
      </Button>
      <Button
        variant="contained"
        href="#contained-buttons"
        className={classes.button}
      >
        Link
      </Button>
    </Box>
  )
}

Home.propTypes = {}

export default Home
