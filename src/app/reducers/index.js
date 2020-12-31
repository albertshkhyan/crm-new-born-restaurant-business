import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'


import appReducer from './appReducer';
import userReducer from "./userReducer";
import fileReducer from './fileReducer';
import loggerReducer from "./loggerReducer";
import positionReducer from './positionReducer';
import categoryReducer from "./categoryReducers";
import orderReducer from "./orderReducer";



const rootReducer = combineReducers({
    app: appReducer,
    file: fileReducer,
    users: userReducer,
    order: orderReducer,
    logger: loggerReducer,
    routing: routerReducer,
    category: categoryReducer,
    positions: positionReducer,
});

export default rootReducer;