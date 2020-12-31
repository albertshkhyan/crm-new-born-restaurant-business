import React, { useCallback, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Dashboard from 'components/Dashboard/Dashboard';
import NavBar from 'components/Navbar/NavBar';
import FloatingActionButton from 'components/FloatingActionButton/FloatingActionButton';

import { logoutAC } from 'app/actions/userActions';

import { getLoggerDataSelector } from './../app/selectors/loggerSelectors';

const Layout = ({ children }) => {
	const logger = useSelector(getLoggerDataSelector);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const dispatch = useDispatch();

	const computedHanldeLogout = useCallback(() => {
		dispatch(logoutAC());
	}, [dispatch]);

	const computedHandleDrawerToggle = useCallback(() => {
		setMobileOpen(!mobileOpen);
	}, [mobileOpen]);

	const computedNavbar = useCallback(() => {
		return (
			<NavBar
				isAuth={logger.isAuthorized}
				hanldeLogout={computedHanldeLogout}
				handleDrawerToggle={computedHandleDrawerToggle}
			/>
		);
	}, [computedHandleDrawerToggle, computedHanldeLogout, logger.isAuthorized]);

	const memoizeChildren = useMemo(() => {
		return children;
	}, [children]);

	const computedDashboard = useCallback(() => {
		return (
			<>
				{logger.isAuthorized && (
					<Dashboard
						children={memoizeChildren}
						mobileOpen={mobileOpen}
						handleDrawerToggle={computedHandleDrawerToggle}
					/>
				)}
			</>
		);
	}, [memoizeChildren, computedHandleDrawerToggle, logger.isAuthorized, mobileOpen]);

	const computedFloatingActionButton = useCallback(() => {
		return logger.isAuthorized && <FloatingActionButton />;
	}, [logger.isAuthorized]);
	return (
		<>
			{useMemo(() => {
				return computedNavbar();
			}, [computedNavbar])}
			{/* <NavBar isAuth={logger.isAuthorized} hanldeLogout={hanldeLogout} handleDrawerToggle={handleDrawerToggle} /> */}
			{/* {logger.isAuthorized && (
				<Dashboard
					children={children}
					mobileOpen={mobileOpen}
					handleDrawerToggle={computedHandleDrawerToggle}
				/>
			)} */}
			{/* {logger.isAuthorized && (
				<Dashboard
					children={children}
					mobileOpen={mobileOpen}
					handleDrawerToggle={computedHandleDrawerToggle}
				/>
			)} */}
			{/**WORKING - PREVETN RE-RENDER */}
			{useMemo(() => {
				return computedFloatingActionButton();
			}, [computedFloatingActionButton])}
			{computedDashboard()}
			{!logger.isAuthorized && memoizeChildren}
			{/* {logger.isAuthorized && <FloatingActionButton />} */}
			{/* {computedFloatingActionButton()} */}
			{/* {computetFoo()} */}
		</>
	);
};

export default Layout;
