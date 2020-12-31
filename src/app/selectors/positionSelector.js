
import { createSelector } from "reselect";


const getAllPositions = (state) => state.positions.positions

export const getAllPositionsDataSelector = createSelector(
    getAllPositions,
    positions => positions
);

