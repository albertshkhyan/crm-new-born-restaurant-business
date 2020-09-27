import React, { useState } from "react";

import Menu from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    margin: "10px",
    boxShadow: "none",
  },
}));

const ButtonAppBarCollapse = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null); //show dropdown anchors or not

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={handleMenu}>
        <HomeIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {props.children}
      </Menu>
    </div>
  );
};
export default ButtonAppBarCollapse;
