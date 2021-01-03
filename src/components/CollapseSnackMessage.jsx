import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.up('xs')]: {
			width: '344px !important',
		},
	},
	card: {
		width: '100%',
		backgroundColor: '#fddc6c',
	},
	typography: {
		fontWeight: 'bold',
	},
	actionRoot: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '8px 8px 8px 16px',
	},
	icons: {
		marginLeft: 'auto',
	},
	expand: {
		padding: '8px 8px',
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	collapse: {
		padding: 16,
	},
	checkIcon: {
		fontSize: 20,
		color: '#b3b3b3',
		paddingRight: 4,
	},
	button: {
		padding: 0,
		textTransform: 'none',
	},
}));

const CollapseSnackMessage = React.forwardRef(({ handleDismiss, message = 'Some message' }, ref) => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div ref={ref} className={classes.root}>
			<Card className={classes.card}>
				{/* <LinearWithValueLabel isHovering={isHovering} /> */}

				<CardActions classes={{ root: classes.actionRoot }}>
					<Typography variant="subtitle2" className={classes.typography}>
						{message}
					</Typography>
					<div className={classes.icons}>
						<IconButton
							aria-label="Show more"
							className={classnames(classes.expand, {
								[classes.expandOpen]: expanded,
							})}
							onClick={handleExpandClick}
						>
							<ExpandMoreIcon />
						</IconButton>
						<IconButton className={classes.expand} onClick={handleDismiss}>
							<CloseIcon />
						</IconButton>
					</div>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<Paper className={classes.collapse}>
						<Typography gutterBottom>PDF ready</Typography>
						<Button size="small" className={classes.button}>
							<CheckCircleIcon className={classes.checkIcon} />
							Download now
						</Button>
					</Paper>
				</Collapse>
			</Card>
		</div>
	);
});

export default CollapseSnackMessage;
