import React from 'react';

import Grid from '@material-ui/core/Grid';

import Assotiment from './Category';

import { Switch, Route, Redirect } from 'react-router-dom';

import EditCategory from 'containers/Category/EditCategory/EditCategory';
import AddCategory from 'containers/Category/AddCategory/AddCategory';
import CategoryHeader from './CategoryHeader/CategoryHeader';

const RoutesCategory = () => {
	return (
		<>
			<Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
				<CategoryHeader />
				<Switch>
					<Route exact path="/category" component={Assotiment} />
					<Route exact path="/category/new" component={AddCategory} />
					<Route exact path="/category/:id" component={EditCategory} />
					<Redirect to="/category" />
				</Switch>
			</Grid>
		</>
	);
};

export default RoutesCategory;
