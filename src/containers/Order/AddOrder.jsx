import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import useOnce from 'hooks/use-once';
import { getAllPositionsSG } from 'app/sagasActions/positionActions';
import { getAllPositionsDataSelector } from 'app/selectors/positionSelector';
import Preloader from 'components/Preloader/Preloader';
import { getCategoryDataSelector } from 'app/selectors/categorySelectors';
import { getCategoriesSG } from 'app/sagasActions/categoryActions';
import CollapsibleTable from './CollapsibleTable';

const AddOrder = () => {
	const dispatch = useDispatch();
	const positionData = useSelector(getAllPositionsDataSelector);
	const categoryData = useSelector(getCategoryDataSelector);

	const [inProgress, setInPorgress] = useState(true);

	let { id: categoryId } = useParams();

	useOnce(() => {
		dispatch(getAllPositionsSG(categoryId, (inProgress) => setInPorgress(inProgress)));
		dispatch(getCategoriesSG((inProgress) => setInPorgress(inProgress)));
	});

	if (inProgress) return <Preloader />;
	return (
		<div>
			{positionData.length > 0 && categoryData.length > 0 ? (
				<CollapsibleTable categoryData={categoryData} positionData={positionData} />
			) : (
				<Typography>Still you not have order, please add new order</Typography>
			)}
		</div>
	);
};

export default AddOrder;
