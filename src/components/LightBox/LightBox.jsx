import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
	LightBox: {
		position: 'relative',
	},
	LightBoxOverlay: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	LightBoxCard: {
		padding: '5px',
	},
	closeLightBoxIconBlock: {
		position: 'absolute',
		top: '-14px',
		right: '-14px',
	},
}));

const StyledIcon = styled(({ color, children, activateZoomIn, bgColor, ...otherProps }) => {
	return (
		<IconButton aria-label="visible" {...otherProps}>
			{children}
		</IconButton>
	);
})`
	cursor: pointer;
	height: 30px;
	width: 30px;

	color: ${({ color }) => color && color};
	background: ${({ theme, bgColor }) => bgColor && theme.palette.orange.main};
	&:hover {
		background: ${({ theme, bgColor }) => bgColor && theme.palette.orange.dark};
	}
`;

const LightBox = ({ open, previewImageUrl = '', closePortal, categroyItemImageSrc }) => {
	const classes = useStyles();

	const body = (
		<Grid item md={6} lg={6} xl={6} className={classes.LightBox}>
			<Card className={classes.LightBoxCard}>
				{/* <Typography variant="h6">{previewImageTitle}</Typography> */}
				<CardMedia
					title="Paella dish"
					component="img"
					alt="Contemplative Reptile"
					height="440"
					image={previewImageUrl ? previewImageUrl : categroyItemImageSrc}
				/>
				<Box position="absolute" className={classes.closeLightBoxIconBlock}>
					<StyledIcon onClick={closePortal} aria-label="visible" bgColor="orange" color="white">
						<ClearIcon />
					</StyledIcon>
				</Box>
			</Card>
		</Grid>
	);
	return (
		<Modal
			open={open}
			onClose={closePortal}
			className={classes.LightBoxOverlay}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<Zoom in={open}>{body}</Zoom>
		</Modal>
	);
};

export default LightBox;
