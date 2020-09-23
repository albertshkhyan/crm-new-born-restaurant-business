import { USER_ACTIONS } from "./actionTypes";

//this action for switch saga
export const loginAC = (inputData) => ({
    type: USER_ACTIONS.LOGIN_SAGA,
    inputData
});
export const registerAC = (inputData) => ({
    type: USER_ACTIONS.REGISTER_SAGA,
    inputData
});

export const getyMeAC = (token) => ({
    type: USER_ACTIONS.GET_ME_SAGA,
    token
});