import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch, useSelector } from 'react-redux';
import { matchPath, useHistory, useLocation } from 'react-router-dom';

import { deleteCategorySG } from 'app/sagasActions/categoryActions';
import { getCategoryIdSelector } from 'app/selectors/categorySelectors';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import ConfirmDialog from 'components/ConfirmDialog';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2, 0),
	},
	button: {
		margin: theme.spacing(1),
	},
}));

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function CategoryHeader() {
	const classes = useStyles();

	let query = useQuery();

	const history = useHistory();
	const { pathname } = useLocation();

	const dispatch = useDispatch();

	const [inProgress, setInProgress] = useState(false);
	const [confirmDialog, setConfirmDialog] = useState({
		isOpen: false,
		title: '',
		subTitle: '',
	});

	const match = matchPath(pathname, {
		path: '/category/:id', //category/:id <- incorrect like thid, must specify first slash
		exact: true,
		strict: false,
	});

	const isCategoryEditRoute = () => {
		if (match && match.params.id) {
			if (match.params.id !== 'new') {
				return true;
			}
		}
		return false;
	};
	const getCategoryId = () => {
		if (match && match.params.id && !query.has('isNew')) {
			return match.params.id;
		}
		return null;
	};

	const categoryId = useSelector(getCategoryIdSelector);

	const navigateTo = (to) => {
		history.push(to);
	};

	const handleAgree = () => {
		dispatch(deleteCategorySG(categoryId, (inProgress) => setInProgress(inProgress), navigateTo));

		setConfirmDialog({
			...confirmDialog,
			isOpen: false,
		});
	};

	return (
		<>
			<Grid className={classes.root} container justify="space-between">
				<Breadcrumbs
					routeData={[
						{ url: '/category', title: 'Category' },
						{ url: '/category/new', title: 'Create Category' },
						{ url: `/category/${getCategoryId()}`, title: 'Edit category' },
					]}
					pathname={pathname}
					// defaultTitle="Edit category"
				/>

				{pathname === '/category' && (
					<Grid>
						{/** ?isNew for CategoryUploader component understand how do upload (create or upadate) */}

						<Button
							onClick={() => history.push('/category/new?isNew')}
							fullWidth
							variant="contained"
							color="primary"
						>
							<Typography variant="subtitle2">ADD CATEGORY</Typography>
						</Button>
					</Grid>
				)}
				{/**delete button must show on category/new and category/:id routes  */}
				{/* {!_.isEmpty(categoryItem) && checkIsNew() && ( */}
				{isCategoryEditRoute() && (
					//show only in edit page
					<Grid>
						<Button
							disabled={inProgress}
							// onClick={onDeleteCategory}
							onClick={() =>
								setConfirmDialog({
									isOpen: true,
									title: 'Are you sure to delete this record ?',
									subTitle: "You can't undo this operation.",
								})
							}
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							<DeleteIcon />
						</Button>
						<ConfirmDialog
							handleAgree={handleAgree}
							confirmDialog={confirmDialog}
							setConfirmDialog={setConfirmDialog}
						/>
					</Grid>
				)}
			</Grid>
		</>
	);
}
export default CategoryHeader;
