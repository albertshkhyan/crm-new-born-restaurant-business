import { takeEvery, put, call } from 'redux-saga/effects';
import positionAPI from 'api/position';
import { POSITION_ACTIONS } from 'configs/types';
import { setLoggerMessage, setLoggerState } from 'app/reducers/loggerReducer';
import { setPositionIsLoading } from 'app/reducers/positionReducer';
import { getAllPositionsAC } from 'app/actions/positionActions';

function* positionDeleteWorker({ positionId, categoryId }) {
    try {
        yield put(setPositionIsLoading(true));
        // yield delay(3000);
        const { data } = yield call(positionAPI.deletePosition, positionId);
        yield put(getAllPositionsAC(categoryId));//run saga
        // yield put(setPositionIsLoading(false));
        if (data.status === "success") {
            yield put(setLoggerState({ open: true, status: "info" }));
            yield put(setLoggerMessage(data.msg));
        }

    } catch (error) {
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage(error.message));
    }

}

function* positionDeleteWatcher() {
    //Spawns a saga on each action dispatched to the Store that matches pattern.
    yield takeEvery(POSITION_ACTIONS.DELETE_POSITION_SAGA, positionDeleteWorker);
}

export default positionDeleteWatcher;