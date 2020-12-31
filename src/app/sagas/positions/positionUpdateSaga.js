import { takeEvery, put, call } from 'redux-saga/effects';
import positionAPI from 'api/position';
import { POSITION_ACTIONS } from 'configs/types';
import { setLoggerMessage, setLoggerState } from 'app/reducers/loggerReducer';
import { setPositionIsLoading, updatePositionData } from 'app/reducers/positionReducer';

function* positionUpdateWorker({ positionId, positionBody }) {
    try {
        yield put(setPositionIsLoading(true));
        // yield delay(3000);
        const { data } = yield call(positionAPI.updatePosition, positionId, positionBody);
        if (data.status === "success") {
            yield put(updatePositionData(data.data.position));
            yield put(setLoggerState({ open: true, status: "info" }));
            yield put(setLoggerMessage("Update of position has been successfully"));
        }
        yield put(setPositionIsLoading(false));

    } catch (error) {
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage(error.message));
    }

}

function* positionUpdateWatcher() {
    //Spawns a saga on each action dispatched to the Store that matches pattern.
    yield takeEvery(POSITION_ACTIONS.UPDATE_POSITIONS_SAGA, positionUpdateWorker);
}

export default positionUpdateWatcher;