import { createSelector } from "reselect";

export const getPreviewFromOriginalFile = (state) => state.file.originalFile && state.file.originalFile.preview

// export const getLoggerDataSelector = createSelector(
//     getLoggerData,
//     logger => logger
// ); 


const getOriginalFile = (state) => state.file.originalFile;
export const getOriginalFileSelector = createSelector(
    getOriginalFile,
    data => data ? data : {}
);

// getPreviewFromOriginalFile