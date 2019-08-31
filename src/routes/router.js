import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Road from './Road'
import Wind from './Wind/index'

const browserHistory = createBrowserHistory()

const BasicRoute = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path='/road' component={Road}/>
      <Route path='/' component={Wind}/>
    </Switch>
  </Router>
)

export default BasicRoute
