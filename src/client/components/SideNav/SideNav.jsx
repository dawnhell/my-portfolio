import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import GlitchNavLink from '../GlitchNavLink/GlitchNavLink'

import ROUTES from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  sideNav: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    flexDirection: 'column',

    // '& $navLink': {
    //   transition: 'transform .4s, box-shadow .4s',
    //   transform: 'rotate(-35deg)',
    //   transformOrigin: 'bottom left',
    // },
    //
    // '&:hover $navLink': {
    //   transform: 'rotate(0)',
    // },
  },
}))

const SideNav = ({}) => {
  const classes = useStyles()

  return (
    <nav className={classes.sideNav}>
      {ROUTES.pages.map(page => (
        <GlitchNavLink key={page.title} to={page.path} title={page.title} />
      ))}
    </nav>
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
