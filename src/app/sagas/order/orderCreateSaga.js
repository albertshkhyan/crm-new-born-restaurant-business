import { call, takeEvery, put } from "redux-saga/effects";

import { ORDER_ACTIONS } from "configs/types";


import orderAPI from 'api/orders';
import { setLoggerMessage, setLoggerState } from "app/reducers/loggerReducer";
import { clearOrder } from "app/reducers/orderReducer";

function* createOrderWorker({ orderData }) {
    console.log('orderWorker📞📞📞📞');
    // console.log('orderData -------------------- 000', orderData);
    const copyOrderData = JSON.parse(JSON.stringify(orderData));//deep copy
    let updatedOrderData = copyOrderData.map(item => {
        delete item._id;
        // delete item.__v;//
        return item;
    });
    // console.log('updatedOrderData', updatedOrderData);

    try {
        const data = yield call(orderAPI.createOrder, {
            list: updatedOrderData
        });
        console.log('data ---------- 1', data);
        if (data.status === 201) {
            yield put(setLoggerState({ open: true, status: "success" }));
            yield put(setLoggerMessage(`Order №${data.data.order} has been added.`));
            yield put(clearOrder());
        }
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
    yield takeEvery(ORDER_ACTIONS.CREATE_ORDER_SAGA, createOrderWorker);
}

export default orderWatcher;