import { LOGGER_ACTIONS } from "configs/types";
import createReducer from "helpers/createReducer";

const initialState = {
    status: "",//error, warning, info, success
    open: false,
    isAuthorized: false,
    message: '', // Store error data from the backend here
    isLoading: true,// Set this to `true` if You want to show spinner - for local preloader
}

const loggerReducer = createReducer(initialState, {
    [LOGGER_ACTIONS.SET_LOGGER_MESSAGE](state, action) {
        return {
            ...state,
            message: action.message
        }
    },
    [LOGGER_ACTIONS.SET_LOGGER_STATE](state, { payload }) {
        return {
            ...state,
            ...payload
        }
    }
});

export const setLoggerState = (payload) => ({ type: LOGGER_ACTIONS.SET_LOGGER_STATE, payload });//pass object forchange conrete field
export const setLoggerMessage = (message) => ({ type: LOGGER_ACTIONS.SET_LOGGER_MESSAGE, message });

export default loggerReducer;