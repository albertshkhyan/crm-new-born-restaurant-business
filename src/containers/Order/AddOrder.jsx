import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Rating from '@material-ui/lab/Rating';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { withStyles } from '@material-ui/core/styles';
import { green, blueGrey } from '@material-ui/core/colors';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

import useOnce from 'hooks/use-once';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPositionsAC } from './../../app/actions/positionActions';
import { useParams } from 'react-router';
import { getAllPositionsDataSelector } from './../../app/selectors/positionSelector';
import Preloader from './../../components/Preloader/Preloader';
import { getCategoryDataSelector } from './../../app/selectors/categorySelectors';
import { getCategoriesAC } from './../../app/actions/categoryActions';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { addOrder } from './../../app/reducers/orderReducer';

const schemaCount = yup.object().shape({
	count: yup
		.number()
		.min(1, 'Min value is 1')
		.max(9999999, 'Max value is 9999999')
		.required('Count is required')
		.typeError('Min value is 1'),
});

const ColorButton = withStyles((theme) => ({
	root: (props) =>
		props.disabled
			? {
					maxWidth: '120px',
					color: '#fff',
					backgroundColor: blueGrey[50],
			  }
			: {
					maxWidth: '120px',
					color: '#fff',
					backgroundColor: green[500],
					'&:hover': {
						backgroundColor: green[700],
					},
			  },
}))(Button);

const useRowStyles = makeStyles({
	root: {
		'& > *': {
			borderBottom: 'unset',
		},
	},
	//#CARD style - start
	rootCard: {
		display: 'flex',
	},
	details: {
		width: '70%',
		display: 'flex',
		flexDirection: 'column',
	},
	cover: {
		width: '100%',
	},
	//#CARD style - end
	notAllowedCursor: {
		'&:hover': {
			cursor: 'not-allowed',
		},
	},
});

// /**
//  * name, cost, count, action
//  *
//  * @param {*} name
//  * @param {*} calories
//  * @param {*} fat
//  * @param {*} carbs
//  * @param {*} protein
//  * @param {*} cost
//  */
// function createData(name, cost, count) {
// 	return {
// 		name,
// 		cost,
// 	};
// }

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

function Row({ row, categoryData, addToOrderHandle, data }) {
	const {
		watch,
		errors,
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(schemaCount),
	});

	const [values, setValues] = React.useState({
		count: '1',
		helperText: '',
		error: false,
	});
	const [raitingValue, setRaitingValue] = React.useState(2);

	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();

	const onSubmit = (data) => console.log('on submit data', data);

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="right">{row.cost}</TableCell>
				<TableCell align="right">
					<Controller
						name="count"
						defaultValue="1"
						control={control}
						render={({ onChange, value }) => (
							<TextField
								id="standard-number"
								type="number"
								helperText={errors.count ? errors.count.message : ''}
								error={!isValid}
								InputLabelProps={{
									shrink: true,
								}}
								onChange={(e) => onChange(e.target.value)}
								value={value}
							/>
						)}
					/>
					{/* </form> */}
				</TableCell>
				<TableCell align="right">
					<div className={!isValid ? classes.notAllowedCursor : ''}>
						<ColorButton
							disabled={!isValid}
							onClick={(event) => addToOrderHandle(event, watch('count'), row)}
						>
							Add
						</ColorButton>
					</div>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={1}>
							<Typography variant="h6" gutterBottom component="div">
								About
							</Typography>
							<Grid container direction="row" justify="center" alignItems="center">
								<Grid item xs={12} sm={9} md={8} lg={7} xl={4}>
									<Card className={classes.rootCard}>
										<div className={classes.details}>
											<CardContent>
												<Typography variant="body2" color="textSecondary" component="p">
													This impressive paella is a perfect party dish and a fun meal to
													cook together with your guests. Add 1 cup of frozen peas along with
													the mussels, if you like.
												</Typography>
											</CardContent>
										</div>
										<CardMedia
											className={classes.cover}
											image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Carnegie_Deli_Strawberry_Cheesecake.jpg/1200px-Carnegie_Deli_Strawberry_Cheesecake.jpg"
											title="Live from space album cover"
										/>
									</Card>
									<Rating
										name="simple-controlled"
										value={raitingValue}
										onChange={(event, newValue) => {
											setRaitingValue(newValue);
										}}
									/>
								</Grid>
							</Grid>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}
Row.propTypes = {
	row: PropTypes.shape({
		name: PropTypes.string.isRequired,
		cost: PropTypes.number.isRequired,
	}).isRequired,
};

/******************************************************************* */

function CollapsibleTable({ positionData, categoryData }) {
	const dispatch = useDispatch();
	/**
	 *
	 * @param {quantity: number} - qount of order, minium must be 1
	 * @param {addedOrder: object} - it's object (collection of row values, on which has been clicked)
	 */
	const addToOrderHandle = (_, quantity, addedOrder) => {
		// console.log('event', event);
		if (quantity) {
			const copyAddedOrder = { ...addedOrder };
			// console.log('copyAddedOrder', copyAddedOrder);
			dispatch(addOrder(copyAddedOrder));
			copyAddedOrder.quantity = +quantity;
			// console.log('submit order!!!!!!');
		}
		// console.log('collect value of row ->', addedOrder);
	};

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
						<Row addToOrderHandle={addToOrderHandle} key={row.name} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

const AddOrder = () => {
	// console.log('-----------------------ADD_ORDER RENDER-----------------------');
	const dispatch = useDispatch();
	const positionData = useSelector(getAllPositionsDataSelector);
	const categoryData = useSelector(getCategoryDataSelector);

	const [inProgress, setInPorgress] = useState(true);

	let { id: categoryId } = useParams();

	useOnce(() => {
		dispatch(getAllPositionsAC(categoryId, (inProgress) => setInPorgress(inProgress)));
		dispatch(getCategoriesAC((inProgress) => setInPorgress(inProgress)));
	});

	if (inProgress) return <Preloader />;
	return (
		<div>
			{positionData.length > 0 && categoryData.length > 0 ? (
				<CollapsibleTable categoryData={categoryData} positionData={positionData} />
			) : (
				<Typography>Still you not have order, please add new order</Typography>
			)}
		</div>
	);
};

export default AddOrder;
