import React from 'react'
import { Route } from 'react-router-dom'

import ROUTES from '../../constants/routes'

const Routes = ROUTES.pages.map(page => (
  <Route
    key={page.title}
    exact={!!page.exact}
    path={page.path}
    component={page.component}
  />
))

export default Routes
