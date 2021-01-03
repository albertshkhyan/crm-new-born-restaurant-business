import React from 'react';

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { Overview } from 'containers';

import Icon from 'components/Icon/Icon';

import ListItemLink from './../ListItemLink/ListItemLink';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},

	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar, //for space in dashboard
	drawerPaper: {
		width: drawerWidth,
		// background: "red"
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		paddingBottom: '85px',
	},
	selected: {
		background: theme.palette.primary.dark,
		color: 'white',
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
		},
		'& > div:first-child > svg': {
			fill: 'white',
		},
	},
}));

const sideBarList = [
	{
		id: 1,
		component: Overview,
		path: '/overview',
		title: 'Overview',
		icon: 'overview',
	},
	{
		id: 2,
		// component: <h2>Analytics</h2>,
		path: '/analytics',
		title: 'Analytics',
		icon: 'analytics',
	},
	{
		id: 3,
		// component: <h2>History</h2>,
		path: '/history',
		title: 'History',
		icon: 'history',
	},
	{
		id: 4,
		// component: <h2>Add Order</h2>,
		path: '/order',
		title: 'Add Order',
		icon: 'addOrder',
	},
	{
		id: 5,
		path: '/category',
		title: 'Category',
		icon: 'category',
	},
];

const Dashboard = ({ mobileOpen, handleDrawerToggle, children }) => {
	const classes = useStyles();

	const drawerContent = (
		<>
			<div className={classes.toolbar} />
			<Grid className={classes.toolbar} container spacing={0} align="center" justify="center" direction="column">
				<Typography variant="h4" noWrap>
					New Born
				</Typography>
			</Grid>
			<Divider />

			<List>
				{sideBarList.map(({ id, title, component, icon, path }) => {
					return (
						<ListItemLink
							activeClassName={classes.selected}
							key={id}
							to={path}
							primary={title}
							OrderTableDialog
							icon={<Icon width={20} height={20} name={icon} />}
						></ListItemLink>
					);
				})}
			</List>
		</>
	);

	return (
		<div className={classes.root}>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={document.body}
						variant="temporary"
						// anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawerContent}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawerContent}
					</Drawer>
				</Hidden>
			</nav>

			<main className={classes.content}>{children}</main>
		</div>
	);
};

export default Dashboard;
