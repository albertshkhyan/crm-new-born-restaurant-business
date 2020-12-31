import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputAdornment from '@material-ui/core/InputAdornment';
import { default as MuiButton } from '@material-ui/core/Button';

import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createCategorymAC, updateCategoryAC } from 'app/actions/categoryActions';
import { getCategoryItemSelector } from 'app/selectors/categorySelectors';
import { setOriginalFileData, setFileState, setShowEditModal } from 'app/reducers/fileReducer';

const useStyles = makeStyles((theme) => ({
	uploadInput: {
		display: 'none',
	},
}));

//HOC component withStyles - with this hoc we create custom component which have their custom styles
const OrangeButton = withStyles((theme) => {
	return {
		root: (props) =>
			props.mycolor === 'orange' && props.variant === 'contained'
				? {
						color: theme.palette.white,
						backgroundColor: theme.palette.orange.main,
						'&:hover': {
							backgroundColor: theme.palette.orange.dark,
							// Reset on touch devices, it doesn't add specificity
							'@media (hover: none)': {
								backgroundColor: theme.palette.orange.main,
							},
						},
				  }
				: {},
	};
})(MuiButton);

const GreenButton = withStyles((theme) => {
	return {
		root: (props) =>
			props.mycolor === 'green' && props.variant === 'contained'
				? {
						color: theme.palette.white,
						backgroundColor: theme.palette.green.main,
						'&:hover': {
							backgroundColor: theme.palette.green.dark,
							// Reset on touch devices, it doesn't add specificity
							'@media (hover: none)': {
								backgroundColor: theme.palette.green.main,
							},
						},
				  }
				: {},
	};
})(MuiButton);

const CategoryUploader = () => {
	// console.log('CategoryUploader render');
	const fileState = useSelector((state) => state.file.fileState);
	const isDisabled = useSelector((state) => state.file.fileState.isDisabled);

	const dispatch = useDispatch();

	let { id: categoryId } = useParams();

	const originalFile = useSelector((state) => state.file.originalFile);
	// console.log('originalFile', originalFile);
	const categoryItem = useSelector(getCategoryItemSelector);

	const location = useLocation();
	const params = new URLSearchParams(location.search);

	const {
		register,
		handleSubmit,
		watch,
		errors,
		setValue,
		formState: { isSubmitting, isDirty },
	} = useForm({
		mode: 'onChange',
	});

	// console.log('!isDirty', !isDirty);
	// console.log('isDirty', isDirty);
	// console.log('isDisabled', isDisabled);
	const handleClickShowClose = () => {
		setValue('categoryName', '');
	};

	const handleFileInputChange = (event) => {
		//#when click save(submit) button we must send file on reducer
		const originalFile = event.target.files[0];
		if (originalFile) {
			//check with condition for not give error when close uplaod window
			dispatch(setOriginalFileData(originalFile)); //for can send to server
			dispatch(setShowEditModal(true)); //crop, zoom modal
			dispatch(
				setFileState({
					preview: URL.createObjectURL(originalFile),
					status: 'done',
					isDisabled: false, //for button
					// visibleEditImage: true, //show edit image before upload
				})
			);
		}
	};

	const changeInputValueHandler = (event) => {
		let isDisabled = event.target.value ? false : true;
		// debugger;
		if (categoryItem.name === event.target.value) {
			isDisabled = true;
		}
		// debugger;
		if (originalFile) {
			isDisabled = false;
		}
		setValue(event.target.value);
		dispatch(setFileState({ isDisabled }));
	};

	const uploadImage = async (categoryName) => {
		if (params.has('isNew')) {
			//#create new category (post)
			dispatch(createCategorymAC(categoryName, originalFile));
		} else {
			//#update category (patch)

			//onProgress - pass to api -callback for do dispatch
			function onProgress(progressEvent) {
				//#progressEvent.lengthComputable - when this field true we can access on loaded and total properties
				const { loaded, total } = progressEvent;
				//# find the percentage we using the formula for calculating the percentage
				const percent = Math.floor((loaded * 100) / total);
				console.log(`%cPercent - ${percent}kb  Total - ${total}kb | ${percent}%`, 'color: red');

				// if (percent < 100) {
				dispatch(setFileState({ percent }));
				// }
			}

			dispatch(updateCategoryAC(categoryId, categoryName, originalFile, onProgress));
		}
	};

	const onSubmit = (data) => {
		if (_.isEmpty(data)) return null;
		//previewSource - base 64E cnoded image  //show very big url 😨
		uploadImage(data.categoryName);
	};
	const classes = useStyles();
	return (
		<>
			{/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
			<Grid xs={12} sm={12} md={4} lg={6} xl={6} item>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						autoComplete="off"
						name="categoryName"
						inputRef={register({ required: true })}
						fullWidth
						label={'Category name'}
						defaultValue={params.has('isNew') ? '' : categoryItem.name}
						onChange={changeInputValueHandler}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									{watch('categoryName') ? (
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowClose}
										>
											<CloseIcon />
										</IconButton>
									) : (
										'' //for prevetn mui error, with null give error
									)}
								</InputAdornment>
							),
						}}
					/>
					{/* && "First name is required" */}
					{errors.categoryName && <p>This field is required!</p>}

					<Grid xs={8} item>
						<Box my={2}>
							{/**SELECT IMAGE INPUT */}
							<input
								disabled={isSubmitting || fileState.status === 'uploading'}
								onChange={handleFileInputChange}
								accept="image/*"
								className={classes.uploadInput}
								id="contained-button-file"
								multiple={false}
								type="file"
							/>
							<label htmlFor="contained-button-file">
								<OrangeButton
									disabled={
										isSubmitting ||
										fileState.status === 'uploading' ||
										fileState.status === 'deleting'
									}
									type="button" //for not send request
									fullWidth
									mycolor="orange" //color in mui reserver props, give warning when use color props
									className={classes.button}
									startIcon={<CloudUploadIcon />}
									variant="contained"
									component="span"
								>
									Upload
								</OrangeButton>
							</label>
						</Box>
						<Box my={2}>
							<GreenButton
								type="submit"
								// disabled={fileState.status === 'uploading' || isDisabled || !isDirty}
								disabled={fileState.status === 'uploading' || isDisabled}
								mycolor="green"
								variant="contained"
								size="large"
								startIcon={<SaveIcon />}
							>
								Save
							</GreenButton>
						</Box>
					</Grid>
				</form>
			</Grid>
		</>
	);
};

export default CategoryUploader;
