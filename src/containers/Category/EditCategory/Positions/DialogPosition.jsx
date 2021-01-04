import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import { green } from '@material-ui/core/colors';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { createPositionsSG, updatePositionsSG } from 'app/sagasActions/positionActions';

const schema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.min(2, 'The position name needs to be at least 2 char') //he position name needs to be at least 1 char
		.max(50, 'The contact name cannot exceed 50 char')
		.required('Position name is required!'),
	cost: yup
		// .string()
		.number('Must be number')
		.min(1, 'Minimum value must be 1')
		// .matches(/[0-9]+/gi, 'Enter number only')
		.required('Position cost is required!'),
});

const ColorButton = withStyles((theme) => ({
	root: {
		color: 'white',
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
	},
}))(Button);

export default function DialogPosition({ positionItem, categoryId, positionId, handleClose, open }) {
	const { register, handleSubmit, errors, formState } = useForm({
		resolver: yupResolver(schema),
	});
	const { isDirty } = formState;
	/**
	 * dirty: This property returns true if the element’s contents have been changed.
	 */
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		const newPositionData = { ...data };
		if (categoryId) {
			//#CREATE POSITION - whene we create position we send in server categoryId
			newPositionData.categoryId = categoryId;
			handleClose();
			dispatch(createPositionsSG(newPositionData));
		} else if (positionId && positionItem) {
			//#UPDATE POSITION - whene we update position we send in server positionId
			const updatedPositionData = { ...data }; //positionBody
			if (isDirty) {
				//#if field are changed
				dispatch(updatePositionsSG(positionId, updatedPositionData));
			}
			handleClose();
		}
	};

	return (
		<>
			<Dialog
				// disableBackdropClick
				fullWidth
				maxWidth="sm"
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					{categoryId && <DialogTitle id="form-dialog-title">Add position</DialogTitle>}
					{positionId && <DialogTitle id="form-dialog-title">Update position</DialogTitle>}

					<DialogContent>
						<Box component="div" py={1}>
							<TextField
								defaultValue={positionItem ? positionItem.name : ''}
								name="name"
								inputRef={register}
								error={errors.name ? true : false}
								helperText={errors.name ? errors.name.message : ''}
								label={errors.name ? 'Error' : 'Position name'}
								autoFocus
								margin="dense"
								id="name"
								type="text"
								fullWidth
							/>
						</Box>

						<Box component="div" py={1}>
							<TextField
								defaultValue={positionItem ? positionItem.cost : '1'}
								name="cost"
								inputRef={register}
								error={errors.cost ? true : false}
								helperText={errors.cost ? errors.cost.message : ''}
								label={errors.cost ? 'Error' : 'Position cost'}
								autoFocus
								margin="dense"
								id="name"
								type="number"
								inputProps={{ min: 1 }}
								fullWidth
							/>
						</Box>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<ColorButton
							disabled={!isDirty}
							type="submit"
							variant="contained"
							// onClick={handlePositionCreate} //dispatch
						>
							Save
						</ColorButton>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
}
