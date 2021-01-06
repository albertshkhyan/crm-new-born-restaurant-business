import React, { useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggerDataSelector } from './../app/selectors/loggerSelectors';
import { setLoggerState } from 'app/reducers/loggerReducer';
import useOnce from './../hooks/use-once';

function TransitionLeft(props) {
	return <Slide {...props} direction="left" />;
}
const Notification = ({ anchorOrigin = {}, children }) => {
	const dispatch = useDispatch();
	const { message, status, open } = useSelector(getLoggerDataSelector);
	const [transition, setTransition] = useState(undefined);

	const handleClose = () => {
		dispatch(setLoggerState({ open: false }));
	};

	useOnce(() => {
		setTransition(() => TransitionLeft);
	});

	return (
		<>
			<Snackbar
				open={open}
				onClose={handleClose}
				autoHideDuration={3000}
				TransitionComponent={TransitionLeft}
				key={transition ? transition.name : ''}
			>
				<Alert elevation={10} variant="filled" severity={status}>
					{message}
					<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
						<CloseIcon fontSize="small" />
					</IconButton>
				</Alert>
			</Snackbar>
		</>
	);
};

export default Notification;
