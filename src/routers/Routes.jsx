import React from 'react';

import { Switch, Redirect } from 'react-router-dom';
import {
  Order,
  SignIn,
  SignUp,
  History,
  Overview,
  Analytics,
  Assortiment,
} from "containers";

import PrivateRoute from './PrivateRoute';
import PublickRoute from './PublickRoute';

const AppRoutes = () => {
	// console.log('AppRoutes RENDERRRRRRRRRRRR');

	return (
    <Switch>
      <PublickRoute exact path="/login" component={SignIn} />
      <PublickRoute path="/register" component={SignUp} />
      <PrivateRoute path="/overview" component={Overview} />
      <PrivateRoute path="/analytics" component={Analytics} />
      <PrivateRoute path="/history" component={History} />
      <PrivateRoute path="/order" component={Order} />
      <PrivateRoute path="/category" component={Assortiment} />
      <Redirect to="/login" />
      {/* <Route component={() => <h2>404 Page Not Found</h2>} /> */}
    </Switch>
  );
};

export default AppRoutes;
