import { LOGGER_ACTIONS, ORDER_ACTIONS } from "configs/types";
import createReducer from "helpers/createReducer";
import { List } from '@material-ui/core/List';

const initialState = {
    // date: null,
    // order: null,//id order
    // userId: null,
    list: [],//{name, quantity, cost},
    totalPrice: 0,
    orderMessage: ""
}

/**   
 * ADD_ORDER
 * REMOVE_ORDER
 * CLEAR_ORDER
 */

const orderReducer = createReducer(initialState, {
    [ORDER_ACTIONS.ADD_ORDER](state, { payload, orderMessage }) {
        console.log('orderMessage --------------------- 01', orderMessage);
        const candiate = state.list.find(position => position._id === payload._id);
        if (candiate) {
            const copyCandidate = { ...candiate }
            copyCandidate.quantity += payload.quantity;
            return {
                ...state,
                list: state.list.map(item => item._id === payload._id ?
                    { ...item, ...copyCandidate } : item),
                orderMessage: orderMessage + copyCandidate.quantity
            }
        }
        else {

            return {
                ...state,
                list: [...state.list, payload],
                orderMessage: orderMessage + payload.quantity

            }
        }
    },
    [ORDER_ACTIONS.REMOVE_ORDER](state, { payload }) {
        return {
            ...state,
            list: [
                ...state.list.filter((item) => item._id !== payload._id)
            ],

        }
    },
    // [ORDER_ACTIONS.SET_ORDER_MESSAGE](state, { orderMessage }) {
    //     return {
    //         ...state,
    //         orderMessage
    //     }
    // },

});

export const addOrder = (payload, orderMessage) => {
    console.log('addOrder work --------------------- 00', payload);
    return ({ type: ORDER_ACTIONS.ADD_ORDER, payload, orderMessage })
};
export const removeOrder = (payload) => ({ type: ORDER_ACTIONS.REMOVE_ORDER, payload });
export const setOrderMessage = (orderMessage) => ({ type: ORDER_ACTIONS.SET_ORDER_MESSAGE, orderMessage });

export default orderReducer;