import React, { useEffect, useState } from 'react';

import AddAndEditCategoryBlock from '../AddAndEditCategoryBlock';
import { useDispatch } from 'react-redux';
import { createCategorymAC } from '../../../app/actions/categoryActions';
import { setOriginalFileData, setFileState } from 'app/reducers/fileReducer';

function AddCategory({ categoryItem }) {
	const dispatch = useDispatch();
	const [createdCategoryData, setCreatedCategoryData] = useState(null);

	const handleCreatedCategoryData = (data) => {
		setCreatedCategoryData(data);
	};

	useEffect(() => {
		if (createdCategoryData) {
			const { categoryName, selectedFile } = createdCategoryData;
			dispatch(createCategorymAC(categoryName, selectedFile)); //get category by id
		}

		return () => {
			// dispatch(setFileState({ preview: '', isDisabled: true }));
			dispatch(setFileState({ preview: '' }));
			dispatch(setOriginalFileData(null));
		};
	}, [createdCategoryData, dispatch]);

	return (
		<>
			<AddAndEditCategoryBlock setCreatedCategoryData={handleCreatedCategoryData} categoryItem={categoryItem} />
		</>
	);
}

export default AddCategory;
