import React from 'react'
import PropTypes from 'prop-types'

const UrlAnimationWrapper = ({ children }) => {
  let f = ['🌑🙈🙈🙈', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒'],
    d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    m = 0

  const moon = () => {
    let s = '',
      x = 0

    if (!m) {
      while (d[x] === 4) {
        x++
      }

      if (x >= d.length) m = 1
      else {
        d[x]++
      }
    } else {
      while (d[x] === 0) {
        x++
      }

      if (x >= d.length) m = 0
      else {
        d[x]++

        if (d[x] === 8) d[x] = 0
      }
    }

    d.forEach(function(n) {
      s += f[n]
    })

    location.hash = s

    setTimeout(moon, 50)
  }

  const wave = () => {
    let i,
      n,
      s = ''

    for (i = 0; i < 10; i++) {
      n = Math.floor(Math.sin(Date.now() / 200 + i / 2) * 4) + 4

      s += String.fromCharCode(0x2581 + n)
    }

    window.location.hash = s

    setTimeout(wave, 50)
  }

  // moon()
  // wave()

  return children
}

UrlAnimationWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
}

export default UrlAnimationWrapper
