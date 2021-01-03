import { createSelector } from "reselect";

const getOrderList = state => state.order.list;

export const getOrderListSelector = createSelector(
    getOrderList,
    order => order
);


