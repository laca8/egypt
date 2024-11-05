import axios from "axios";
import {
  LIST_EDU_AZHAR_FAILED,
  LIST_EDU_AZHAR_SUCCESS,
  LIST_EDU_AZHAR_REQUEST,
  ADD_AZHAR_FAILED,
  ADD_AZHAR_SUCCESS,
  ADD_AZHAR_REQUEST,
} from "../../type";
export const listPrimryStuAzhar = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AZHAR_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/azhar/primary");
    dispatch({
      type: LIST_EDU_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listSecondaryStuAzhar = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AZHAR_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/azhar/secondary");
    dispatch({
      type: LIST_EDU_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listHighStuAzhar = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AZHAR_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/azhar/high");
    dispatch({
      type: LIST_EDU_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listKidsStuAzhar = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AZHAR_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/azhar/kids");
    dispatch({
      type: LIST_EDU_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listReadsAzhar = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AZHAR_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/azhar/reads");
    dispatch({
      type: LIST_EDU_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listTeachersAzhar = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AZHAR_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/azhar/teachers");
    dispatch({
      type: LIST_EDU_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listClassesAzhar = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AZHAR_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/azhar/classes");
    dispatch({
      type: LIST_EDU_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listDisabledAzhar = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AZHAR_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/azhar/disabled");
    dispatch({
      type: LIST_EDU_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listIntAzhar = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_AZHAR_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/azhar/inds");
    dispatch({
      type: LIST_EDU_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addAzharAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_AZHAR_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/azhar/primary", data);
    dispatch({
      type: ADD_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addAzharSecondaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_AZHAR_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/azhar/secondary", data);
    dispatch({
      type: ADD_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addAzharHighAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_AZHAR_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/azhar/high", data);
    dispatch({
      type: ADD_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addAzharReadsAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_AZHAR_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/azhar/reads", data);
    dispatch({
      type: ADD_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addAzharTeachersAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_AZHAR_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/azhar/teachers", data);
    dispatch({
      type: ADD_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addAzharClassesAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_AZHAR_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/azhar/classes", data);
    dispatch({
      type: ADD_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addAzharIndsAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_AZHAR_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/azhar/inds", data);
    dispatch({
      type: ADD_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addAzharDisabledAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_AZHAR_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/azhar/disabled", data);
    dispatch({
      type: ADD_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addAzharKidsAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_AZHAR_REQUEST,
  });
  try {
    const res = await axios.post("/api/edu/azhar/kids", data);
    dispatch({
      type: ADD_AZHAR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_AZHAR_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
