import React from 'react';

import Grid from '@material-ui/core/Grid';
import CategoryUploader from './CategoryUploader';
import UploadCard from './UploadCard/UploadCard';

const AddAndEditCategoryBlock = () => {
	return (
		<>
			<Grid item xs={12}>
				<Grid container justify="space-between">
					<CategoryUploader />
					<Grid xs={12} md={4} lg={3} xl={3} item>
						<UploadCard />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default AddAndEditCategoryBlock;
