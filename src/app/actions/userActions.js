import { USER_ACTIONS } from "configs/types";

//this action for switch saga
export const loginAC = (inputData) => {
    return ({
        type: USER_ACTIONS.LOGIN_SAGA,
        inputData
    })
};
export const logoutAC = () => {
    return ({
        type: USER_ACTIONS.LOGOUT_SAGA,
    })
};
export const registerAC = (inputData) => ({
    type: USER_ACTIONS.REGISTER_SAGA,
    inputData
});

export const getMeAC = (token) => ({
    type: USER_ACTIONS.GET_ME_SAGA,
    token
});