import React from 'react';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { NavLink } from 'react-router-dom';

function ListItemLink({ to, icon, primary, activeClassName, className }) {
	const CustomLink = React.useMemo(
		() =>
			React.forwardRef((linkProps, ref) => (
				<div className={className}>
					<NavLink activeClassName={activeClassName} ref={ref} to={to} {...linkProps} />
				</div>
			)),
		[activeClassName, to, className]
	);

	return (
		<ListItem button component={CustomLink}>
			{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
			<ListItemText primary={primary} />
		</ListItem>
	);
}

export default ListItemLink;
