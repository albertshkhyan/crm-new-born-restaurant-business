// Effect combinators
import { all } from "redux-saga/effects";

import appInitSaga from './appInitSaga';
// # auth
import loginSaga from "./auth/loginSaga";
import logoutSaga from './auth/logoutSaga';
import getMeWatcher from './auth/getMeSaga';
import registerSaga from "./auth/registerSaga";
//# categories
import categoryGetSaga from './categories/categoryGetSaga';
import categoryGetAllSaga from './categories/categoryGetAllSaga';
import categoryCreateSaga from './categories/categoryCreateSaga';
import categoryUpdateSaga from './categories/categoryUpdateSaga';
import categoryDeleteSaga from './categories/categoryDeleteSaga';
//# positions
import positionCreateSaga from './positions/positionCreateSaga';
import positionGetAllSaga from './positions/positionsGetAllSaga';
import positionDeleteSaga from './positions/positionDeleteSaga';
import positionUpdateSaga from './positions/positionUpdateSaga';
//# orders
import orderCreateSaga from './order/orderCreateSaga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        logoutSaga(),
        appInitSaga(),
        getMeWatcher(),
        registerSaga(),
        categoryGetSaga(),
        orderCreateSaga(),
        categoryGetAllSaga(),
        categoryCreateSaga(),
        categoryUpdateSaga(),
        categoryDeleteSaga(),
        positionGetAllSaga(),
        positionCreateSaga(),
        positionDeleteSaga(),
        positionUpdateSaga(),

    ])
}