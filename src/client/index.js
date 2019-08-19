import './initializer'
import React from 'react'
import { render } from 'react-dom'
import applicationContainer from './container'
import App from './components/App/App'
import './styles/theme/global.scss'

render(
  <App />,
  applicationContainer
)
