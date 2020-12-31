import { takeEvery, put, call } from 'redux-saga/effects';
import positionAPI from 'api/position';
import { POSITION_ACTIONS } from 'configs/types';
import { setLoggerMessage, setLoggerState } from 'app/reducers/loggerReducer';
import { setAllPositionsData, setPositionIsLoading } from 'app/reducers/positionReducer';

function* positionsGetAllWorker({ categoryId, setInPorgress }) {
    try {
        // yield put(setPositionIsLoading(true));
        yield setInPorgress(true);//setState

        const { data } = yield call(positionAPI.getAllPositions, categoryId);
        yield put(setAllPositionsData(data.positions));
        // yield put(setPositionIsLoading(false));
        yield setInPorgress(false);//setState

    } catch (error) {
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage(error.message));
    }

}

function* positionsGetAllWatcher() {
    //Spawns a saga on each action dispatched to the Store that matches pattern.
    yield takeEvery(POSITION_ACTIONS.GET_ALL_POSITIONS_SAGA, positionsGetAllWorker);
}

export default positionsGetAllWatcher;