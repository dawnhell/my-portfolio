import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import ROUTES from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  sideNav: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',

    '& $listItem': {
      transition: 'transform .4s, box-shadow .4s',
      transform: 'rotate(-35deg)',
      transformOrigin: 'bottom left',
    },

    '&:hover $listItem': {
      transform: 'rotate(0)',
    },
  },
  listItem: {
    display: 'block',
    color: theme.palette.text.primary,
    fontFamily: "'Fjalla One', sans-serif",
    fontSize: '1.7rem',
    margin: '0.75rem 0',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'transform .4s, box-shadow .4s',
    width: '100%',

    '&:hover, &.active': {
      background: 'transparent',
      boxShadow: `inset 0 -1.4rem 0 ${theme.palette.yellow}`,
    },
  },
}))

const SideNav = ({}) => {
  const classes = useStyles()

  return (
    <Box className={classes.sideNav}>
      <nav>
        {ROUTES.pages.map(page => (
          <NavLink
            key={page.title}
            to={page.path}
            className={classes.listItem}
            activeClassName="active"
          >
            {page.title}
          </NavLink>
        ))}
      </nav>
    </Box>
  )
}

SideNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default SideNav
