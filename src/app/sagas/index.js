// Effect combinators
import { all } from "redux-saga/effects";


import appInitSaga from './appInitSaga';
import loginSaga from "./auth/loginSaga";
import logoutSaga from './auth/logoutSaga';
import getMeWatcher from './auth/getMeSaga';
import registerSaga from "./auth/registerSaga";
import categoryGetSaga from './categories/categoryGetSaga';
import positionCreateSaga from './positions/positionCreateSaga';
import categoryGetAllSaga from './categories/categoryGetAllSaga';
import categoryCreateSaga from './categories/categoryCreateSaga';
import categoryUpdateSaga from './categories/categoryUpdateSaga';
import categoryDeleteSaga from './categories/categoryDeleteSaga';
import positionGetAllSaga from './positions/positionsGetAllSaga';
import positionDeleteSaga from './positions/positionDeleteSaga';
import positionUpdateSaga from './positions/positionUpdateSaga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        logoutSaga(),
        appInitSaga(),
        getMeWatcher(),
        registerSaga(),
        categoryGetSaga(),
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