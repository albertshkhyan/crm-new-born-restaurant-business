import { POSITION_ACTIONS } from 'configs/types';

export const getAllPositionsSG = (categoryId, setInPorgress) => ({
    type: POSITION_ACTIONS.GET_ALL_POSITIONS_SAGA,
    categoryId,
    setInPorgress

});
export const createPositionsSG = (newPositionData) => ({
    type: POSITION_ACTIONS.CREATE_POSITIONS_SAGA,
    newPositionData,
});
export const deletePositionsSG = (positionId, categoryId) => ({
    type: POSITION_ACTIONS.DELETE_POSITION_SAGA,
    positionId,
    categoryId
});
export const updatePositionsSG = (positionId, positionBody) => ({
    type: POSITION_ACTIONS.UPDATE_POSITIONS_SAGA,
    positionId,
    positionBody
});
