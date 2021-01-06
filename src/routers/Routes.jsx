import React from 'react';

import { Switch, Redirect } from 'react-router-dom';
import { History, Overview, Analytics, RoutesCategory, RoutesOrder, AuthContainer } from 'containers';

import PrivateRoute from './PrivateRoute';

import PublicRoute from './PublicRoute';

const AppRoutes = () => {
	return (
		<Switch>
			<PublicRoute exact path="/login" component={AuthContainer} />
			<PublicRoute exact path="/register" component={AuthContainer} />
			{/* <AuthContainer /> */}
			<PrivateRoute exact path="/overview" component={Overview} />
			<PrivateRoute exact path="/analytics" component={Analytics} />
			<PrivateRoute exact path="/history" component={History} />
			<PrivateRoute path="/category" component={RoutesCategory} />
			<PrivateRoute path="/order" component={RoutesOrder} />
			<Redirect to="/login" />
			{/**after redirect on /loing (when isAuth = true) switch SignIn component it see that isAuth = true redirect to /overview*/}
			{/* <Route component={() => <h2>404 Page Not Found</h2>} />*/}
		</Switch>
	);
};

export default AppRoutes;
