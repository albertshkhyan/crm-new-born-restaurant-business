
import { call, takeEvery, put } from 'redux-saga/effects';

import { CATEGORY_ACTIONS } from 'configs/types';
import categoryAPI from 'api/category';
import { setLoggerMessage, setLoggerState } from 'app/reducers/loggerReducer';
import { setFileState } from 'app/reducers/fileReducer';



function* categoryUpdateWorker({ categoryId, categoryName, originalFile, onProgress }) {
    //#UPLOAD IMAGE WITH PROGRESS BAR - onProgress - pass to api -callback for do dispatch
    if (categoryId) {
        yield put(setFileState({ status: 'uploading' }));
        const { data } = yield call(categoryAPI.updateCategory, categoryId, categoryName, originalFile, onProgress);
        yield put(setFileState({ status: 'done', isDisabled: true }));

        if (data.status === "success") {
            yield put(setLoggerState({ open: true, status: "success" }));
            yield put(setLoggerMessage("The update has been successfully"));

        }

    }
    try {
    } catch (error) {
        yield put(setLoggerState({ open: true, status: "error" }));
        yield put(setLoggerMessage(error.message));
    }
}

function* categoryUpdateWatcher() {
    yield takeEvery(CATEGORY_ACTIONS.UPDATE_CATEGORY_SAGA, categoryUpdateWorker)
}
export default categoryUpdateWatcher;