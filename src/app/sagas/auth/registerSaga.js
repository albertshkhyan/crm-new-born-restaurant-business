
import { put, takeEvery, call } from 'redux-saga/effects';
import { USER_ACTIONS } from 'configs/types';
import userAPI from 'api/users';
import { setLoggerState, setLoggerMessage } from 'app/reducers/loggerReducer';


function* registerWorker(action) {
    try {
        const { data } = yield call(userAPI.registerUser, action.inputData);
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