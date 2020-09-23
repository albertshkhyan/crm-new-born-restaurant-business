import React from "react";

import { NavLink } from "react-router-dom";

import { MenuItem, Button, makeStyles } from "@material-ui/core";
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
  "navlink": {
    textDecoration: "none",
    "& li": {
        color: "black",
    }
  }
}));

const AppBarCollapse = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
            <NavLink className={classes.navlink} to="/login">
              <MenuItem>Sign In</MenuItem>
            </NavLink>
            <NavLink className={classes.navlink} to="/register">
              <MenuItem>Sign Up</MenuItem>
            </NavLink>
      </ButtonAppBarCollapse>
      <div className={classes.buttonBar} id="appbar-collapse">
        <NavLink to="/login">
          <Button color="inherit">Sign In</Button>
        </NavLink>
        <NavLink to="/register">
          <Button color="inherit">Sign Up</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default AppBarCollapse;
