import { createSelector } from "reselect";

const getCategories = (state) => state.category.categories;
export const getCategoryDataSelector = createSelector(
    getCategories,
    data => data
);

const getCategoryItem = (state) => state.category.categoryItem;
export const getCategoryItemSelector = createSelector(
    getCategoryItem,
    data => data ? data : {}
);

export const getCategoryIdSelector = createSelector(
    getCategoryItem,
    data => data ? data._id : {}
); 