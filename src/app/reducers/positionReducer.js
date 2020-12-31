import createReducer from "helpers/createReducer";
import { POSITION_ACTIONS } from 'configs/types';

const initialState = {
    isLoading: true,
    positions: [],
    positionItem: null
}

//this reducer also for  register 
const positionReducer = createReducer(initialState, {//create reducer which initial state is firt argument
    [POSITION_ACTIONS.SET_ALL_POSITIONS_DATA](state, { payload }) {//this function will call inside createReducer, if match action type
        return {
            ...state,
            positions: [...payload]
        }
    },
    [POSITION_ACTIONS.SET_POSITION_IS_LOADING](state, { payload }) {
        return {
            ...state,
            isLoading: payload
        }
    },
    [POSITION_ACTIONS.SET_POSITION_DATA](state, { payload }) {
        return {
            ...state,
            positions: [...state.positions, payload]
        }
    },
    [POSITION_ACTIONS.SET_POSITION_ITEM](state, { payload }) {
        return {
            ...state,
            positionItem: payload
        }
    },
    [POSITION_ACTIONS.UPDATE_POSITION_DATA](state, { payload }) {
        return {
            ...state,
            positions: state.positions.map((item) => {
                if (item._id === payload._id) {
                    return ({
                        ...item,
                        ...payload
                    })
                }
                return item;
            })
        }
    }
});

export const setAllPositionsData = (payload) => ({
    type: POSITION_ACTIONS.SET_ALL_POSITIONS_DATA,
    payload
});
export const setPositionData = (payload) => ({
    type: POSITION_ACTIONS.SET_POSITION_DATA,
    payload
});

export const setPositionIsLoading = (payload) => ({
    type: POSITION_ACTIONS.SET_POSITION_IS_LOADING,
    payload
});
export const setPositionItem = (payload) => ({
    type: POSITION_ACTIONS.SET_POSITION_ITEM,
    payload
});
export const updatePositionData = (payload) => ({
    type: POSITION_ACTIONS.UPDATE_POSITION_DATA,
    payload
});



export default positionReducer;