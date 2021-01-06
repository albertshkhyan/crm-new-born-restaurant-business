import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core';
import { green, blueGrey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

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

const schemaCount = yup.object().shape({
	count: yup
		.number()
		.min(1, 'Min value is 1')
		.max(9999999, 'Max value is 9999999')
		.required('Count is required')
		.typeError('Min value is 1'),
});

function Row({ row, addToOrderHandle }) {
	const {
		watch,
		errors,
		control,
		formState: { isValid },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(schemaCount),
	});

	const [raitingValue, setRaitingValue] = useState(2);

	const [open, setOpen] = useState(false);
	const classes = useRowStyles();

	return (
		<>
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
		</>
	);
}
Row.propTypes = {
	row: PropTypes.shape({
		name: PropTypes.string.isRequired,
		cost: PropTypes.number.isRequired,
	}).isRequired,
};

export default Row;
