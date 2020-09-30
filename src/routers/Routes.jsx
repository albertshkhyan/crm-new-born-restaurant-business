import React from 'react';

import { Switch, Redirect } from 'react-router-dom';
import { SignIn, SignUp, Overview, Analytics } from 'containers';

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
			{/* <Redirect to="/login" /> */}
			{/* <Route component={() => <h2>404 Page Not Found</h2>} /> */}
		</Switch>
	);
};

export default AppRoutes;
