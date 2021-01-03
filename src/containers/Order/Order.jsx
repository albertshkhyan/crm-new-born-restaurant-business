import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';
import { isWidthUp } from '@material-ui/core/withWidth';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import cls from 'classnames';

import { useWidth } from 'utils';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryDataSelector } from './../../app/selectors/categorySelectors';
import useOnce from './../../hooks/use-once';
import { getCategoriesAC } from './../../app/actions/categoryActions';
import Preloader from './../../components/Preloader/Preloader';

import imageNotFound from 'assets/images/no-image-found.png';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import { NavLink, useHistory } from 'react-router-dom';
import ListItemLink from './../../components/ListItemLink/ListItemLink';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridView: {
		width: '100%',
		height: 'auto',
	},
	listView: {
		display: 'flex',
		flexDirection: 'column',
		width: '50%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
	image: {
		position: 'absolute',

		'&:hover': {
			opacity: 0.25,
		},
	},
	gridListTitle: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	buttonGroupContainer: {
		padding: '15px 0',
	},
}));

const Order = () => {
	const history = useHistory();

	const classes = useStyles();
	const width = useWidth();
	const dispatch = useDispatch();
	const categoryData = useSelector(getCategoryDataSelector);

	const [inProgress, setInPorgress] = useState(true);

	const [layoutView, setLayoutView] = useState({
		listView: false,
		gridView: true,
	});

	const navigateTo = (to) => {
		history.push(to);
	};

	useOnce(() => {
		// setTimeout(() => {
		dispatch(getCategoriesAC((inProgress) => setInPorgress(inProgress)));
		// }, 3000);
	});

	const handleGird = () => {
		setLayoutView({ listView: false, gridView: true });
	};

	const handleList = () => {
		setLayoutView({ listView: true, gridView: false });
	};

	const getGridStyleCols = () => {
		if (isWidthUp('xl', width)) {
			return 5;
		}

		if (isWidthUp('lg', width)) {
			return 4;
		}

		if (isWidthUp('md', width)) {
			return 3;
		}
		if (isWidthUp('sm', width)) {
			return 2;
		}
		if (isWidthUp('xs', width)) {
			return 1;
		}

		return 1;
	};
	if (inProgress) return <Preloader />;

	return (
		<div className={classes.root}>
			{/* <Grid className={classes.buttonGroupContainer} container justify="space-between">
				<Grid item>
					<Breadcrumbs routeData={[{ url: '/order', title: 'Order' }]} />
				</Grid>
				<Grid item>
					<Button onClick={() => history.push('/order/new')} fullWidth variant="contained" color="primary">
						complete
					</Button>
				</Grid>
			</Grid> */}

			<Grid
				className={classes.buttonGroupContainer}
				container
				direction="row"
				justify="flex-end"
				alignItems="center"
			>
				<Grid item>
					<ButtonGroup aria-label="outlined secondary button group">
						<Button
							onClick={handleGird}
							color="default"
							className={classes.button}
							startIcon={<ViewModuleIcon />}
						>
							grid
						</Button>
						<Button
							onClick={handleList}
							color="default"
							className={classes.button}
							startIcon={<ViewListIcon />}
						>
							list
						</Button>
					</ButtonGroup>
				</Grid>
			</Grid>
			<GridList
				cellHeight={300}
				className={cls({
					[classes.gridView]: layoutView.gridView,
					[classes.listView]: layoutView.listView,
				})}
				cols={layoutView.gridView ? getGridStyleCols() : 1}
			>
				{categoryData.map(({ name, image, _id }) => (
					<GridListTile
						exact
						component={NavLink}
						to={`order/${_id}`}
						className={classes.GridListTile}
						key={_id}
					>
						<img className={classes.image} src={image ? image.imageSrc : imageNotFound} alt={{ name }} />

						<GridListTileBar
							title={name}
							// subtitle={<span>by: {item.author}</span>}
							actionIcon={
								<IconButton className={classes.icon}>
									<InfoIcon />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
};
export default Order;
