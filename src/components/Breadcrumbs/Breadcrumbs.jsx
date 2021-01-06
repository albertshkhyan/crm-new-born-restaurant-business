import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { default as MUIBreadcrumbs } from '@material-ui/core/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	lists: {
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing(1),
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	linkRouterElem: {
		fontWeight: '500 !important',
	},
}));

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const Breadcrumbs = ({ routeData, pathname = '' }) => {
	const pathnames = pathname.split('/').filter((x) => x);
	const classes = useStyles();

	// if (!routeData) return null;
	return (
		<div className={classes.root}>
			<MUIBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
				{pathnames.map((s, index, k) => {
					const last = index === pathnames.length - 1;
					const { to, generateRouterName } = {
						generateRouterName(to) {
							let title = '';
							routeData.map((r) => {
								if (to === r.url) {
									return (title = r.title);
								}
								return r;
							});
							return title;
						},
						to: `/${pathnames.slice(0, index + 1).join('/')}`,
					};

					return last ? (
						<Typography variant="h6" color="primary" key={to} noWrap>
							<Box fontWeight="fontWeightBold">{generateRouterName(to)}</Box>
						</Typography>
					) : (
						<LinkRouter className={classes.linkRouterElem} to={to} key={to}>
							<Typography style={{ fontWeight: 500 }} variant="h6" color="primary" key={to}>
								{generateRouterName(to)}
							</Typography>
						</LinkRouter>
					);
				})}
			</MUIBreadcrumbs>
		</div>
	);
};

export default Breadcrumbs;
