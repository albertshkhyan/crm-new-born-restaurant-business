
import { put, takeEvery, call } from 'redux-saga/effects';
import { USER_ACTIONS } from 'actions/actionTypes';
import userAPI from 'api/users';
import { setLoggerState, setLoggerMessage } from 'reducers/loggerReducer';
import { setUserData } from 'reducers/userReducer';


function* registerWorker(action) {
    console.log("registerWorker 📞📞📞📞📞📞");
    try {
        const { data } = yield call(userAPI.registerUser, action.inputData);
        console.log('registerWorker data', data);
        yield put(setLoggerState({ isAuthorized: false }));
        yield put(setLoggerMessage(data.message))


    } catch (error) {
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage(error.message));
    }
}

function* registerWatcher() {
    yield takeEvery(USER_ACTIONS.REGISTER_SAGA, registerWorker);
}

export default registerWatcher;