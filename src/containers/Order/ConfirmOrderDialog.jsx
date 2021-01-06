import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import OrderTableDialog from './OrderTableDialog';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderListSelector } from 'app/selectors/orderSelectors';
import { createOrderSG } from 'app/sagasActions/orderActions';

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	paper: {
		width: '80%',
		maxHeight: 435,
	},
	totalCostFormat: { fontSize: '1.5rem', fontWeight: 'bold' },
	totalCost: { fontSize: '1.5rem' },
}));

function ConfirmOrderDialog(props) {
	const classes = useStyles();

	const orderTotalPrice = useSelector((state) => state.order.totalPrice);

	const orderList = useSelector(getOrderListSelector);
	const dispatch = useDispatch();

	const { onClose, value: valueProp, open, ...other } = props;
	const [value, setValue] = useState(valueProp);
	const [inProgress, setInPorgress] = useState(false);

	useEffect(() => {
		if (!open) {
			setValue(valueProp);
		}
	}, [valueProp, open]);

	const handleCancel = () => {
		onClose();
	};

	const handleConfirm = () => {
		dispatch(createOrderSG(orderList, (inProgress) => setInPorgress(inProgress)));
		onClose(value);
	};

	return (
		<Dialog
			disableBackdropClick
			disableEscapeKeyDown
			maxWidth="md"
			aria-labelledby="confirmation-dialog-title"
			open={open}
			{...other}
		>
			<DialogTitle id="confirmation-dialog-title">Your order</DialogTitle>
			<DialogContent dividers>
				<OrderTableDialog />
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleCancel} color="primary">
					Cancel
				</Button>
				<Button
					disabled={!orderList.length || inProgress}
					variant="contained"
					onClick={handleConfirm}
					color="primary"
				>
					confirm
				</Button>
			</DialogActions>
			<Box display="flex" justifyContent="flex-end" bgcolor="background.paper">
				<Box p={1}>
					<Typography className={classes.totalCost} variant="subtitle1" gutterBottom>
						Total cost
					</Typography>
				</Box>
				<Box p={1}>
					<Typography className={classes.totalCostFormat} variant="subtitle1" gutterBottom>
						{formatter.format(orderTotalPrice)}
					</Typography>
				</Box>
			</Box>
		</Dialog>
	);
}

ConfirmOrderDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};

export default ConfirmOrderDialog;
