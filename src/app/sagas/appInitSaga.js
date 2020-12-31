import { call, takeEvery, put } from "redux-saga/effects";

import { setUserData } from "app/reducers/userReducer";
import {
    setLoggerState,
    setLoggerMessage
} from 'app/reducers/loggerReducer';
import { APP_ACTIONS } from "configs/types";


import userAPI from 'api/users';
import { initilize } from "app/reducers/appReducer";

function* appInitWorker(action) {
    if (!action.token) {
        yield put(setLoggerState({ open: true, status: "warning", }));
        yield put(setLoggerMessage("To use our platfrom you need to sign in"));
        yield put(initilize(true));

        return;
    }
    if (action.profile) {//if profile data is empty we send auth me
        try {
            const { data } = yield call(userAPI.getMeData, action.token);
            yield put(setLoggerState({ isAuthorized: true }));
            yield put(setUserData(data.data));
            yield put(initilize(true));
        }
        catch (error) {
            yield put(initilize(true));
            yield put(setLoggerState({ open: true, status: "error", isAuthorized: false }));
            yield put(setLoggerMessage(error.message));
        }
    }

}

function* appInitWatcher() {
    yield takeEvery(APP_ACTIONS.INITILIZE_APP_SAGA, appInitWorker);
}

export default appInitWatcher;