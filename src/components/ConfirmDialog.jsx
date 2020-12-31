import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles({
	dialog: {
		position: 'absolute',
		left: '50%',
		top: '15%',
		transform: 'translate(-50%, -50%)',
	},

	MuiDialogTitle: {
		fontSize: '1rem',
		background: 'rgb(228,235,241)',
	},
	DialogContent: {
		padding: '20px',
		minHeight: '121px',
	},
	DialogActions: {
		display: 'flex',
		justifyContent: 'space-between',
	},
});

export default function ConfirmDialog({ confirmDialog, setConfirmDialog, handleAgree }) {
	const classes = useStyles();

	const handleClose = () => {
		setConfirmDialog({
			...confirmDialog,
			isOpen: false,
		});
	};
	return (
		<div>
			<Dialog
				classes={{
					paper: classes.dialog,
				}}
				open={confirmDialog.isOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle className={classes.MuiDialogTitle} id="alert-dialog-slide-title">
					{confirmDialog.title}
				</DialogTitle>
				<DialogContent className={classes.DialogContent}>
					<DialogContentText id="alert-dialog-slide-description">{confirmDialog.subTitle}</DialogContentText>
				</DialogContent>
				<DialogActions className={classes.DialogActions}>
					<Button variant="contained" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="contained" color="secondary" onClick={handleAgree}>
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
