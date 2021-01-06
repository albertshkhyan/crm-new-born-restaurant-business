export const APP_ACTIONS = {
    IS_INITILIZE: "newborn/app/INITILIZE_SUCCESS",
    INITILIZE_APP_SAGA: "newborn/app/INITILIZE_APP_SAGA"
}

/**
 * name_SAGA - for watcher saga, another for UI
 */


export const LOGGER_ACTIONS = {
    SET_LOGGER_MESSAGE: 'newborn/logger/SET_LOGGER_MESSAGE',
    SET_LOGGER_STATE: 'newborn/logger/SET_LOGGER_STATE',
}


export const USER_ACTIONS = {
    // LOGIN: "newborn/users/LOGIN",//for ui - IN REDUCER
    LOGIN_SAGA: "newborn/users/LOGIN_SAGA",
    REGISTER_SAGA: "newborn/users/REGISTER_SAGA",

    LOGOUT_SAGA: "newborn/users/LOGOUT_SAGA",

    GET_ME_SAGA: "newborn/users/GET_ME_SAGA",

    LOGIN: 'newborn/users/LOGIN',
    SET_USER_DATA: 'newborn/users/SET_USER_DATA',//REGISTER


}


export const POSITION_ACTIONS = {
    GET_ALL_POSITIONS_SAGA: "newborn/position/GET_ALL_POSITIONS_SAGA",
    DELETE_POSITION_SAGA: "newborn/position/DELETE_POSITION_SAGA",
    UPDATE_POSITIONS_SAGA: "newborn/position/UPDATE_POSITIONS_SAGA",
    UPDATE_POSITION_DATA: "newborn/position/UPDATE_POSITION_DATA",
    SET_POSITION_ITEM: "newborn/position/SET_POSITION_ITEM",

    SET_ALL_POSITIONS_DATA: 'newborn/position/SET_POSITIONS_DATA',
    SET_POSITION_DATA: 'newborn/position/SET_POSITION_DATA',
    SET_POSITION_IS_LOADING: 'newborn/position/SET_POSITION_IS_LOADING',



    CREATE_POSITIONS_SAGA: 'newborn/position/CREATE_POSITIONS_SAGA',
}

export const CATEGORY_ACTIONS = {
    GET_ALL_CATEGORIES_SAGA: "newborn/category/GET_ALL_CATEGORIES_SAGA",
    CREATE_CATEGORY_SAGA: "newborn/category/CREATE_CATEGORY_SAGA",
    UPDATE_CATEGORY_SAGA: "newborn/category/UPDATE_CATEGORY_SAGA",
    DELETE_CATEGORY_SAGA: "newborn/category/DELETE_CATEGORY_SAGA",

    GET_CATEGORY_ITEM_SAGA: "newborn/category/GET_CATEGORY_ITEM_SAGA",


    CREATE_CATEGORY: "newborn/category/CREATE_CATEGORY",

    SET_CATEGORIES_DATA: 'newborn/category/SET_CATEGORY_DATA',//REGISTER
    SET_CATEGORY_ITEM: 'newborn/category/SET_CATEGORY_ITEM',

}

export const ORDER_ACTIONS = {
    ADD_ORDER: "newborn/order/ADD_ORDER",
    REMOVE_ORDER: "newborn/order/REMOVE_ORDER",
    CLEAR_ORDER: "newborn/order/CLEAR_ORDER",
    SET_ORDER_TOTAL_PRICE: "newborn/order/SET_ORDER_TOTAL_PRICE",
    CREATE_ORDER_SAGA: "newborn/order/CREATE_ORDER_SAGA",
}

export const FILE_ACTIONS = {
    SET_ORIGINAL_FILE_DATA: 'newborn/file/SET_ORIGINAL_FILE_DATA',
    SET_FILE_DATA: 'newborn/file/SET_FILE_DATA',
    // SET_VISIBLE_EDIT_IMAGE: 'newborn/file/SET_VISIBLE_EDIT_IMAGE',
    SET_PREVIEW_ORIGINAL_FILE_DATA: 'newborn/file/SET_PREVIEW_ORIGINAL_FILE_DATA',
    SET_SHOW_EDIT_MODAL: 'newborn/file/SET_SHOW_EDIT_MODAL',
}