import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { useDispatch, useSelector } from 'react-redux';

import useOnce from 'hooks/use-once';
import { getAllPositionsSG, deletePositionsSG } from 'app/sagasActions/positionActions';
import Preloader from 'components/Preloader/Preloader';
import { getAllPositionsDataSelector } from 'app/selectors/positionSelector';
import ConfirmDialog from 'components/ConfirmDialog';
import DialogPosition from './DialogPosition';
import { setPositionItem } from 'app/reducers/positionReducer';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
	positionsListItems: {
		border: '1px solid',
		padding: '0',
		'& li': {
			cursor: 'pointer',
			borderBottom: '1px solid',
			'&:hover': {
				background: 'rgba(0, 0, 0, 0.04)',
			},
			'&:last-child': {
				border: 'none',
			},
		},
	},
}));

const Positions = ({ categoryId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const positionData = useSelector(getAllPositionsDataSelector);
	const positionItem = useSelector((state) => state.positions.positionItem);

	const [confirmDialog, setConfirmDialog] = useState({
		positionId: '',
		isOpen: false,
		title: '',
		subTitle: '',
	});

	const [open, setOpen] = useState(false); //update position window
	const [inProgress, setInPorgress] = useState(true);

	const openDialogHandler = (positionId) => {
		setOpen(true);
		setConfirmDialog({ ...confirmDialog, positionId });
		const selectedForUpdatePosition = positionData.find((position) => position._id === positionId);
		if (selectedForUpdatePosition) {
			dispatch(setPositionItem(selectedForUpdatePosition));
		}
	};
	const closeDialogHandler = () => {
		dispatch(setPositionItem(null));
		setOpen(false);
	};

	// const positionBydId = useSelector(() => getPositionByidSelector(confirmDialog.positionId));

	const handleAgree = () => {
		if (confirmDialog.positionId && categoryId) {
			dispatch(deletePositionsSG(confirmDialog.positionId, categoryId));
		}
		setConfirmDialog({ ...confirmDialog, isOpen: false });
	};

	useOnce(() => {
		dispatch(getAllPositionsSG(categoryId, (inProgress) => setInPorgress(inProgress)));
	});

	// const computedDialogPosition = useCallback(() => {
	// 	return (
	// 		<>
	// 			<ConfirmDialog
	// 				handleAgree={handleAgree}
	// 				confirmDialog={confirmDialog}
	// 				setConfirmDialog={setConfirmDialog}
	// 			/>
	// 			;
	// 		</>
	// 	);
	// }, [handleAgree, confirmDialog]);

	if (inProgress) return <Preloader />;
	return (
		<div>
			<Grid>
				{positionData.length > 0 ? (
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<div className={classes.demo}>
								<List className={classes.positionsListItems}>
									{/**dense={dense} */}
									{positionData.map((item) => (
										<ListItem
											onClick={() => {
												// positionUpdateHandler(item._id);
												openDialogHandler(item._id);
											}}
											key={item._id}
										>
											<ListItemText
												primary={item.name}
												// secondary={secondary ? 'Secondary text' : null}
											/>
											<ListItemSecondaryAction>
												<IconButton
													onClick={() =>
														setConfirmDialog({
															isOpen: true,
															positionId: item._id,
															title: 'Are you sure to delete this position ?',
															subTitle: "You can't undo this operation.",
														})
													}
													edge="end"
													color="secondary"
													aria-label="delete"
												>
													<DeleteIcon />
												</IconButton>
											</ListItemSecondaryAction>
										</ListItem>
									))}
								</List>
							</div>
							{/* {positionItem} */}
							{/* {useMemo(() => {
								// return computedDialogPosition();
								return ( */}
							<DialogPosition
								positionItem={positionItem}
								open={open}
								positionId={confirmDialog.positionId}
								handleClose={closeDialogHandler}
								// setInPorgress={setInPorgress}
							/>
						</Grid>
					</Grid>
				) : (
					<Typography>Still you not have positions, please add new position</Typography>
				)}
				<ConfirmDialog
					handleAgree={handleAgree}
					confirmDialog={confirmDialog}
					setConfirmDialog={setConfirmDialog}
				/>
			</Grid>
		</div>
	);
};

export default Positions;
