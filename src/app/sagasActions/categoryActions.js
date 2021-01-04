import { CATEGORY_ACTIONS } from "configs/types";

export const getCategoriesSG = callback => ({
    type: CATEGORY_ACTIONS.GET_ALL_CATEGORIES_SAGA,
    setInPorgress: callback
});

export const getCategoryItemSG = (categoryId, callback) => ({
    type: CATEGORY_ACTIONS.GET_CATEGORY_ITEM_SAGA, categoryId,
    setInPorgress: callback
});


export const createCategorymSG = (categoryName, selectedFile) => ({
    type: CATEGORY_ACTIONS.CREATE_CATEGORY_SAGA, categoryName, selectedFile
});

export const updateCategorySG = (categoryId, categoryName, originalFile, onProgress) => ({ type: CATEGORY_ACTIONS.UPDATE_CATEGORY_SAGA, categoryId, categoryName, originalFile, onProgress });

export const deleteCategorySG = (categoryId, setInProgress, navigateTo) => ({ type: CATEGORY_ACTIONS.DELETE_CATEGORY_SAGA, categoryId, setInProgress, navigateTo });

