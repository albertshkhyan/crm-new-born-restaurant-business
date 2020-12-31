import { LOGGER_ACTIONS, ORDER_ACTIONS } from "configs/types";
import createReducer from "helpers/createReducer";

const initialState = {
    // date: null,
    // order: null,//id order
    // userId: null,
    list: [],//{name, quantity, cost},
    totalPrice: 0
}

/**   
 * ADD_ORDER
 * REMOVE_ORDER
 * CLEAR_ORDER
 */

const orderReducer = createReducer(initialState, {
    [ORDER_ACTIONS.ADD_ORDER](state, { payload }) {
        return {
            ...state,
            list: [...state.list, payload]
        }
    },
    [ORDER_ACTIONS.REMOVE_ORDER](state, { payload }) {
        return {
            ...state,
            list: [
                ...state.list.filter((item) => item._id !== payload._id)
            ]
        }
    },

});

export const addOrder = (payload) => ({ type: ORDER_ACTIONS.ADD_ORDER, payload });
export const removeOrder = (payload) => ({ type: ORDER_ACTIONS.REMOVE_ORDER, payload });

export default orderReducer;