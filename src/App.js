import React, {  useEffect } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Alert from '@material-ui/lab/Alert';

import _ from "lodash"
import { useDispatch, useSelector } from 'react-redux';

import useRoutes from "hooks/useRoutes";
import { NavBar } from "components";
import { getyMeAC } from './actions/userActions';
import { setLoggerState } from "reducers/loggerReducer";

import "./sass/main.scss";

function App() {
  const logger = useSelector(state => state.logger);
  const dispatch = useDispatch();
  // const auth = useAuth()
  const routes = useRoutes(logger.isAuthorized, logger.error);
  const profile = useSelector((state) => state.users.data)

  /*#In every app initilize we must check in state have user data or not, 
    If user object exist in state
      we must indetifier that user, run getMeSaga (get token from localStorage then send Request)
        if not have token in localStorage
          not send request 
        if have token in localStorage
          we must update user data in state. (send getMeData request)

          getMeSaga 
          getMeData (api) - send request

    ☝ Problems
      FIXME - When token is incorrect in front and then we try to send request, front say that user already logged in, but in actually token is incorrect.
        ⚠ when token is incorrect show -> Failed to authenticate token. and redirect in login
          When not have token in localStorage show -> Access to this resource is denied. (REDIRECT TP HOME)

          
          Correct
          when token is incorrect show 
            -> 401 unauthorized, message: Invalid token
          when not have token in localStorage
            -> when localStorage is empty not do request to server
          If token exist in localStorage, must redirect in home 
          
          When already is logger mus show home page, but first show login page then do request then redirect to homep age.
            if in localStorage exist token after reload must shot identy page (home page)
  */


  useEffect(() => {
    if (_.isEmpty(profile)) {
      dispatch(getyMeAC(localStorage.token));
    }
  }, [profile, dispatch]);

  const handleClose = () => {
    dispatch(setLoggerState({ error: false }))
  }
  return (
    <>
      <NavBar />
      {routes}
      <Snackbar
        open={logger.error}
        TransitionComponent={Fade}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert elevation={10} variant="filled" severity="error">
          {logger.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
