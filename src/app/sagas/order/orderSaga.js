import { call, takeEvery, put } from "redux-saga/effects";

import { setUserData } from "app/reducers/userReducer";

import { ORDER_ACTIONS } from "configs/types";


import orderAPI from 'api/orders';

function* orderWorker({ orderData }) {
    console.log('orderWorker📞📞📞📞');
    try {
        const { data } = yield call(orderAPI.createOrder, orderData);
        console.log('data ---------- 1', data);
        // yield put(setLoggerState({ isAuthorized: true }));
        // yield put(setUserData(data.data));
    }
    catch (error) {
        console.log('order error -----------', error);
        yield put(setLoggerState({ open: true, status: "error" }));
        yield put(setLoggerMessage(error.message));
    }

}

function* orderWatcher() {
    yield takeEvery(ORDER_ACTIONS.CREATE_ORDER_SAGA, orderWorker);
}

export default orderWatcher;