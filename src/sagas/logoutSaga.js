import { takeEvery, put } from "redux-saga/effects";

import {
    setLoggerState,
    setLoggerMessage
} from 'reducers/loggerReducer';

import { USER_ACTIONS } from 'actions/actionTypes';
import { setUserData } from 'reducers/userReducer';

function* logoutWorker() {
    yield console.log("logoutWorker 📞📞📞📞📞📞");
    const token = localStorage.getItem("token");
    console.log('token', token);
    yield put(setLoggerState({ processing: true }));
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