// Effect combinators
import { all } from "redux-saga/effects";

import loginSaga from "./loginSaga";
import registerSaga from "./registerSaga";
import getMeWatcher from './getMeSaga';
import logoutSaga from './logoutSaga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        getMeWatcher(),
        registerSaga(),
        logoutSaga()
    ])
}