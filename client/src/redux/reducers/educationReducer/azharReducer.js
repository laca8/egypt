import {
  LIST_EDU_AZHAR_REQUEST,
  LIST_EDU_AZHAR_SUCCESS,
  LIST_EDU_AZHAR_FAILED,
  ADD_AZHAR_FAILED,
  ADD_AZHAR_REQUEST,
  ADD_AZHAR_SUCCESS,
} from "../../type";
const initialState = {
  data: [],
};
export const azharReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_AZHAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_AZHAR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_EDU_AZHAR_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const addAzharReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_AZHAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_AZHAR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_AZHAR_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
