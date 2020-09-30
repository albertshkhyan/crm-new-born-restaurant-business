import React from "react";

import { useSelector } from "react-redux";
import Dashboard from "components/Dashboard/Dashboard";
import Navbar from 'components/Navbar/Navbar';
import FloatingActionButton from 'components/FloatingActionButton';

const Layout = ({children}) => {
  const logger = useSelector((state) => state.logger);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const hanldeLogout = () => {};


  return (
    <>
    <Navbar 
    isAuth = {logger.isAuthorized}
    hanldeLogout = {hanldeLogout}
    handleDrawerToggle = {handleDrawerToggle}
    />
      {logger.isAuthorized && <Dashboard children={children} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/> }
      {children}
      {logger.isAuthorized &&  <FloatingActionButton />}
    </>
  );
};

export default Layout;
