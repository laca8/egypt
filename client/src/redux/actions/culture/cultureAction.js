import {
  LIST_CINEMA_FAILED,
  LIST_CINEMA_REQUEST,
  LIST_CINEMA_SUCCESS,
  LIST_THEATER_FAILED,
  LIST_THEATER_SUCCESS,
  LIST_THEATER_REQUEST,
  ADD_CINEMA_FAILED,
  ADD_CINEMA_REQUEST,
  ADD_CINEMA_SUCCESS,
  ADD_THEATER_FAILED,
  ADD_THEATER_SUCCESS,
  ADD_THEATER_REQUEST,
} from "../../type";
import axios from "axios";
export const listCinema = () => async (dispatch) => {
  dispatch({
    type: LIST_CINEMA_REQUEST,
  });
  try {
    const res = await axios.get("/api/culture/cinema");
    dispatch({
      type: LIST_CINEMA_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_CINEMA_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listTheater = () => async (dispatch) => {
  dispatch({
    type: LIST_THEATER_REQUEST,
  });
  try {
    const res = await axios.get("/api/culture/theater");
    dispatch({
      type: LIST_THEATER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_THEATER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addCinema = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CINEMA_REQUEST,
  });
  try {
    const res = await axios.post("/api/culture/cinema", data);
    dispatch({
      type: ADD_CINEMA_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CINEMA_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addTheater = (data) => async (dispatch) => {
  dispatch({
    type: ADD_THEATER_REQUEST,
  });
  try {
    const res = await axios.post("/api/culture/theater", data);
    dispatch({
      type: ADD_THEATER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_THEATER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
