import React from 'react';

import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import Preloader from './../components/Preloader/Preloader';

const PrivateRoute = ({ component: Component, isLoading = true, ...restProps }) => {
	const isAuthorized = useSelector((state) => state.logger.isAuthorized);

	// if (!isLoading) {
	// 	return <Preloader />;
	// }

	return (
		<Route
			{...restProps}
			render={(props) =>
				isAuthorized ? (
					<Component {...props} />
				) : (
					<Redirect to={restProps.redirectTo ? restProps.redirectTo : '/login'} />
				)
			}
		/>
	);
};

export default PrivateRoute;
