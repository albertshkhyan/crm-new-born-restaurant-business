import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './app/store';

import { BrowserRouter } from "react-router-dom";
// import createHistory from 'history/createBrowserHistory';

// import { browserHistory } from "react-router";
// import { createBrowserHistory } from "history";

// import { syncHistoryWithStore } from 'react-router-redux'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from "styled-components";


import theme from "theme";

// const browserHistory = createHistory();

store.subscribe(() => {
  window.state = store.getState();
})

// const history = syncHistoryWithStore(browserHistory, store)



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
