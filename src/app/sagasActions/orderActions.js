import { ORDER_ACTIONS } from "configs/types";

export const createOrderSG = (orderData, setInProgress) => ({
    type: ORDER_ACTIONS.CREATE_ORDER_SAGA,
    orderData, setInProgress
});