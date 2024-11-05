import {
  LIST_EDU_AVG_REQUEST,
  LIST_EDU_AVG_SUCCESS,
  LIST_EDU_AVG_FAILED,
} from "../../type";
export const avgReducer = (state = { data: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_AVG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_AVG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_EDU_AVG_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
