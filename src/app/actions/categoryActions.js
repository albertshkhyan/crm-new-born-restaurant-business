import { CATEGORY_ACTIONS } from "configs/types";

export const getCategoriesAC = callback => ({
    type: CATEGORY_ACTIONS.GET_ALL_CATEGORIES_SAGA,
    setInPorgress: callback
});

export const getCategoryItemAC = (categoryId, callback) => ({
    type: CATEGORY_ACTIONS.GET_CATEGORY_ITEM_SAGA, categoryId,
    setInPorgress: callback
});


export const createCategorymAC = (categoryName, selectedFile) => ({
    type: CATEGORY_ACTIONS.CREATE_CATEGORY_SAGA, categoryName, selectedFile
});

export const updateCategoryAC = (categoryId, categoryName, originalFile, onProgress) => ({ type: CATEGORY_ACTIONS.UPDATE_CATEGORY_SAGA, categoryId, categoryName, originalFile, onProgress });

export const deleteCategoryAC = (categoryId, setInProgress, navigateTo) => ({ type: CATEGORY_ACTIONS.DELETE_CATEGORY_SAGA, categoryId, setInProgress, navigateTo });

