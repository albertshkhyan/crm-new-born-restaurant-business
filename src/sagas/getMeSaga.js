import { call, takeEvery, put } from "redux-saga/effects";

import { setUserData } from "reducers/userReducer";
import {
    setLoggerState,
    setLoggerMessage
} from 'reducers/loggerReducer';

import { USER_ACTIONS } from 'actions/actionTypes';
import userAPI from 'api/users';

function* getMeWorker(action) {
    // console.log("getMeWorker📞📞📞📞📞📞");
    if(!action.token) {
        // console.log("in this case not have token- ", action.token);
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage("To use our platfrom you need to sign in"));
        return;
    }
    try {
        
        // const { data } = yield call(userAPI.getMeData, action.token);//not need pass token becase we have token interceptor it check in localStorage have token or not, if have put in Request headers:Authorization: Bearer + token
        // console.log("if have token must check that token with send Bearer token");
        const { data } = yield call(userAPI.getMeData);//
        console.log('getMeWorker📞📞📞📞📞📞 data', data.user);
        yield put(setUserData(data.user));
        yield put(setLoggerState({isAuthorized: true}));//if token exist must redirect in home

    } catch (error) {
        yield put(setLoggerState({ error: true, isAuthorized: false }));
        yield put(setLoggerMessage(error.message));
    }

}

function* getMeWatcher() {
    yield takeEvery(USER_ACTIONS.GET_ME_SAGA, getMeWorker);
}

export default getMeWatcher;