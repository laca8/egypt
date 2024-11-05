import {
  LIST_SPORTS_CLUBS_FAILED,
  LIST_SPORTS_CLUBS_REQUEST,
  LIST_SPORTS_CLUBS_SUCCESS,
  LIST_SPORTS_COUNCIL_FAILED,
  LIST_SPORTS_COUNCIL_REQUEST,
  LIST_SPORTS_COUNCIL_SUCCESS,
  ADD_SPORTS_CLUBS_FAILED,
  ADD_SPORTS_CLUBS_REQUEST,
  ADD_SPORTS_CLUBS_SUCCESS,
  ADD_SPORTS_COUNCIL_FAILED,
  ADD_SPORTS_COUNCIL_REQUEST,
  ADD_SPORTS_COUNCIL_SUCCESS,
} from "../../type";
import axios from "axios";
export const listClubs = () => async (dispatch) => {
  dispatch({
    type: LIST_SPORTS_CLUBS_REQUEST,
  });
  try {
    const res = await axios.get("/api/sports/clubs");
    dispatch({
      type: LIST_SPORTS_CLUBS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_SPORTS_CLUBS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listCouncil = () => async (dispatch) => {
  dispatch({
    type: LIST_SPORTS_COUNCIL_REQUEST,
  });
  try {
    const res = await axios.get("/api/sports/council");
    dispatch({
      type: LIST_SPORTS_COUNCIL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_SPORTS_COUNCIL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addClubs = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SPORTS_CLUBS_REQUEST,
  });
  try {
    const res = await axios.post("/api/sports/clubs", data);
    dispatch({
      type: ADD_SPORTS_CLUBS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SPORTS_CLUBS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addCouncil = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SPORTS_COUNCIL_REQUEST,
  });
  try {
    const res = await axios.post("/api/sports/council", data);
    dispatch({
      type: ADD_SPORTS_COUNCIL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SPORTS_COUNCIL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
