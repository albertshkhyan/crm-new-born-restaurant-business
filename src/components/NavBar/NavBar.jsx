import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AppBarCollapse from './AppBarCollapse';
import { useSelector } from "react-redux";


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
  const logger = useSelector((state) => state.logger);
  const classes = useStyles();

  const hanldeLogout = () => {
      
  }
  return (
    <AppBar position="static">
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
