import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import GlitchNavLink from '../GlitchNavLink/GlitchNavLink'

import ROUTES from '../../constants/routes'

const useStyles = makeStyles(() => ({
  sideNav: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    flexDirection: 'column',

    '& .sideNavLink': {
      transition: 'transform .4s, box-shadow .4s',
      transform: 'rotate(-15deg)',
      transformOrigin: 'bottom left',
    },

    '&:hover .sideNavLink': {
      transform: 'rotate(0)',
    },
  },
}))

const SideNav = ({}) => {
  const classes = useStyles()

  return (
    <nav className={classes.sideNav}>
      {ROUTES.pages.map(page => (
        <div className="sideNavLink" key={page.title}>
          <GlitchNavLink to={page.path} title={page.title} />
        </div>
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
