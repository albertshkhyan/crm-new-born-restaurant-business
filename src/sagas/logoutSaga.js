import { takeEvery, put } from "redux-saga/effects";

import {
    setLoggerState,
    setLoggerMessage
} from 'reducers/loggerReducer';

import { USER_ACTIONS } from 'actions/actionTypes';

function* logoutWorker() {
    yield console.log("logoutWorker 📞📞📞📞📞📞");
    const token = localStorage.getItem("token");
    console.log('token', token);
    yield put(setLoggerState({ processing: true }));
    if (!token) {
        yield put(setLoggerState({ error: true, isAuthorized: false }))
        yield put(setLoggerMessage('Token not found'))
        return
    }
    localStorage.removeItem('token')
    yield put(setLoggerState({ isAuthorized: false }));
}

function* logoutWatcher() {
    yield takeEvery(USER_ACTIONS.LOGOUT_SAGA, logoutWorker)
}

export default logoutWatcher;