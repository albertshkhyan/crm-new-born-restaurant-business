import { createSelector } from "reselect";


const getProfileData = (state) => state.users.data

export const getProfileDataSelector = createSelector(
    getProfileData,
    data => data
); 