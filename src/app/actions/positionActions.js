import { POSITION_ACTIONS } from 'configs/types';

export const getAllPositionsAC = (categoryId, setInPorgress) => ({
    type: POSITION_ACTIONS.GET_ALL_POSITIONS_SAGA,
    categoryId,
    setInPorgress

});
export const createPositionsAC = (newPositionData) => ({
    type: POSITION_ACTIONS.CREATE_POSITIONS_SAGA,
    newPositionData,
});
export const deletePositionsAC = (positionId, categoryId) => ({
    type: POSITION_ACTIONS.DELETE_POSITION_SAGA,
    positionId,
    categoryId
});
export const updatePositionsAC = (positionId, positionBody) => ({
    type: POSITION_ACTIONS.UPDATE_POSITIONS_SAGA,
    positionId,
    positionBody
});
