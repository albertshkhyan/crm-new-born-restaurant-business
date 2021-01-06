import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Dashboard from 'components/Dashboard/Dashboard';
import NavBar from 'components/Navbar/NavBar';
import FloatingActionButton from 'components/FloatingActionButton/FloatingActionButton';

import { logoutSG } from 'actions/userActions';

const Layout = ({ children }) => {
	const logger = useSelector((state) => state.logger);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const dispatch = useDispatch();
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const hanldeLogout = () => {
		dispatch(logoutSG());
	};
	return (
		<>
			<NavBar isAuth={logger.isAuthorized} hanldeLogout={hanldeLogout} handleDrawerToggle={handleDrawerToggle} />
			{logger.isAuthorized && (
				<Dashboard children={children} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
			)}
			{children}
			{logger.isAuthorized && <FloatingActionButton />}
		</>
	);
};

export default Layout;
