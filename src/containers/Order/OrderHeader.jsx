import React from 'react';

import Grid from '@material-ui/core/Grid';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { useLocation, matchPath } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ConfirmOrderDialog from './ConfirmOrderDialog';
import { setOrderTotalPrice } from 'app/reducers/orderReducer';

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
	const location = useLocation();

	const [open, setOpen] = React.useState(false);
	// const [value, setValue] = React.useState('Dione');

	const dispatch = useDispatch();

	const orderList = useSelector((state) => state.order.list);

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

	const handleClose = (newValue) => {
		setOpen(false);
	};

	const handleComplete = () => {
		dispatch(setOrderTotalPrice());
		setOpen(orderList.length > 0 ? true : false);
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
					<Button
						disabled={!(orderList.length > 0)}
						onClick={handleComplete}
						fullWidth
						variant="contained"
						color="primary"
					>
						complete
					</Button>

					{/* <Portal container={open}> */}
					<ConfirmOrderDialog
						id="ringtone-menu"
						keepMounted
						open={open}
						onClose={handleClose}
						// value={value}
					/>
					{/* </Portal> */}
				</Grid>
			</Grid>
			{children}
		</>
	);
}
