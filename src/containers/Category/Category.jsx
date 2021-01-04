import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemLink from 'components/ListItemLink/ListItemLink';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesSG } from 'app/sagasActions/categoryActions';
import useOnce from 'hooks/use-once';
import { getCategoryDataSelector } from 'app/selectors/categorySelectors';
import Preloader from 'components/Preloader/Preloader';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #e0e0e0',
		padding: '0',
	},
	listItem: {
		borderBottom: '1px solid #e0e0e0',
	},
}));

const Category = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const categoryData = useSelector(getCategoryDataSelector);
	const [inProgress, setInPorgress] = useState(true);

	useOnce(() => {
		// setTimeout(() => {
		dispatch(getCategoriesSG((inProgress) => setInPorgress(inProgress)));
		// }, 3000);
	});

	if (inProgress) return <Preloader />;
	return (
		<>
			{}
			{categoryData.length > 0 ? (
				<List className={classes.root} aria-label="contacts">
					{categoryData.map(({ name, _id }) => {
						return (
							<ListItemLink
								primary={name}
								to={`category/${_id}`}
								className={classes.listItem}
								key={_id}
								button
								dense
								role={undefined}
								onClick={() => {}}
							></ListItemLink>
						);
					})}
				</List>
			) : (
				<h2>Still you not have categories, please add new category</h2>
			)}
		</>
	);
};
export default Category;
