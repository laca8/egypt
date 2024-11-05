import {
  LIST_HEALTH_DEATH_FAILED,
  LIST_HEALTH_DEATH_REQUEST,
  LIST_HEALTH_DEATH_SUCCESS,
  ADD_HEALTH_DEATH_FAILED,
  ADD_HEALTH_DEATH_REQUEST,
  ADD_HEALTH_DEATH_SUCCESS,
} from "../../type";
import axios from "axios";
export const listDeathMotherPlace = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/mother-place");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listDeathMotherResidence = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/mother-residence");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listDeathKidsUnder28days = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/kids/under28");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listDeathChildsUnder28days = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/childs/under28");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listDeathKidsUnder5years = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/kids/under5years");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listDeathKidsUnder1year = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/kids/under1years");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listDeathKidsUnder7days = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/kids/under7days");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listDeathKidsFrom1to5years = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/kids/from1to5years");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listDeathKidsRate = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/kids/rate");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listFemaleRate = () => async (dispatch) => {
  dispatch({
    type: LIST_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/female/rate");
    dispatch({
      type: LIST_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addDeathMotherPlace = (data) => async (dispatch) => {
  dispatch({
    type: ADD_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.post("/api/health/death/mother-place", data);
    dispatch({
      type: ADD_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addDeathMotherResidence = (data) => async (dispatch) => {
  dispatch({
    type: ADD_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.post("/api/health/death/mother-residence", data);
    dispatch({
      type: ADD_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addDeathKidsUnder28days = (data) => async (dispatch) => {
  dispatch({
    type: ADD_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.post("/api/health/death/kids/under28", data);
    dispatch({
      type: ADD_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addDeathChildsUnder28days = (data) => async (dispatch) => {
  dispatch({
    type: ADD_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.get("/api/health/death/childs/under28", data);
    dispatch({
      type: ADD_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addDeathKidsUnder5years = (data) => async (dispatch) => {
  dispatch({
    type: ADD_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.post("/api/health/death/kids/under5years", data);
    dispatch({
      type: ADD_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addDeathKidsUnder1year = (data) => async (dispatch) => {
  dispatch({
    type: ADD_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.post("/api/health/death/kids/under1years", data);
    dispatch({
      type: ADD_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addDeathKidsUnder7days = (data) => async (dispatch) => {
  dispatch({
    type: ADD_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.post("/api/health/death/kids/under7days", data);
    dispatch({
      type: ADD_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addDeathKidsFrom1to5years = (data) => async (dispatch) => {
  dispatch({
    type: ADD_HEALTH_DEATH_REQUEST,
  });
  try {
    const res = await axios.post("/api/health/death/kids/from1to5years", data);
    dispatch({
      type: ADD_HEALTH_DEATH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_HEALTH_DEATH_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
