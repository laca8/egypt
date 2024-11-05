import axios from "axios";
import {
  LIST_EDU_TEACHER_FAILED,
  LIST_EDU_TEACHER_SUCCESS,
  LIST_EDU_TEACHER_REQUEST,
} from "../../type";
export const totalTeacher = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_TEACHER_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/total/teachers");
    dispatch({
      type: LIST_EDU_TEACHER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_TEACHER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
