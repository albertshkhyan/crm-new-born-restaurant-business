import createReducer from "helpers/createReducer";

/**
 * SET_LOGGER_STATE - auth or not, have error or not, 
 */

// Action Types
export const LOGGER_ACTIONS = {
    SET_LOGGER_MESSAGE: 'newborn/logger/SET_LOGGER_MESSAGE',
    SET_LOGGER_STATE: 'newborn/logger/SET_LOGGER_STATE',
}

const initialState = {
    // processing: false,
    isAuthorized: false,
    error: false, 
    message: '', // Store error data from the backend here
    isLoading: false,// Set this to `true` if You want to show spinner
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