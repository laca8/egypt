import {
  LIST_POPULATIONS_FAILED,
  LIST_POPULATIONS_REQUEST,
  LIST_POPULATIONS_SUCCESS,
  LIST_POPULATIONS_MIDDLE_FAILED,
  LIST_POPULATIONS_MIDDLE_REQUEST,
  LIST_POPULATIONS_MIDDLE_SUCCESS,
  LIST_POPULATIONS_AGE_SUCCESS,
  LIST_POPULATIONS_AGE_REQUEST,
  LIST_POPULATIONS_AGE_FAILED,
  LIST_POPULATIONS_TOTAL_FAILED,
  LIST_POPULATIONS_TOTAL_SUCCESS,
  LIST_POPULATIONS_TOTAL_REQUEST,
  LIST_TOTAL_AGE_REQUEST,
  LIST_TOTAL_AGE_SUCCESS,
  LIST_TOTAL_AGE_FAILED,
  LIST_POPULATIONS_FAMILY_REQUEST,
  LIST_POPULATIONS_FAMILY_SUCCESS,
  LIST_POPULATIONS_FAMILY_FAILED,
  ADD_POPULATIONS_MIDDLE_FAILED,
  ADD_POPULATIONS_MIDDLE_REQUEST,
  ADD_POPULATIONS_MIDDLE_SUCCESS,
  ADD_POPULATIONS_AGE_FAILED,
  ADD_POPULATIONS_AGE_REQUEST,
  ADD_POPULATIONS_AGE_SUCCESS,
} from "../../type";
import axios from "axios";
export const listPop = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_REQUEST,
  });
  try {
    const res = await axios.get("/api/population/area");
    dispatch({
      type: LIST_POPULATIONS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listPopMiddle = (city) => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_MIDDLE_REQUEST,
  });
  try {
    const res = await axios.get(`/api/population/total/${city}`);
    console.log(res);
    dispatch({
      type: LIST_POPULATIONS_MIDDLE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_MIDDLE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listPopAgeByCity = (city) => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_AGE_REQUEST,
  });
  try {
    const res = await axios.get(`/api/population/totalAge/${city}`);
    dispatch({
      type: LIST_POPULATIONS_AGE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_AGE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listPopAgeAll = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_AGE_REQUEST,
  });
  try {
    const res = await axios.get(`/api/population/age`);
    dispatch({
      type: LIST_POPULATIONS_AGE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_AGE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listPopTotal = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_TOTAL_REQUEST,
  });
  try {
    const res = await axios.get("/api/population/total");
    dispatch({
      type: LIST_POPULATIONS_TOTAL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_TOTAL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listTotalAge = () => async (dispatch) => {
  dispatch({
    type: LIST_TOTAL_AGE_REQUEST,
  });
  try {
    const res = await axios.get("/api/population/totalAge");
    dispatch({
      type: LIST_TOTAL_AGE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_TOTAL_AGE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listFamilies = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_FAMILY_REQUEST,
  });
  try {
    const res = await axios.get("/api/population/family");
    dispatch({
      type: LIST_POPULATIONS_FAMILY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_FAMILY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addPopMiddle = (data) => async (dispatch) => {
  dispatch({
    type: ADD_POPULATIONS_MIDDLE_REQUEST,
  });
  try {
    const res = await axios.post(`/api/population/middle`, data);
    dispatch({
      type: ADD_POPULATIONS_MIDDLE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_POPULATIONS_MIDDLE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addPopAge = (data) => async (dispatch) => {
  dispatch({
    type: ADD_POPULATIONS_AGE_REQUEST,
  });
  try {
    const res = await axios.post(`/api/population/age`, data);
    dispatch({
      type: ADD_POPULATIONS_AGE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_POPULATIONS_AGE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addPopTotal = (data) => async (dispatch) => {
  dispatch({
    type: ADD_POPULATIONS_MIDDLE_REQUEST,
  });
  try {
    const res = await axios.post(`/api/population/total`, data);
    dispatch({
      type: ADD_POPULATIONS_MIDDLE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_POPULATIONS_MIDDLE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
