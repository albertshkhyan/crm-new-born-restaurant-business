
import { call, takeEvery, put } from 'redux-saga/effects';

import { CATEGORY_ACTIONS } from 'configs/types';
import categoryAPI from 'api/category';
import { setLoggerMessage, setLoggerState } from 'app/reducers/loggerReducer';
import { setCategoryItem } from 'app/reducers/categoryReducers';
import { setFileState } from 'app/reducers/fileReducer';



function* categoryGetSWorker(action) {
    try {
        yield action.setInPorgress(true)

        const { data } = yield call(categoryAPI.getCategoryById, action.categoryId);
        yield put(setCategoryItem(data));

        if (data.image) {
            yield put(setFileState({ preview: data.image.imageSrc }));//when click on category row (go Edit Category page), we take image of that category and put it in fileReducer ?
        }
        yield action.setInPorgress(false);

    } catch (error) {
        yield put(setLoggerState({ error: true, open: true, status: "error" }));
        yield put(setLoggerMessage(error.message));
    }
}

function* getCategoryWatcher() {
    yield takeEvery(CATEGORY_ACTIONS.GET_CATEGORY_ITEM_SAGA, categoryGetSWorker)
}
export default getCategoryWatcher;