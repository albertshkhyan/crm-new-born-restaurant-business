import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
// import FormControlLabel from '@material-ui/core/FormControlLabel';

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from "@material-ui/core/Tooltip";
import { Directions } from "@material-ui/icons";
import FormGroup from "@material-ui/core/FormGroup";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
    marginBottom: "2000px"
  },
  container: {
    display: "flex"
    // flexDirection: "column"
  },
  // paper: {
  //   margin: theme.spacing(1)
  // },
  tooltip: {
    backgroundColor: "transparent",
    color: theme.palette.common.black
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

export default function FloatingActionButton() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    console.log("kokok");

    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      {/* <Switch  checked={checked} onChange={handleChange}/> */}
      <div className={classes.container}>
        {/* <Tooltip
        TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}
          classes={classes}
          // onOpen={handleChange}
          title={
            <Grow in={true} {...(checked ? { timeout: 3000 } : {})}>
              <Box m={1}>
                <FormControlLabel
                  control={
                    <Fab color="secondary" aria-label="add">
                      <AddShoppingCartIcon />
                    </Fab>
                  }
                />
              </Box>
            </Grow>

    
          }
          // enterDelay={3000}
          // leaveDelay={200}
        >
          <Box m={1}>
            <FormControlLabel
              control={
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              }
            />
          </Box>
        </Tooltip> */}

        <Box
          // position="fixed"
          // right="70px"
          position="fixed"
          bottom="20px"
          right="20px"
        >
          <Grow in={checked} {...(checked ? { timeout: 2000 } : {})}>
            <Box m={1}>
              <FormControlLabel
                control={
                  <Fab color="secondary" aria-label="add">
                    <AddShoppingCartIcon />
                  </Fab>
                }
              />
            </Box>
          </Grow>

          <Grow in={checked} {...(checked ? { timeout: 1500 } : {})}>
            <Box m={1}>
              <FormControlLabel
                control={
                  <Fab color="secondary" aria-label="add">
                    <AddShoppingCartIcon />
                  </Fab>
                }
              />
            </Box>
          </Grow>

          <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Box m={1}>
              <FormControlLabel
                control={
                  <Fab color="secondary" aria-label="add">
                    <AddShoppingCartIcon />
                  </Fab>
                }
              />
            </Box>
          </Grow>

          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 500 } : {})}
          >
            <Box m={1}>
              <FormControlLabel
                control={
                  <Fab color="secondary" aria-label="add">
                    <AddShoppingCartIcon />
                  </Fab>
                }
              />
            </Box>
          </Grow>

          <Box m={1}>
            <FormControlLabel
              onClick={handleChange}
              control={
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              }
            />
          </Box>
        </Box>
      </div>
    </div>
  );
}
