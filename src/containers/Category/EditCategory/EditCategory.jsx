import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useOnce from 'hooks/use-once';
import Preloader from 'components/Preloader/Preloader';
import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { getCategoryItemSG } from 'app/sagasActions/categoryActions';
import AddAndEditCategoryBlock from '../AddAndEditCategoryBlock';
import { setFileState, setOriginalFileData } from 'app/reducers/fileReducer';
import Positions from './Positions/Positions';
import { setCategoryItem } from 'app/reducers/categoryReducers';
import Icon from 'components/Icon/Icon';
import DialogPosition from './Positions/DialogPosition';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

function EditCategory({ categoryData }) {
	const [inProgress, setInPorgress] = useState(true);
	const [open, setOpen] = useState(false);

	// const loaded = useSelector((state) => state.logger.isLoading);
	const dispatch = useDispatch();
	let { id: categoryId } = useParams();

	const classes = useStyles();

	useOnce(() => {
		// setTimeout(() => {
		dispatch(getCategoryItemSG(categoryId, (inProgress) => setInPorgress(inProgress))); //get category by id
		// }, 2000);

		return () => {
			dispatch(setFileState({ preview: '', isDisabled: true }));
			dispatch(setOriginalFileData(null));
			dispatch(setCategoryItem(null));
		};
	});

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	if (inProgress) return <Preloader />;

	return (
		<>
			<Grid container className={classes.root}>
				<AddAndEditCategoryBlock categoryId={categoryId} />
			</Grid>
			<Grid item xs={12}>
				<Box my={3} component="div">
					{/**Position header */}
					<Grid spacing={2} container justify="space-between">
						<Grid item>
							<Typography variant="h4">Positions:</Typography>
						</Grid>
						<Grid item>
							<Button
								onClick={handleClickOpen}
								startIcon={<Icon fill="white" name="fastIconCategory" />}
								fullWidth
								variant="contained"
								color="primary"
							>
								<Typography variant="subtitle2">ADD POSITION</Typography>
							</Button>
							.
						</Grid>
					</Grid>
					<Positions categoryId={categoryId} />
					<DialogPosition
						open={open}
						categoryId={categoryId}
						handleClose={handleClose}
						// setInPorgress={setInPorgress}
					/>
				</Box>
			</Grid>
		</>
	);
}

export default EditCategory;
