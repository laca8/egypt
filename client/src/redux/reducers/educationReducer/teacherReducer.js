import {
  LIST_EDU_TEACHER_FAILED,
  LIST_EDU_TEACHER_SUCCESS,
  LIST_EDU_TEACHER_REQUEST,
} from "../../type";
export const teachersReducer = (state = { teachers: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_TEACHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_TEACHER_SUCCESS:
      return {
        ...state,
        loading: false,
        teachers: payload,
      };
    case LIST_EDU_TEACHER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
