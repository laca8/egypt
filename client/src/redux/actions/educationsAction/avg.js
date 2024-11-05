import axios from "axios";
import {
  LIST_EDU_AVG_REQUEST,
  LIST_EDU_AVG_SUCCESS,
  LIST_EDU_AVG_FAILED,
} from "../../type";
export const avgGirls = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AVG_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/precentage/girls");
    dispatch({
      type: LIST_EDU_AVG_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AVG_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const avgSchools = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AVG_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/precentage/schools");
    dispatch({
      type: LIST_EDU_AVG_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AVG_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const avgClasses = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AVG_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/precentage/classes");
    dispatch({
      type: LIST_EDU_AVG_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AVG_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const avgTeachers = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AVG_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/precentage/teachers");
    dispatch({
      type: LIST_EDU_AVG_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AVG_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
