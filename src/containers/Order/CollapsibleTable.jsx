import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getOrderListSelector } from 'app/selectors/orderSelectors';
import { useSnackbar } from 'notistack';

import { addOrder } from './../../app/reducers/orderReducer';

import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Row from './Row';

// Hook
function usePrevious(value) {
	// The ref object is a generic container whose current property is mutable ...
	// ... and can hold any value, similar to an instance property on a class
	const ref = useRef();

	// Store current value in ref
	useEffect(() => {
		ref.current = value;
	}, [value]); // Only re-run if value changes

	// Return previous value (happens before update in useEffect above)
	return ref.current;
}

const StyledTableCell = withStyles((theme) => ({
	head: {
		fontWeight: 'bold',
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.action.hover,
	},
}))(TableRow);

const CollapsibleTable = ({ positionData, categoryData }) => {
	const computedOrder = useSelector(getOrderListSelector); //memoize order arrays when in something pushed got new  address
	const dispatch = useDispatch();
	const [currentOrderId, setCurrentOrderId] = useState('');
	const prevOrderid = usePrevious(currentOrderId);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const addToOrderHandle = (_, quantity, addedOrder) => {
		const copyAddedOrder = { ...addedOrder };
		setCurrentOrderId(copyAddedOrder._id);
		//# check click identy row in second time (IS IDENTY)
		const candiate = computedOrder.find((position) => position._id === currentOrderId);
		if (copyAddedOrder._id === prevOrderid && candiate) {
			dispatch(addOrder(candiate, +quantity));
		} else {
			// copyAddedOrder.quantity = +quantity;
			dispatch(addOrder(addedOrder, +quantity));
		}
	};

	const action = (key) => (
		<IconButton
			style={{ color: '#fff' }}
			onClick={() => {
				closeSnackbar(key);
			}}
		>
			<CancelIcon />
		</IconButton>
	);

	useEffect(() => {
		const candiate = computedOrder.find((position) => position._id === currentOrderId);
		if (candiate) {
			const message = `Order added x${candiate.quantity}`;
			enqueueSnackbar(message, {
				variant: 'info',
				action,
			});
		}
	}, [computedOrder]);

	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead component="thead">
					<StyledTableRow>
						<TableCell />
						<StyledTableCell>Name</StyledTableCell>
						<StyledTableCell align="right">Cost</StyledTableCell>
						<StyledTableCell align="right">Count</StyledTableCell>
						<StyledTableCell align="right">Action</StyledTableCell>
					</StyledTableRow>
				</TableHead>
				<TableBody>
					{/* {rows.map((row) => ( */}
					{positionData.map((row, index) => (
						<Row addToOrderHandle={addToOrderHandle} key={row._id} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CollapsibleTable;
