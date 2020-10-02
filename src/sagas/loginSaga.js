import { call, takeEvery, put } from "redux-saga/effects";

// import { setUserData } from "reducers/userReducer";
import {
    setLoggerState,
    setLoggerMessage
} from 'reducers/loggerReducer';

import { USER_ACTIONS } from 'actions/actionTypes';
import userAPI from "api/users";
import { getyMeAC } from "actions/userActions";

/**
 * 
 * @param call - 1. the function which will send requests, 2. argument of first function (pass payload)
 */
function* loginWorker(action) {
    console.log("loginWorker📞📞📞📞📞📞");
    const token = localStorage.getItem("token");
    if (token) {
        //if user already logged in system, we  musts show about that
        //yield put(setLoggerState({ error: true, isAuthorized: false }))
        // const { data } = yield call(userAPI.getMeData);
        console.log('loginWorker📞📞📞📞📞📞');
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage("User already logged in"));
        return

    }
    try {
        //after success login server give us token 
        const { data } = yield call(userAPI.loginUser, action.inputData);//
        console.log('data loginWorker', data);
        yield localStorage.setItem("token", data.token);
        yield put(getyMeAC(data.token));//run new saga worker
        yield put(setLoggerState({ isAuthorized: true, status: "authorized", message: "" }));
        // yield put(setUserData(data));
    } catch (error) {
        console.log('loginSaga - error', error);
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage(error.message));
    }
}

function* loginWatcher() {
    console.log('loginWatcher WORK');
    //Spawns a saga on each action dispatched to the Store that matches pattern.
    yield takeEvery(USER_ACTIONS.LOGIN_SAGA, loginWorker);
}

export default loginWatcher;