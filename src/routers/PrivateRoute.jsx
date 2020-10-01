import React from 'react';

import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...restProps }) => {
	const isAuthorized = useSelector((state) => state.logger.isAuthorized);
	// console.log('isAuthenticated', isAuthenticated);

	let isAuth = isAuthorized;
	if (!isAuth) {
		isAuth = localStorage.getItem('token');
	}
	console.log('isAuth', isAuth);

	return <Route {...restProps} render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
