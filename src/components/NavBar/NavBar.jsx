import React from "react";

import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

import AppBarCollapse from "./AppBarCollapse";
import { useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Dashboard from "components/Dashboard/Dashboard";
import cl from "classnames";


const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  ///////////
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

const NavBar = (props) => {
  const classes = useStyles();
  const logger = useSelector((state) => state.logger);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const hanldeLogout = () => {};


  return (
    <>
    <AppBar position="fixed" className={cl({ [classes.appBar]: logger.isAuthorized  })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            New Born
          </Typography>
          <AppBarCollapse
            isAuth={logger.isAuthorized}
            onLogout={hanldeLogout}
          />
        </Toolbar>
      </AppBar>
      {logger.isAuthorized && <Dashboard mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/> }
    </>
  );
};

export default NavBar;
