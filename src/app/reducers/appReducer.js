import { APP_ACTIONS } from "configs/types";

const initialState = {
    initilized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.IS_INITILIZE: return {
            ...state,
            initilized: action.isInit
        }
        default: return state;
    }
}
export const initilize = (isInit) => {
    return ({ type: APP_ACTIONS.IS_INITILIZE, isInit })
};

export const initilizeApp = (token, profile) => {
    return ({ type: APP_ACTIONS.INITILIZE_APP_SAGA, token, profile })
};


export default appReducer;