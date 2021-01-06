import React from 'react';

import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
//

import AppRoutes from './routers/Routes';
import Layout from 'Layout/Layout';
import Notification from './components/Notification';

import { initilizeApp } from 'app/reducers/appReducer';
import useOnce from './hooks/use-once';

import { getProfileDataSelector } from './app/selectors/userSelector';

import './sass/main.scss';

function App() {
	const dispatch = useDispatch();
	const profile = useSelector(getProfileDataSelector);
	const initilized = useSelector((state) => state.app.initilized);
	//

	useOnce(() => {
		dispatch(initilizeApp(localStorage.token, _.isEmpty(profile)));
	});

	if (!initilized) return <h2>Loading...</h2>;
	return (
		<>
			<Layout>
				<AppRoutes />
			</Layout>
			<Notification />
		</>
	);
}

export default App;
