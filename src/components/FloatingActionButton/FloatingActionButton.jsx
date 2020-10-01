import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";

import Tooltip from "@material-ui/core/Tooltip";

import blue from "@material-ui/core/colors/blue";

import Icon from "components/Icon/Icon";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
    marginBottom: "2000px",
  },
  container: {
    display: "flex",
    // flexDirection: "column"
  },
  // paper: {
  //   margin: theme.spacing(1)
  // },
  tooltip: {
    backgroundColor: "transparent",
    color: theme.palette.common.black,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function FloatingActionButton() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Box position="fixed" bottom="20px" right="20px">
					<Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
						<Box m={1}>
							<FormControlLabel
								control={
									<Tooltip title="Message" placement="left" arrow>
										<NavLink to="/messenger">
											<Fab aria-label="message">
												<Icon fill="white" name="messenger" />
											</Fab>
										</NavLink>
									</Tooltip>
								}
							/>
						</Box>
					</Grow>

					<Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
						<Box m={1}>
							<FormControlLabel
								control={
									<Tooltip title="Add Order" placement="left" arrow>
										<NavLink to="/order">
											<Fab color="secondary" aria-label="add">
												<Icon fill="white" name="fastIconOrder" />
											</Fab>
										</NavLink>
									</Tooltip>
								}
							/>
						</Box>
					</Grow>

					<Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 500 } : {})}>
						<Box m={1}>
							<FormControlLabel
								control={
									<Tooltip title="Add Assortiment" placement="left" arrow>
										<NavLink to="/category">
											<Fab style={{ background: blue[500] }} aria-label="add">
												<Icon fill="white" name="fastIconCategory" />
											</Fab>
										</NavLink>
									</Tooltip>
								}
							/>
						</Box>
					</Grow>
					<Box m={1}>
						<FormControlLabel
							onClick={handleChange}
							control={
								<Tooltip title="Add" placement="left" arrow>
									<Fab color="primary" aria-label="add">
										<AddIcon />
									</Fab>
								</Tooltip>
							}
						/>
					</Box>
				</Box>
			</div>
		</div>
  );
}
