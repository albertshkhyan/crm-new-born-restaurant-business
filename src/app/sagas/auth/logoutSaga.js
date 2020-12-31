import { takeEvery, put } from "redux-saga/effects";
// const history = createBrowserHistory();

import {
    setLoggerState,
    setLoggerMessage
} from 'app/reducers/loggerReducer';

import { USER_ACTIONS } from 'configs/types';
import { setUserData } from 'app/reducers/userReducer';

function* logoutWorker() {
    const token = localStorage.getItem("token");
    // yield put(setLoggerState({ processing: true }));
    if (!token) {//if not have token in local storage
        yield put(setLoggerState({ error: true, isAuthorized: false }))
        yield put(setLoggerMessage('Token not found'))
        return
    }
    //when we do logout we clear localStorage and user data from store
    localStorage.removeItem('token')
    yield put(setLoggerState({ isAuthorized: false }));
    yield put(setUserData(null));
}

function* logoutWatcher() {
    yield takeEvery(USER_ACTIONS.LOGOUT_SAGA, logoutWorker)
}

export default logoutWatcher;