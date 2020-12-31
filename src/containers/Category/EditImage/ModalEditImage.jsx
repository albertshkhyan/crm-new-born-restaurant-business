import React from 'react';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import EditImage from './EditImage';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	LightBoxCard: {
		position: 'relative',
		width: '100%',
		padding: '5px',
		'& > div': {
			// borderBottom: '1px solid gray',
			margin: '5px 0',
		},
	},
	LightBox: {
		width: '70%',
		height: 'max-content',
	},
	closeLightBoxIconBlock: {
		position: 'absolute',
		top: '-14px',
		right: '-14px',
	},
}));

const ModalEditImage = ({ open, closePortal }) => {
	const classes = useStyles();

	return (
		<Modal
			open={open}
			onClose={closePortal}
			className={classes.modal}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<Grid container alignItems="center" justify="center" className={classes.LightBox}>
				<Card className={classes.LightBoxCard}>
					<Grid container direction="row" justify="space-between" alignItems="center">
						<Typography variant="h6">
							<Box fontWeight="fontWeightBold">Edit image</Box>
						</Typography>
						<IconButton
							onClick={closePortal}
							edge="end"
							color="primary"
							aria-label="visible"
							component="span"
						>
							<ClearIcon />
						</IconButton>
						{/* <Grid item> */}
					</Grid>
					<Box component="span">
						<Divider light />
					</Box>
					{/* </Grid> */}
					{/* <Box component="span" m={1}>
						<Divider light />
					</Box> */}

					<EditImage />
				</Card>
			</Grid>
		</Modal>
	);
};

export default ModalEditImage;
