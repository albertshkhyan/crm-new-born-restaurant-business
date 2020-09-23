import React from "react";


import { AppBar,Toolbar, Typography, makeStyles } from "@material-ui/core";

import AppBarCollapse from './AppBarCollapse';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          New Born
        </Typography>
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
