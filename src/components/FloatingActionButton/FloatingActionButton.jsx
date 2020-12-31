import React from 'react';

import Grow from '@material-ui/core/Grow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import blue from '@material-ui/core/colors/blue';

import Icon from 'components/Icon/Icon';

import { NavLink } from 'react-router-dom';
import useHover from '@react-hook/hover';

// const itemsOfFAB = [
// 	{
// 		id: 1,
// 		timeout: 1000,
// 		iconName: 'messenger',
// 		to: '/messenger',
// 		title: 'Message',
// 		fabColor: null,
// 		style: null,
// 		ariaLabel: 'message',
// 	},
// 	{
// 		id: 2,
// 		timeout: 1000,
// 		title: 'Add Order',
// 		to: '/order',
// 		ariaLabel: 'add',
// 		fabColor: 'secondary',
// 		iconFill: "white",
// 		iconName: 'fastIconOrder',
// 		style: null,
// 	},
// ];

export default function FloatingActionButton() {
	const target = React.useRef(null);
	const isHovering = useHover(target, { enterDelay: 100, leaveDelay: 100 });

	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	const hoverOrCheck = isHovering || checked; //on mobile not work hover, add also onclick
	return (
		<>
			<Box style={{ zIndex: 999 }} ref={target} position="fixed" bottom="20px" right="20px">
				{hoverOrCheck && (
					<>
						<Grow in={hoverOrCheck} {...(hoverOrCheck ? { timeout: 1000 } : {})}>
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
						<Grow in={hoverOrCheck} {...(hoverOrCheck ? { timeout: 1000 } : {})}>
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

						<Grow
							in={hoverOrCheck}
							style={{ transformOrigin: '0 0 0' }}
							{...(hoverOrCheck ? { timeout: 500 } : {})}
						>
							<Box m={1}>
								<FormControlLabel
									control={
										<Tooltip title="Add Category" placement="left" arrow>
											<NavLink exact to="/category/new?isNew">
												<Fab style={{ background: blue[500] }} aria-label="add">
													<Icon fill="white" name="fastIconCategory" />
												</Fab>
											</NavLink>
										</Tooltip>
									}
								/>
							</Box>
						</Grow>
					</>
				)}

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
		</>
	);
}
