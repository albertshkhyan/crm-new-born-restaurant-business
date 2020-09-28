import React from "react";

import { NavLink } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from '@material-ui/icons/AccountCircle';

import ButtonAppBarCollapse from "./ButtonAppBarCollapse";

import Icon from "components/Icon/Icon";

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
            <MenuItem component={NavLink} to="/logout">
              <Icon width={20} height={20} name="logout" />
              <Box width={1} align="right">
                <Typography variant="body1">Sign Out</Typography>
              </Box>
            </MenuItem>

            <MenuItem>
              {/* <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
              > */}
              <Box>
                <Badge
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  badgeContent={11}
                  color="secondary"
                >
                  <NotificationsIcon />
                </Badge>
              </Box>
              {/* </IconButton> */}
              <Box width={1} align="right">
                <Typography variant="body1">Notifications</Typography>
              </Box>
            </MenuItem>

            <MenuItem>
              {/* <Box> */}
                  <AccountCircle />
              {/* </Box> */}
              <Box width={1} align="right">
                <Typography variant="body1">Profile</Typography>
              </Box>
            </MenuItem>
          </ButtonAppBarCollapse>
          <div className={classes.buttonBar} id="appbar-collapse">
            {/* <Button
              component={NavLink}
              to="/login"
              onClick={onLogout}
              color="inherit"
            >
              Sign Out
            </Button> */}

            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Box mr="1rem" className="avatar">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Box>
              <div>
                <Box mr="1rem" className="avatar">
                  <Typography variant="caption">Alik Shkhyan</Typography>
                </Box>
                <Box mr="1rem" className="avatar">
                  <Typography variant="caption">
                    alikshkhyan@gmail.com
                  </Typography>
                </Box>
              </div>
            </Badge>

            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Button
              component={NavLink}
              to="/logout"
              onClick={onLogout}
              color="inherit"
            >
              <Icon width={20} height={20} name="logout" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AppBarCollapse;
