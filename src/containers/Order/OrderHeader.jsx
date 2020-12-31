import React from 'react';

import Grid from '@material-ui/core/Grid';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import ConfirmOrderDialog from './ConfirmOrderDialog';

import { makeStyles } from '@material-ui/core/styles';

import { useHistory, useLocation, useParams, matchPath } from 'react-router-dom';

import Portal from '@material-ui/core/Portal';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2, 0),
	},
	button: {
		margin: theme.spacing(1),
	},
	buttonGroupContainer: {
		padding: '15px 0',
	},
}));

export default function OrderHeader({ children }) {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	let { id } = useParams();
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('Dione');

	// const match = matchPath(pathname, {
	// 	path: '/order/:id',
	// 	exact: true,
	// 	strict: false,
	// });

	const match = matchPath(location.pathname, {
		path: '/order/:id',
		exact: true,
		strict: true,
	});

	const getOrderId = () => {
		if (match) {
			const orderId = match.params.id;
			return orderId;
		}
		return null;
	};
	/**
	 		routeData={[
						{ url: '/category', title: 'Category' },
						{ url: '/category/new', title: 'Create category' },
					]}
	 */

	const handleClose = (newValue) => {
		setOpen(false);
	};

	const handleComplete = () => {
		setOpen(true);
	};

	return (
		<>
			<Grid className={classes.buttonGroupContainer} container justify="space-between">
				<Grid item>
					<Breadcrumbs
						routeData={[
							{ url: '/order', title: 'Order' },
							{ url: `/order/${getOrderId()}`, title: 'Add Product' },
						]}
						pathname={location.pathname}
					/>
				</Grid>
				<Grid item>
					<Button onClick={handleComplete} fullWidth variant="contained" color="primary">
						complete
					</Button>

					{/* <Portal container={open}> */}
					<ConfirmOrderDialog
						id="ringtone-menu"
						keepMounted
						open={open}
						onClose={handleClose}
						value={value}
					/>
					{/* </Portal> */}
				</Grid>
			</Grid>
			{children}
		</>
	);
}
