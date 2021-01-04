import { USER_ACTIONS } from "configs/types";

//this action for switch saga
export const loginSG = (inputData) => {
    return ({
        type: USER_ACTIONS.LOGIN_SAGA,
        inputData
    })
};
export const logoutSG = () => {
    return ({
        type: USER_ACTIONS.LOGOUT_SAGA,
    })
};
export const registerSG = (inputData) => ({
    type: USER_ACTIONS.REGISTER_SAGA,
    inputData
});

export const getMeSG = (token) => ({
    type: USER_ACTIONS.GET_ME_SAGA,
    token
});