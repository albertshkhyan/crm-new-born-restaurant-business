import React from "react";

import { NavLink } from "react-router-dom";

import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from "@material-ui/icons/Notifications";

import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    // width: "100%",
    background: "transparent",
    "& a": {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
    },
  },
  navlink: {
    textDecoration: "none",
    "& li": {
      color: "black",
    },
  },
}));

//create component with some sttyles - witStyles
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const AppBarCollapse = ({ isAuth, onLogout }) => {
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
            <Button component={NavLink} to="/register" color="inherit">
              Sign Up
            </Button>
          </div>
        </>
      ) : (
        <>
          <ButtonAppBarCollapse>
            <MenuItem component={NavLink} to="/login">
              Sign Out
            </MenuItem>
          </ButtonAppBarCollapse>
          <div className={classes.buttonBar} id="appbar-collapse">
            <Button
              component={NavLink}
              to="/login"
              onClick={onLogout}
              color="inherit"
            >
              Sign Out
            </Button>

            <StyledBadge
              overlap="circle"
              clone
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Box width={50} height={50} clone>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Box>
            </StyledBadge>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
        </>
      )}
    </div>
  );
};

export default AppBarCollapse;
