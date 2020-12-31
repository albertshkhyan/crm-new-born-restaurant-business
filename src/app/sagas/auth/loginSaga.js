import { call, takeEvery, put } from "redux-saga/effects";

// import { setUserData } from "reducers/userReducer";
import {
    setLoggerState,
    setLoggerMessage
} from 'app/reducers/loggerReducer';

import { USER_ACTIONS } from 'configs/types';
import userAPI from "api/users";
import { getMeAC } from "app/actions/userActions";
import { initilize } from "app/reducers/appReducer";

/**
 * 
 * @param call - 1. the function which will send requests, 2. argument of first function (pass payload)
 */
function* loginWorker(action) {
    const token = localStorage.getItem("token");
    if (token) {
        //if user already logged in system, we  musts show about that
        //yield put(setLoggerState({ error: true, isAuthorized: false }))
        // const { data } = yield call(userAPI.getMeData);
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage("User already logged in"));
        yield put(initilize(true));
        return

    }
    try {
        //after success login server give us token 
        yield put(initilize(false));//show preloader
        const { data } = yield call(userAPI.loginUser, action.inputData);//
        yield localStorage.setItem("token", data.token);
        yield put(getMeAC(data.token));//run new saga worker

        // yield put(setUserData(data));
    } catch (error) {
        yield put(setLoggerState({ error: true, open: true, status: "error" }));
        yield put(setLoggerMessage(error.message));
        yield put(initilize(true));
    }
}

function* loginWatcher() {
    //Spawns a saga on each action dispatched to the Store that matches pattern.
    yield takeEvery(USER_ACTIONS.LOGIN_SAGA, loginWorker);
}

export default loginWatcher;