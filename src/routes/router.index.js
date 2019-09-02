import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';
import routes from './router.config';

const browserHistory = createBrowserHistory();


const BasicRoute = () => (
  <Router history={browserHistory}>
  {renderRoutes(routes)}
	</Router>
);

export default BasicRoute;
