import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderListSelector } from './../../app/selectors/orderSelectors';
import { removeOrder, setOrderTotalPrice } from 'app/reducers/orderReducer';
import { useSnackbar } from 'notistack';

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',

	// These options are needed to round to whole numbers if that's what you want.
	//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
	//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// formatter.format(2500); /* $2,500.00 */

const columns = [
	{ id: 'name', label: 'Name', minWidth: 120 },
	{
		id: 'count',
		label: 'Count',
		minWidth: 170,
		format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'cost',
		label: 'Cost',
		minWidth: 150,
		format: (value) => value.toLocaleString('en-US'), //(123322212132).toLocaleString() - "123,322,212,132"
	},
];

function createData(name, count, cost) {
	return { name, count, cost };
}

const rows = [
	createData('beer', 1324171354, 3287263),
	createData('sprite', 1403500365, 9596961),
	createData('Koko', 60483973, 301340),
];

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: 440,
	},
});

export default function OrderTableDialog() {
	const classes = useStyles();
	const listOfOrders = useSelector(getOrderListSelector);
	const dispatch = useDispatch();
	const { closeSnackbar } = useSnackbar();

	const handleDeleteOrder = (orderPosition) => {
		// closeSnackbar();
		console.log('orderPosition', orderPosition);
		dispatch(removeOrder(orderPosition));
		dispatch(setOrderTotalPrice());

		//#if count is 1, in this case we must remove item (state.order.list (temparary postions))
		//## else if count greater then 1 we must just do decrement
	};

	return (
		<>
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth }}
									>
										{column.label}
									</TableCell>
								))}
								<TableCell align="right"></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{listOfOrders &&
								listOfOrders.map((row) => {
									return (
										<TableRow key={row._id} hover role="checkbox" tabIndex={-1}>
											{columns.map((column, index) => {
												const value = row[column.id];
												const quantity = row.quantity;
												return (
													<TableCell key={index} align={column.align}>
														{column.format && typeof value === 'number'
															? column.format(value)
															: column.id === 'count'
															? quantity
															: value}
													</TableCell>
												);
											})}
											<TableCell align="right">
												{/* <IconButton onClick={handleDeleteOrder} aria-label="delete"> */}
												<IconButton onClick={() => handleDeleteOrder(row)} aria-label="delete">
													<DeleteIcon />
												</IconButton>
											</TableCell>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</>
	);
}
