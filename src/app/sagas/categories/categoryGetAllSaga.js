
import { call, takeEvery, put } from 'redux-saga/effects';

import { CATEGORY_ACTIONS } from 'configs/types';
import categoryAPI from 'api/category';
import { setLoggerMessage, setLoggerState } from 'app/reducers/loggerReducer';
import { setCategories } from 'app/reducers/categoryReducers';

function* getCategoryWorker(action) {
    try {
        yield action.setInPorgress(true);//setState
        const { data } = yield call(categoryAPI.getAllCategory);
        yield put(setCategories(data))
        yield action.setInPorgress(false);//setState

    } catch (error) {
        yield put(setLoggerState({ error: true }));
        yield put(setLoggerMessage(error.message));
    }
}

function* getCategoryWatcher() {
    yield takeEvery(CATEGORY_ACTIONS.GET_ALL_CATEGORIES_SAGA, getCategoryWorker)
}
export default getCategoryWatcher;