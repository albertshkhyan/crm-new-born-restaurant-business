import { call, takeEvery, put } from "redux-saga/effects";

import { setUserData } from "app/reducers/userReducer";
import {
    setLoggerState,
    setLoggerMessage
} from 'app/reducers/loggerReducer';

import { USER_ACTIONS } from 'configs/types';
import userAPI from 'api/users';
import { initilize } from "app/reducers/appReducer";

function* getMeWorker(action) {
    if (!action.token) {
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage("To use our platfrom you need to sign in"));
        return;
    }
    try {
        //#not need pass token becase we have token interceptor it check in localStorage have token or not, if have put in Request headers:Authorization: Bearer + token
        //#if have token must check that token with send Bearer token
        const { data } = yield call(userAPI.getMeData, action.token);
        //if we will have error example 401 below code not will be run (catch)
        yield put(setUserData(data.data));
        yield put(setLoggerState({ isAuthorized: true, status: "", message: "" }));//if token exist must redirect in home
        yield put(initilize(true));
    }
    catch (error) {
        yield put(setLoggerState({ error: true, isAuthorized: false }));
        yield put(setLoggerMessage(error.message));
    }

}

function* getMeWatcher() {
    yield takeEvery(USER_ACTIONS.GET_ME_SAGA, getMeWorker);
}

export default getMeWatcher;