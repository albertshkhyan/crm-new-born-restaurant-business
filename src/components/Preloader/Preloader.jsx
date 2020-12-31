import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
}));

const Preloader = () => {
	const classes = useStyles();

	return (
		<>
			<Grid item xs={12}>
				<Grid container justify="center">
					<Grid item>
						<div className={classes.root}>
							<CircularProgress />
						</div>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Preloader;
