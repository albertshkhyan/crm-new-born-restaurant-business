import { createSelector } from "reselect";

const getLoggerData = (state) => state.logger

export const getLoggerDataSelector = createSelector(
    getLoggerData,
    logger => logger
); 