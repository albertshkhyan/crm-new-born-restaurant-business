import React, { useEffect, useState } from 'react';

import { Switch, Redirect } from 'react-router-dom';
import {
	Order,
	SignIn,
	SignUp,
	History,
	Overview,
	Analytics,
	RoutesCategory,
	RoutesOrder,
	AuthContainer,
} from 'containers';

import PrivateRoute from './PrivateRoute';

import PublicRoute from './PublicRoute';
// import Grid from '@material-ui/core/Grid';
// import Particles from 'react-particles-js';
// import particlesParams from 'particlesjs-config.json';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
// 	parent: {
// 		position: 'absolute',

// 		top: 0,
// 		left: 0,
// 		width: '100%',
// 		height: '100%',
// 	},
// 	child1: {
// 		position: 'absolute',
// 		zIndex: '999',
// 		top: 0,
// 		left: 0,
// 		width: '100%',
// 		height: '100%',
// 	},
// 	canvasContainer: { overflow: 'hidden', height: '100vh' },
// 	child2: {
// 		position: 'absolute',
// 		top: '50%',
// 		left: '50%',
// 		// width: 'max-content',
// 		width: '100%',
// 		transform: 'translate(-50%,-50%)',
// 		height: 'max-content',
// 		zIndex: '999',
// 		// [theme.breakpoints.up('xs')]: {
// 		// 	width: '100%',
// 		// 	border: '10px solid',
// 		// },
// 	},
// }));

const AppRoutes = () => {
	// const classes = useStyles();

	////////////////////////////
	// const [width, setWidth] = useState('0px');
	// const [height, setHeight] = useState('0px');

	// const updateWindowDimensions = () => {
	// 	setWidth(`${window.innerWidth}px`);
	// 	setHeight(`${window.innerHeight}px`);
	// };

	// useEffect(() => {
	// 	updateWindowDimensions();
	// 	window.addEventListener('resize', updateWindowDimensions);
	// 	return () => {
	// 		window.removeEventListener('resize', updateWindowDimensions);
	// 	};
	// }, []);
	////////////////////////////
	return (
		<Switch>
			{/* <div className={classes.parent}>
				<div className={classes.child1}>
					<div className={classes.canvasContainer}>
						<Particles width={width} height={height} params={particlesParams} />
					</div>
				</div>
				<Grid container justify="center" className={classes.child2}>
					<Grid item xs={8} sm={5} md={4} lg={3} xl={3}>
						<PublicRoute exact path="/login" component={SignIn} />
						<PublicRoute exact path="/register" component={SignUp} />
					</Grid>
				</Grid>
			</div> */}
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
