import React from "react";


import { AppBar,Toolbar, Typography, makeStyles } from "@material-ui/core";

import AppBarCollapse from './AppBarCollapse';
import { useSelector } from 'react-redux';

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
  const logger = useSelector(state => state.logger);
  const hanldeLogout = () => {

  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          New Born
        </Typography>
        <AppBarCollapse isAuth={logger.isAuthorized} onLogout={hanldeLogout}/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
