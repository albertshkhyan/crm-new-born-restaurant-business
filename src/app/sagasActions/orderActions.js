import { ORDER_ACTIONS } from "configs/types";

export const createOrderSG = callback => ({
    type: ORDER_ACTIONS.CREATE_ORDER_SAGA,
    setInPorgress: callback
});