import React, { useState, useCallback } from 'react';

import Cropper from 'react-easy-crop';

import getCroppedImg from './cropImage';
import { styles } from './styles';

import { default as MuiSlider } from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { setFileState, setShowEditModal, setOriginalFileData } from 'app/reducers/fileReducer';

const dogImg = 'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000';

const Slider = React.forwardRef(function (props, ref) {
	return <MuiSlider ref={ref} {...props} />;
});

const BootstrapButton = withStyles({
	root: {
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '5px 12px',
		border: '1px solid',
		lineHeight: 1.5,
		backgroundColor: '#0063cc',
		borderColor: '#0063cc',
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:hover': {
			backgroundColor: '#0069d9',
			borderColor: '#0062cc',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#0062cc',
			borderColor: '#005cbf',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
	},
})(Button);

const EditImage = ({ classes }) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(1);
	const originalFile = useSelector((state) => state.file.originalFile);
	const fileState = useSelector((state) => state.file.fileState);
	const dispatch = useDispatch();

	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	// const [croppedImage, setCroppedImage] = useState(null);

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const showCroppedImage = useCallback(async () => {
		try {
			const image = originalFile && fileState.preview ? fileState.preview : dogImg;
			const { blob, croppedImage } = await getCroppedImg(image, croppedAreaPixels, rotation);
			const file = new File([blob], originalFile.name, {
				type: 'image/jpeg',
			});
			if (croppedImage) {
				dispatch(setFileState({ preview: croppedImage }));
				dispatch(setShowEditModal(false));
				// dispatch(setSizeOfOriginalFile(size));
				dispatch(setOriginalFileData(file));
			}
			// if (croppedImage) {
			// 	dispatch(setShowEditModal({ showEditModal: false }));
			// }
		} catch (e) {
			console.error(e);
		}
	}, [croppedAreaPixels, rotation, dispatch, fileState.preview, originalFile]);

	const onClose = useCallback(() => {
		dispatch(setShowEditModal(false));
		dispatch(setFileState({ preview: '' }));
		dispatch(setOriginalFileData(null));
	}, [dispatch]);

	return (
		<>
			<div className={classes.cropContainer}>
				<Cropper
					image={originalFile && fileState.preview ? fileState.preview : dogImg}
					// image={dogImg}
					crop={crop}
					rotation={rotation}
					zoom={zoom}
					aspect={4 / 3}
					onCropChange={setCrop}
					onRotationChange={setRotation}
					onCropComplete={onCropComplete}
					onZoomChange={setZoom}
				/>
			</div>
			<Grid container direction="column" justify="center" alignItems="center" className={classes.controls}>
				<Grid
					// xs={12}
					// sm={12}
					// md={12}
					lg={6}
					item
					className={classes.sliderContainer}
				>
					<IconButton
						onClick={() => setZoom(+(zoom - 0.1).toFixed(1))}
						color="primary"
						aria-label="upload picture"
						component="span"
					>
						<ZoomOutIcon />
					</IconButton>
					<Slider
						marks
						valueLabelDisplay="auto"
						value={zoom}
						min={1}
						max={3}
						step={0.1}
						aria-labelledby="Zoom"
						classes={{ root: classes.slider }} //{ container: classes.slider } with container give warning
						onChange={(e, zoom) => setZoom(zoom)}
					/>
					<IconButton
						onClick={() => setZoom(+(zoom + 0.1).toFixed(1))}
						color="primary"
						aria-label="upload picture"
						component="span"
					>
						<ZoomInIcon />
					</IconButton>
				</Grid>

				<Grid
					// xs={12}
					// sm={12}
					// md={12}
					lg={6}
					item
					className={classes.sliderContainer}
				>
					<IconButton
						color="primary"
						aria-label="upload picture"
						component="span"
						onClick={() => setRotation(rotation - 1)}
					>
						<RotateLeftIcon />
					</IconButton>
					<Slider
						valueLabelDisplay="auto"
						value={rotation}
						min={0}
						max={360}
						step={1}
						aria-labelledby="Rotation"
						classes={{ root: classes.slider }}
						onChange={(e, rotation) => setRotation(rotation)}
					/>
					<IconButton
						onClick={() => setRotation(rotation + 1)}
						color="primary"
						aria-label="upload picture"
						component="span"
					>
						<RotateRightIcon />
					</IconButton>
				</Grid>
				<Box component="span">
					<Divider light />
				</Box>
			</Grid>
			<Grid container direction="row" justify="flex-end" alignItems="center">
				<Grid item>
					<Button onClick={() => onClose()} className={classes.margin} variant="outlined" color="secondary">
						Cancel
					</Button>
					<BootstrapButton
						onClick={() => showCroppedImage()}
						variant="contained"
						color="primary"
						disableRipple
					>
						OK
					</BootstrapButton>
				</Grid>
			</Grid>
		</>
	);
};

export default withStyles(styles)(EditImage);
