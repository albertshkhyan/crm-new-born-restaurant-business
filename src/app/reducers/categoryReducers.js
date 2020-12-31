import createReducer from "helpers/createReducer";
import { CATEGORY_ACTIONS } from 'configs/types';

// Action Types


const initialState = {
    categoryId: "",
    categories: [], //info of user,
    categoryItem: null
}

//this reducer also for  register 
const categoryReducer = createReducer(initialState, {//create reducer which initial state is firt argument
    [CATEGORY_ACTIONS.SET_CATEGORIES_DATA](state, { payload }) {//this function will call inside createReducer, if match action type
        return {
            ...state,
            categories: [...payload]
        }
    },
    [CATEGORY_ACTIONS.SET_CATEGORY_ITEM](state, { payload }) {
        return {
            ...state,
            categoryItem: payload
        }
    }
});

//action creators
export const setCategories
    = (payload) => {
        return ({
            type: CATEGORY_ACTIONS.SET_CATEGORIES_DATA,
            payload
        })
    }


export const setCategoryItem
    = (payload) => {
        return ({
            type: CATEGORY_ACTIONS.SET_CATEGORY_ITEM,
            payload
        })
    }




export default categoryReducer;