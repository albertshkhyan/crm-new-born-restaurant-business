
import { call, takeEvery, put } from 'redux-saga/effects';

import { CATEGORY_ACTIONS } from 'configs/types';
import categoryAPI from 'api/category';
import { setLoggerMessage, setLoggerState } from 'app/reducers/loggerReducer';
import { setCategoryItem } from 'app/reducers/categoryReducers';
import { setFileState } from 'app/reducers/fileReducer';

function* createCategoryWorker(action) {
    try {
        yield put(setFileState({ status: "uploading" }))
        const { data } = yield call(categoryAPI.createCategory, action.categoryName, action.selectedFile);
        yield put(setCategoryItem(data.data))
        yield put(setFileState({ status: "done", isDisabled: true }));
        if (data.status === "success") {
            yield put(setLoggerState({ open: true, status: "success" }));
            yield put(setLoggerMessage("The create has been successfully"));

        }


    } catch (error) {
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage(error.message));
    }
}

function* createCategoryWatcher() {
    yield takeEvery(CATEGORY_ACTIONS.CREATE_CATEGORY_SAGA, createCategoryWorker)
}
export default createCategoryWatcher;