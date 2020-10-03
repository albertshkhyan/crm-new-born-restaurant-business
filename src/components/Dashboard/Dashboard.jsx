import React from "react";

import Hidden from "@material-ui/core/Hidden";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Icon from "components/Icon/Icon";
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';
import { Overview } from "containers";

import { NavLink } from "react-router-dom";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    // background: "red"
  },
  content: {
      flexGrow: 1,
      padding: theme.spacing(3),
  }
}));

const sideBarList = [
  {
    id: 1,
    component: Overview,
    path: "/overview",
    title: "Overview",
    icon: "overview",
  },
  {
    id: 2,
    // component: <h2>Analytics</h2>,
    path: "/analytics",
    title: "Analytics",
    icon: "analytics",
  },
  {
    id: 3,
    // component: <h2>History</h2>,
    path: "/history",
    title: "History",
    icon: "history",
  },
  {
    id: 4,
    // component: <h2>Add Order</h2>,
    path: "/order",
    title: "Add Order",
    icon: "addOrder",
  },
  {
    id: 5,
    // component: <h2>Assortment</h2>,
    path: "/category",
    title: "Assortment",
    icon: "assortiment",
  },
];

function ListItemLink({ to, icon, primary }) {
  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <NavLink ref={ref} to={to} {...linkProps} />
      )),
    [to]
  );

  return (
    <ListItem button component={CustomLink}>
      <ListItemIcon>
        <Icon width={20} height={20} name={icon} />
      </ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
}


const Dashboard = ({ mobileOpen, handleDrawerToggle, children }) => {
  const classes = useStyles();

  const drawerContent = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {sideBarList.map(({ id, title, component, icon, path }) => {
          return (
            <ListItemLink key={id} to={path} primary={title} icon={icon} />
          );
        })}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={document.body}
            variant="temporary"
            // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerContent}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawerContent}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <FloatingActionButton />
      </main>
    </div>
  );
};

export default Dashboard;
