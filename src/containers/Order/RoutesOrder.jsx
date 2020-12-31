import React from 'react';

import Grid from '@material-ui/core/Grid';

import Order from './Order';

import { Switch, Route, Redirect } from 'react-router-dom';

import AddOrder from 'containers/Order/AddOrder.jsx';
import OrderHeader from './OrderHeader';

const RoutesOrder = () => (
	<Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
		<OrderHeader />
		<Switch>
			<Route exact path="/order" component={Order} />
			<Route exact path="/order/:id" component={AddOrder} />
			<Redirect to="/order" />
		</Switch>
	</Grid>
);

export default RoutesOrder;
