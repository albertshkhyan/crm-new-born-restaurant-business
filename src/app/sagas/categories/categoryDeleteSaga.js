
import { call, takeEvery, put } from 'redux-saga/effects';

import { CATEGORY_ACTIONS } from 'configs/types';
import categoryAPI from 'api/category';
import { setLoggerMessage, setLoggerState } from 'app/reducers/loggerReducer';


function* categoryDeleteWorker({ categoryId, setInProgress, navigateTo }) {
    try {
        yield setInProgress(true);//setState
        yield put(setLoggerState({ status: "deleting" }));
        const { data } = yield call(categoryAPI.deleteCategory, categoryId);
        yield setInProgress(false);//setState
        yield put(setLoggerState({ status: "done" }));


        if (data.status === "success") {
            yield navigateTo('/category');
            yield put(setLoggerState({ open: true, status: "info", }));
            yield put(setLoggerMessage(data.data.message));

        }
        // yield action.setInPorgress(false);//setState

    } catch (error) {
        yield put(setLoggerState({ error: true, open: true, status: "error" }));
        yield put(setLoggerMessage(error.message));
    }
}

function* getCategoryWatcher() {
    yield takeEvery(CATEGORY_ACTIONS.DELETE_CATEGORY_SAGA, categoryDeleteWorker)
}
export default getCategoryWatcher;