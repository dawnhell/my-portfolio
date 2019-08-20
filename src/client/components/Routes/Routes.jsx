import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../Home/Home'
import routePaths from '../../constants/routes'

const Routes = (
  <Router>
    <Route exact path={routePaths.root.path} component={Home} />
  </Router>
)

export default Routes
