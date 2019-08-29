import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'

import './styles.scss'

const useStyles = makeStyles(theme => ({
  navLink: {
    display: 'block',
    color: theme.palette.text.primary,
    fontFamily: "'Fjalla One', sans-serif",
    fontSize: '3rem',
    margin: '0.5rem 0',
    padding: '0.2em',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'transform .4s, box-shadow .4s',

    '&:hover, &.active': {
      background: 'transparent',
      boxShadow: `inset 0 -2rem 0 ${theme.palette.yellow}`,
    },
  },
}))

const GlitchNavLink = ({ to, title }) => {
  const classes = useStyles()

  return (
    <NavLink to={to} className={classes.navLink} activeClassName="active">
      <span>{title}</span>
    </NavLink>
  )
}

GlitchNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default GlitchNavLink
