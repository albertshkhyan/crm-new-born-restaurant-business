import { takeEvery, put, call } from 'redux-saga/effects';
import positionAPI from 'api/position';
import { POSITION_ACTIONS } from 'configs/types';
import { setLoggerMessage, setLoggerState } from 'app/reducers/loggerReducer';
import { setPositionData, setPositionIsLoading } from 'app/reducers/positionReducer';

function* positionCreateWorker({ newPositionData }) {
    try {
        yield put(setPositionIsLoading(true));
        // yield delay(3000);
        const { data } = yield call(positionAPI.createPosition, newPositionData);

        if (data.status === "success") {
            yield put(setPositionData(data.data));
            yield put(setLoggerState({ open: true, status: "success" }));
            yield put(setLoggerMessage("The position has been created"));
        }
        yield put(setPositionIsLoading(false));

    } catch (error) {
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage(error.message));
    }

}

function* positionCreateWatcher() {
    //Spawns a saga on each action dispatched to the Store that matches pattern.
    yield takeEvery(POSITION_ACTIONS.CREATE_POSITIONS_SAGA, positionCreateWorker);
}

export default positionCreateWatcher;