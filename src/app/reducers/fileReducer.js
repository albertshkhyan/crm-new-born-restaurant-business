import createReducer from "helpers/createReducer";
import { FILE_ACTIONS } from 'configs/types';


const initialState = {
  showEditModal: false,
  originalFile: null,
  fileState: {//stateFileData
    uid: '-1',
    name: 'image.png',
    status: 'done',
    percent: 100,
    isDisabled: true//defaul show disabled button
  }
}

const fileReducer = createReducer(initialState, {
  [FILE_ACTIONS.SET_ORIGINAL_FILE_DATA](state, { payload }) {
    return {
      ...state,
      originalFile: payload
    }
  },
  [FILE_ACTIONS.SET_FILE_DATA](state, { payload }) {
    return ({
      ...state,
      fileState: {
        ...state.fileState,
        ...payload
      }
    })
  },
  [FILE_ACTIONS.SET_SHOW_EDIT_MODAL](state, { payload }) {
    return {
      ...state,
      showEditModal: payload
    }
  },
  [FILE_ACTIONS.SET_CROPPED_IMAGE](state, { payload }) {
    return {
      ...state,
      croppedImage: payload
    }
  },
});

export const setOriginalFileData = (payload) => ({ type: FILE_ACTIONS.SET_ORIGINAL_FILE_DATA, payload });

export const setFileState = (payload) => ({ type: FILE_ACTIONS.SET_FILE_DATA, payload });

export const setShowEditModal = (payload) => {
  return ({ type: FILE_ACTIONS.SET_SHOW_EDIT_MODAL, payload })
};

export default fileReducer; 