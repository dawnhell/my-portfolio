import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import ROUTES from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  sideNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',

    '& $listItem > $listItemText': {
      transform: 'rotate(-35deg)',
      transition: 'transform .5s',
      transformOrigin: 'bottom left',
    },

    '&:hover $listItem > $listItemText': {
      transform: 'rotate(0)',
    },
  },
  listItem: {
    width: '100%',
    textAlign: 'center',
    transition: 'box-shadow .5s',

    '&:hover': {
      background: 'transparent',
      boxShadow: `inset 0 -2em 0 ${theme.palette.eggshell}`,
    },
  },
  listItemText: {
    color: theme.palette.text.primary,
    fontFamily: "'Fjalla One', sans-serif",
    fontSize: 24,
    textTransform: 'uppercase',
  },
}))

const SideNav = ({}) => {
  const classes = useStyles()

  return (
    <Box className={classes.sideNav}>
      <List>
        {ROUTES.pages.map(page => (
          <ListItem button key={page.title} className={classes.listItem}>
            <ListItemText primary={page.title} className={classes.listItemText} disableTypography />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

SideNav.propTypes = {}

export default SideNav
