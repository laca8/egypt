import {
  LIST_HEALTH_DEATH_FAILED,
  LIST_HEALTH_DEATH_REQUEST,
  LIST_HEALTH_DEATH_SUCCESS,
  ADD_HEALTH_DEATH_FAILED,
  ADD_HEALTH_DEATH_REQUEST,
  ADD_HEALTH_DEATH_SUCCESS,
} from "../../type";
const initialState = {
  data: [],
};
export const listDeathRed = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_HEALTH_DEATH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_HEALTH_DEATH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_HEALTH_DEATH_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const addDeathRed = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_HEALTH_DEATH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_HEALTH_DEATH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_HEALTH_DEATH_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
