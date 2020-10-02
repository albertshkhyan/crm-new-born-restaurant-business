import React from 'react';

import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...restProps }) => {
	const { isAuthorized, status } = useSelector((state) => state.logger);

	console.log('PrivateRoute work');
	let isAuth = isAuthorized;
	if (!isAuth) {
		isAuth = localStorage.getItem('token');
	}
	if (isAuth && status === 'Unauthorized') {
		localStorage.clear();
	}
	return <Route {...restProps} render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
