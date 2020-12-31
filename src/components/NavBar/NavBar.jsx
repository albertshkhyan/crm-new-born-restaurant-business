import React from 'react';

import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

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
		<AppBar position="fixed" className={cl({ [classes.appBar]: isAuth })}>
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

				<Typography variant="h6" noWrap>
					New Born
				</Typography>
				<AppBarCollapse isAuth={isAuth} onLogout={hanldeLogout} />
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
