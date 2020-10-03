import React from 'react';

import { NavLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

import ButtonAppBarCollapse from './ButtonAppBarCollapse';
import Icon from 'components/Icon/Icon';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		right: 0,
	},
	buttonBar: {
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		margin: '10px',
		paddingLeft: '16px',
		right: 0,
		position: 'relative',
		// width: "100%",
		background: 'transparent',
		'& a': {
			color: 'white',
			textDecoration: 'none',
			fontWeight: 'bold',
		},
	},
	navlink: {
		textDecoration: 'none',
		'& li': {
			color: 'black',
		},
	},
}));

const AppBarCollapse = ({ isAuth, onLogout, hanldeLogout }) => {
	// debugger;
	const { data: user } = useSelector((state) => state.users);

	const classes = useStyles();
	return (
		<div className={classes.root}>
			{!isAuth ? (
				<>
					<ButtonAppBarCollapse>
						<MenuItem component={NavLink} to="/login">
							Sign In
						</MenuItem>
						<MenuItem component={NavLink} to="/register">
							Sign Up
						</MenuItem>
					</ButtonAppBarCollapse>
					<div className={classes.buttonBar} id="appbar-collapse">
						<Button component={NavLink} to="/login" color="inherit">
							Sign In
						</Button>
						<Button onClick={hanldeLogout} component={NavLink} to="/register" color="inherit">
							Sign Up
						</Button>
					</div>
				</>
			) : (
				<>
					<ButtonAppBarCollapse>
						<MenuItem component={NavLink} to="/logout" onClick={onLogout}>
							<Icon width={20} height={20} name="logout" />
							<Box width={1} align="right">
								<Typography variant="body1">Sign Out</Typography>
							</Box>
						</MenuItem>

						<MenuItem>
							<Box>
								<Badge
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
									badgeContent={11}
									color="secondary"
								>
									<NotificationsIcon />
								</Badge>
							</Box>
							<Box width={1} align="right">
								<Typography variant="body1">Notifications</Typography>
							</Box>
						</MenuItem>

						<MenuItem>
							<AccountCircle />
							<Box width={1} align="right">
								<Typography variant="body1">Profile</Typography>
							</Box>
						</MenuItem>
					</ButtonAppBarCollapse>

					<div className={classes.buttonBar} id="appbar-collapse">
						{/**Avatar - start */}
						<Badge
							overlap="circle"
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
						>
							<Box mr="1rem" className="avatar">
								<Avatar alt="Remy Sharp" src="" />
							</Box>
							<div>
								<Box mr="1rem" className="avatar">
									<Typography variant="caption">{`${user.name} ${user.last_name}`}</Typography>
								</Box>
								<Box mr="1rem" className="avatar">
									<Typography variant="caption">{user.email}</Typography>
								</Box>
							</div>
						</Badge>
						{/**Avatar - end */}
						<IconButton aria-label="show 17 new notifications" color="inherit">
							<Badge badgeContent={2} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>

						<Button component={NavLink} to="/logout" onClick={onLogout} color="inherit">
							<Icon width={20} height={20} name="logout" />
						</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default AppBarCollapse;
