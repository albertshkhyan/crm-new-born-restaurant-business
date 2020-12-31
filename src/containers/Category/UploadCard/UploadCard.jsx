import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import useHover from '@react-hook/hover';
import cls from 'classnames';
import VisibilityIcon from '@material-ui/icons/Visibility';
import BrokenImageOutlinedIcon from '@material-ui/icons/BrokenImageOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { setFileState, setOriginalFileData, setShowEditModal } from 'app/reducers/fileReducer';
import { getCategoryItemSelector } from 'app/selectors/categorySelectors';
import LightBox from 'components/LightBox/LightBox';
import ModalEditImage from './../EditImage/ModalEditImage';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	circularProgress: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'transparent',
	},
	card: {
		padding: '10px',
	},
	uploadButtonActive: {
		border: '3px dashed #FAFAFA',
		background: '#FAFAFA',
		cursor: 'pointer',

		'&:hover': {
			border: '3px dashed #1890ff',
		},

		'& .previewImage': {
			background: 'red',
		},
	},
	errorViewActive: {
		border: '2px solid red',
	},
	cardBlock: {
		position: 'relative',
		background: '#FAFAFA',
	},
	CardMediaOverlay: {
		position: 'absolute',
		top: '0',
		left: '0',
		color: 'black',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,.1)',
		// display: 'none',
		visibility: 'hidden',
		opacity: 0,
		transition: 'visibility 0s, opacity 0.3s linear',
	},
	activeMediaOverlay: {
		// backgroundColor: 'blue',
		visibility: 'visible',
		opacity: 1,
		transition: 'visibility 0s, opacity 0.3s linear',

		// display: 'block',
	},
	previewImage: {
		'& img': {
			width: '100%',
		},
	},

	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	uploadButton: {
		height: '240px',
		background: '#FAFAFA',
	},

	progressViewActive: {
		border: '3px dashed #ccc',
	},
}));

const StyledIconZoomin = styled(({ color, children, activateZoomIn, ...otherProps }) => {
	return (
		<IconButton aria-label="visible" {...otherProps}>
			{children}
		</IconButton>
	);
})`
	cursor: pointer;
	color: ${(props) => props.color};

	transition: ${({ theme, activateZoomIn }) =>
		theme.transitions.create(['background-color', 'transform'], {
			duration: theme.transitions.duration.standard,
		})};
	&:hover {
		transform: scale(1.3);
	}
`;
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

/**
 *
 * local state - laoding, imageUrl: base64 (createObjectURL)
 */

function UploadCard({ addFile, files }) {
	const classes = useStyles();
	const target = React.useRef(null);
	const isHovering = useHover(target, { enterDelay: 100, leaveDelay: 100 });
	const fileState = useSelector((state) => state.file.fileState);
	const categoryItem = useSelector(getCategoryItemSelector);
	const showEditModal = useSelector((state) => state.file.showEditModal);

	const [openLightBox, setOpenLightBox] = useState(false);

	const dispatch = useDispatch();

	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			const file = acceptedFiles[0];
			if (file) {
				dispatch(setShowEditModal(true));
			}
			dispatch(setOriginalFileData(file)); //for can send to server
			dispatch(setFileState({ isDisabled: false, preview: URL.createObjectURL(file) }));
		},
	});

	const removePreviewImage = () => {
		dispatch(setFileState({ status: 'done', isDisabled: true, preview: '' }));
		dispatch(setOriginalFileData(null));
		// if (categoryItem.imageSrc) {
		// 	dispatch(setCategoryItem(null));
		// }
	};

	const uploadButton = (
		<div className={classes.uploadButton}>
			<Grid container spacing={0} align="center" justify="center" direction="column" style={{ height: '100%' }}>
				<Grid item>
					<Box my={1}>
						<Typography align="center" variant="body1">
							Drag 'n' drop some files here, or click to select files
						</Typography>
					</Box>
					<StyledIcon>
						<CloudUploadIcon style={{ fontSize: 70 }} />
					</StyledIcon>
				</Grid>
			</Grid>
		</div>
	);

	const handleVisible = () => {
		setOpenLightBox(true);
	};

	const beforeUpload = (event) => {
		// if (originalFile) {
		// 	dispatch(setShowEditModal(true));
		// }
		const { preview, status } = fileState;
		if ((preview && status === 'done') || status === 'error' || status === 'uploading') {
			event.stopPropagation();
		} else {
			return true;
		}
	};

	const renderUploadContent = (fileState) => {
		const { preview, status, name } = fileState;

		if (preview && status === 'done') {
			return (
				<>
					<Paper
						className={classes.previewImage}
						elevation={0}
						alt="Contemplative Reptile"
						title="Contemplative Reptile"
					>
						<img src={preview} alt="card" />
					</Paper>
					{overlayOfUploader}
				</>
			);
		} else if (status === 'uploading') {
			return (
				<Grid
					container
					spacing={0}
					align="center"
					justify="center"
					direction="column"
					style={{ height: '240px' }}
				>
					<Grid item>
						<CircularProgressWithLabel value={fileState.percent} />
					</Grid>
				</Grid>
			);
		} else if (status === 'error') {
			return (
				<>
					<Paper
						className={classes.previewImage}
						elevation={0}
						alt="Contemplative Reptile"
						title="Contemplative Reptile"
					>
						<Grid
							container
							spacing={0}
							align="center"
							justify="center"
							direction="column"
							style={{ height: '240px' }}
						>
							<Box width="100%">
								<Grid item>
									<Typography noWrap color="secondary">
										{name}
									</Typography>
									<BrokenImageOutlinedIcon color="secondary" fontSize="large" />
								</Grid>
							</Box>
						</Grid>
					</Paper>
					{overlayOfUploader}
				</>
			);
			// } else if ((!originalFile && !preview) || params.has('isNew')) {
		} else {
			return uploadButton;
		}
	};
	const overlayOfUploader = (
		<Box
			className={cls(classes.CardMediaOverlay, {
				[classes.activeMediaOverlay]: isHovering,
			})}
		>
			<Grid container spacing={0} align="center" justify="center" direction="column" style={{ height: '100%' }}>
				<Grid item>
					<StyledIconZoomin
						onClick={handleVisible}
						aria-label="visible"
						size="medium"
						disabled={fileState.status === 'error'}
						// classNmae={classes.zoomInBtn}
						// activateZoomIn
						color="white"
					>
						<VisibilityIcon />
					</StyledIconZoomin>
					<StyledIconZoomin onClick={removePreviewImage} aria-label="visible" size="medium" color="white">
						<HighlightOffIcon />
					</StyledIconZoomin>
				</Grid>
			</Grid>
		</Box>
	);

	const closePortal = () => {
		dispatch(setOriginalFileData(null));
		dispatch(setFileState({ isDisabled: true, preview: '' })); //isDisabled:true - for disabled button
		dispatch(setShowEditModal(false));
	};
	return (
		<section className="container">
			<div
				{...getRootProps({
					className: classes.dropzone,
					onClick: (event) => beforeUpload(event),
				})}
			>
				<input {...getInputProps()} />
				<Paper className={classes.root}>
					<Paper
						className={cls(classes.card, {
							[classes.uploadButtonActive]: !fileState.preview,
							[classes.progressViewActive]: fileState.preview && fileState.status === 'uploading',
							[classes.errorViewActive]: fileState.status === 'error',
						})}
						elevation={3}
					>
						<Box ref={target} className={classes.cardBlock} mx="auto" bgcolor="background.paper">
							{renderUploadContent(fileState)}

							{/**Preview modal */}

							<LightBox
								previewImageTitle={fileState.name}
								previewImageUrl={fileState.preview}
								categroyItemImageSrc={categoryItem.imageSrc}
								open={openLightBox}
								closePortal={() => setOpenLightBox(false)}
							/>
							{/**Edit modal */}
							<ModalEditImage
								open={showEditModal}
								// open={true}
								openPortal={() => dispatch(setShowEditModal(true))}
								closePortal={closePortal}
							/>
						</Box>
					</Paper>
				</Paper>
			</div>
		</section>
	);
}

export default UploadCard;
