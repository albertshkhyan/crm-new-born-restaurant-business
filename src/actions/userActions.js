import { USER_ACTIONS } from "./actionTypes";

//this action for switch saga
export const loginAC = (inputData) => {
    console.log('loginAC');
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

export const getyMeAC = (token) => ({
    type: USER_ACTIONS.GET_ME_SAGA,
    token
});