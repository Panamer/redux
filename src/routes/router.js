import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Loadable from 'react-loadable';
import MyLoadingComponent from '../components/LoadingComponent'

import Wind from './Wind/index'

const Road = Loadable({
    loader: () => import('./Road'),
    loading: MyLoadingComponent
});

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
