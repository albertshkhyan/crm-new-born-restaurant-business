import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';

import PublicRoute from 'routers/PublicRoute';

import Grid from '@material-ui/core/Grid';

import Particles from 'react-particles-js';
import particlesParams from 'particlesjs-config.json';

import { useLocation } from 'react-router-dom';

import { isRoot } from 'utils';

import { SignIn, SignUp } from 'containers';

const useStyles = makeStyles((theme) => ({
	parent: {
		position: 'absolute',

		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
	child1: {
		position: 'absolute',
		zIndex: '999',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
	canvasContainer: { overflow: 'hidden', height: '100vh' },
	child2: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		// width: 'max-content',
		width: '100%',
		transform: 'translate(-50%,-50%)',
		height: 'max-content',
		zIndex: '999',
		// [theme.breakpoints.up('xs')]: {
		// 	width: '100%',
		// 	border: '10px solid',
		// },
	},
}));

const AuthContainer = () => {
	const classes = useStyles();
	let location = useLocation();

	const [width, setWidth] = useState('0px');
	const [height, setHeight] = useState('0px');

	const updateWindowDimensions = () => {
		setWidth(`${window.innerWidth}px`);
		setHeight(`${window.innerHeight}px`);
	};

	useEffect(() => {
		updateWindowDimensions();
		window.addEventListener('resize', updateWindowDimensions);
		return () => {
			window.removeEventListener('resize', updateWindowDimensions);
		};
	}, []);
	return (
		<>
			{/**parent div */}
			<div className={classes.parent}>
				{/**chil div 1 */}
				<div className={classes.child1}>
					<div className={classes.canvasContainer}>
						<Particles width={width} height={height} params={particlesParams} />
					</div>
				</div>
				{/**chil div 2 */}
				<Grid container justify="center" className={classes.child2}>
					<Grid item xs={8} sm={5} md={4} lg={3} xl={3}>
						{location.pathname === '/login' && <SignIn />}
						{location.pathname === '/register' && <SignUp />}
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default AuthContainer;
