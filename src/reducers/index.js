import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loggerReducer from "./loggerReducer";

const rootReducer = combineReducers({
    users: userReducer,
    logger: loggerReducer
});

export default rootReducer;