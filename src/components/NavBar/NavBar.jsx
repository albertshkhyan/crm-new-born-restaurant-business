import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import AppBarCollapse from './AppBarCollapse';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import cl from 'classnames';

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
}));

const NavBar = ({ isAuth, hanldeLogout, handleDrawerToggle }) => {
	const classes = useStyles();
	return (
		<AppBar position="sticky" className={cl({ [classes.appBar]: isAuth })}>
			<Toolbar>
				{/**burger menu */}
				{isAuth && (
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
				)}
				<AppBarCollapse isAuth={isAuth} onLogout={hanldeLogout} />
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
