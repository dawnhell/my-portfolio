import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  navLink: {
    display: 'block',
    color: theme.palette.text.primary,
    fontFamily: "'Fjalla One', sans-serif",
    fontSize: '2.5rem',
    margin: '0.75rem 0',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    textShadow: `
      1px 1px 0 ${theme.palette.lightRed},
      1px 2px 0 ${theme.palette.lightRed},
      1px 3px 0 ${theme.palette.lightRed}
    `,
    transition: 'transform .4s, box-shadow .4s',

    '&:hover, &.active': {
      background: 'transparent',
      boxShadow: `inset 0 -2rem 0 ${theme.palette.yellow}`,
    },
  },

  glitchingLink: {
    padding: '0.5rem',

    '&:hover': {
      animation: '$glitch 3s steps(100) infinite',
    },
  },

  '@keyframes glitch': {
    '0%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '1%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '2%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '3%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '4%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '5%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '6%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '7%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '8%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '9%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '10%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '11%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '12%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '13%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '14%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '15%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '16%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '17%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '18%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '19%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '20%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '21%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '22%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '23%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '24%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '25%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '26%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '27%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '28%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '29%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '30%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '31%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '32%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '33%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '34%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '35%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '36%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '37%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '38%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '39%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '40%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '41%': {
      textShadow: `45px 0 0 ${theme.palette.indigo}, -45px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '42%': {
      textShadow: `0 0 0 ${theme.palette.indigo}, 0 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '43%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '44%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '45%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '46%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '47%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '48%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '49%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '50%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '51%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '52%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '53%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '54%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '55%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0.5px)',
    },
    '56%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0.5px)',
    },
    '57%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0.5px)',
    },
    '58%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '59%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '60%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '61%': {
      textShadow: `30px 0 0 ${theme.palette.red}, -30px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '62%': {
      textShadow: `0 0 0 ${theme.palette.red}, 0 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '63%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '64%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '65%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '66%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0.5px)',
    },
    '67%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0.5px)',
    },
    '68%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '69%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '70%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '71%': {
      textShadow: `50px 0 0 ${theme.palette.red}, -50px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '72%': {
      textShadow: `0 0 0 ${theme.palette.red}, 0 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '73%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '74%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '75%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '76%': {
      textShadow: `3px 0 0 ${theme.palette.red}, -3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '77%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '78%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '79%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '80%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '81%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '82%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '83%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '84%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '85%': {
      textShadow: `1px 0 0 ${theme.palette.red}, -1px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '86%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '87%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0.5px)',
    },
    '88%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '89%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '90%': {
      textShadow: `-3px 0 0 ${theme.palette.red}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '91%': {
      textShadow: `60px 0 0 ${theme.palette.lime}, -60px 0 0 ${theme.palette.indigo}`,
      filter: 'blur(0)',
    },
    '92%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '93%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '94%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '95%': {
      textShadow: `0.8px 0 0 ${theme.palette.indigo}, -0.8px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '96%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '97%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '98%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '99%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
    '100%': {
      textShadow: `-3px 0 0 ${theme.palette.indigo}, 3px 0 0 ${theme.palette.lime}`,
      filter: 'blur(0)',
    },
  },
}))

const GlitchNavLink = ({ to, title }) => {
  const classes = useStyles()

  return (
    <NavLink to={to} className={classes.navLink} activeClassName="active">
      <span className={classes.glitchingLink}>{title}</span>
    </NavLink>
  )
}

GlitchNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default GlitchNavLink
