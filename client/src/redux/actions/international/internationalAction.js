import {
  LIST_INTERNATIONAL_FAILED,
  LIST_INTERNATIONAL_REQUEST,
  LIST_INTERNATIONAL_SUCCESS,
  LIST_INTERNATIONAL2_SUCCESS,
  LIST_INTERNATIONAL2_REQUEST,
  LIST_INTERNATIONAL2_FAILED,
  LIST_INTERNATIONAL_DHS_CHILD_FAILED,
  LIST_INTERNATIONAL_DHS_CHILD_REQUEST,
  LIST_INTERNATIONAL_DHS_CHILD_SUCCESS,
  LIST_INTERNATIONAL_DHS_FGM_FAILED,
  LIST_INTERNATIONAL_DHS_FGM_REQUEST,
  LIST_INTERNATIONAL_DHS_FGM_SUCCESS,
  LIST_INTERNATIONAL_DHS_PHYSICAL_FAILED,
  LIST_INTERNATIONAL_DHS_PHYSICAL_REQUEST,
  LIST_INTERNATIONAL_DHS_PHYSICAL_SUCCESS,
  LIST_INTERNATIONAL_DHS_WOMAN_FAILED,
  LIST_INTERNATIONAL_DHS_WOMAN_SUCCESS,
  LIST_INTERNATIONAL_DHS_WOMAN_REQUEST,
  LIST_INTERNATIONAL_DEMOGRAPHY_REQUEST,
  LIST_INTERNATIONAL_DEMOGRAPHY_SUCCESS,
  LIST_INTERNATIONAL_DEMOGRAPHY_FAILED,
  LIST_INTERNATIONAL_GENDER_REQUEST,
  LIST_INTERNATIONAL_GENDER_SUCCESS,
  LIST_INTERNATIONAL_GENDER_FAILED,
  LIST_INTERNATIONAL_ECONOMIC_REQUEST,
  LIST_INTERNATIONAL_ECONOMIC_SUCCESS,
  LIST_INTERNATIONAL_ECONOMIC_FAILED,
  LIST_INTERNATIONAL_EDUCATION_REQUEST,
  LIST_INTERNATIONAL_EDUCATION_SUCCESS,
  LIST_INTERNATIONAL_EDUCATION_FAILED,
  ADD_INTERNATIONAL_FAILED,
  ADD_INTERNATIONAL_REQUEST,
  ADD_INTERNATIONAL_SUCCESS,
  ADD_INTERNATIONAL_DEMOGRAPHY_REQUEST,
  ADD_INTERNATIONAL_DEMOGRAPHY_SUCCESS,
  ADD_INTERNATIONAL_DEMOGRAPHY_FAILED,
  ADD_INTERNATIONAL_GENDER_REQUEST,
  ADD_INTERNATIONAL_GENDER_SUCCESS,
  ADD_INTERNATIONAL_GENDER_FAILED,
  ADD_INTERNATIONAL_ECONOMIC_REQUEST,
  ADD_INTERNATIONAL_ECONOMIC_SUCCESS,
  ADD_INTERNATIONAL_ECONOMIC_FAILED,
  ADD_INTERNATIONAL_EDUCATION_REQUEST,
  ADD_INTERNATIONAL_EDUCATION_SUCCESS,
  ADD_INTERNATIONAL_EDUCATION_FAILED,
  //add dhs
  ADD_INTERNATIONAL_DHS_PHYSICAL_FAILED,
  ADD_INTERNATIONAL_DHS_CHILD_REQUEST,
  ADD_INTERNATIONAL_DHS_CHILD_FAILED,
  ADD_INTERNATIONAL_DHS_CHILD_SUCCESS,
  ADD_INTERNATIONAL_DHS_FGM_FAILED,
  ADD_INTERNATIONAL_DHS_FGM_REQUEST,
  ADD_INTERNATIONAL_DHS_FGM_SUCCESS,
  ADD_INTERNATIONAL_DHS_PHYSICAL_REQUEST,
  ADD_INTERNATIONAL_DHS_PHYSICAL_SUCCESS,
  ADD_INTERNATIONAL_DHS_WOMAN_FAILED,
  ADD_INTERNATIONAL_DHS_WOMAN_REQUEST,
  ADD_INTERNATIONAL_DHS_WOMAN_SUCCESS,
  //world & un
  ADD_WORLD_FAILED,
  ADD_WORLD_REQUEST,
  ADD_WORLD_SUCCESS,
} from "../../type";
import axios from "axios";
export const listUnicefData = (indicator) => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/unicef");
    let filteredData;
    if (indicator == "Choose Indicator") {
      filteredData = res.data;
    } else if (indicator !== "Choose Indicator") {
      filteredData = res.data.filter((x) => x.Indicator == indicator);
    }
    dispatch({
      type: LIST_INTERNATIONAL_SUCCESS,
      payload: filteredData,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listUnicef2Data = () => async (dispatch) => {
  {
    /* dispatch({
    type: LIST_INTERNATIONAL2_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/unicef2");
    dispatch({
      type: LIST_INTERNATIONAL2_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL2_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }*/
  }
};

export const listWoman = () => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_DHS_WOMAN_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/dhs/woman");
    dispatch({
      type: LIST_INTERNATIONAL_DHS_WOMAN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_DHS_WOMAN_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listChild = () => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_DHS_CHILD_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/dhs/child");
    dispatch({
      type: LIST_INTERNATIONAL_DHS_CHILD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_DHS_CHILD_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listFgm = () => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_DHS_FGM_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/dhs/fgm");
    dispatch({
      type: LIST_INTERNATIONAL_DHS_FGM_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_DHS_FGM_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listPhysical = () => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_DHS_PHYSICAL_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/dhs/physical");
    dispatch({
      type: LIST_INTERNATIONAL_DHS_PHYSICAL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_DHS_PHYSICAL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listUnicefDemography = (indicator) => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_DEMOGRAPHY_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/unicef/demography");
    let filteredData;
    if (indicator == "Choose Indicator") {
      filteredData = res.data;
    } else if (indicator !== "Choose Indicator") {
      filteredData = res.data.filter((x) => x.Indicator == indicator);
    }
    dispatch({
      type: LIST_INTERNATIONAL_DEMOGRAPHY_SUCCESS,
      payload: filteredData,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_DEMOGRAPHY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listUnicefGender = (indicator) => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_GENDER_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/unicef/gender");
    let filteredData;
    if (indicator == "Choose Indicator") {
      filteredData = res.data;
    } else if (indicator !== "Choose Indicator") {
      filteredData = res.data.filter((x) => x.Indicator == indicator);
    }

    dispatch({
      type: LIST_INTERNATIONAL_GENDER_SUCCESS,
      payload: filteredData,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_GENDER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listUnicefEducation = (indicator) => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_EDUCATION_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/unicef/education");
    let filteredData;
    if (indicator == "Choose Indicator") {
      filteredData = res.data;
    } else if (indicator !== "Choose Indicator") {
      filteredData = res.data.filter((x) => x.Indicator == indicator);
    }
    dispatch({
      type: LIST_INTERNATIONAL_EDUCATION_SUCCESS,
      payload: filteredData,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_EDUCATION_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listUnicefEconomic = (indicator) => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_ECONOMIC_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/unicef/economic");
    let filteredData;
    if (indicator == "Choose Indicator") {
      filteredData = res.data;
    } else if (indicator !== "Choose Indicator") {
      filteredData = res.data.filter((x) => x.Indicator == indicator);
    }
    dispatch({
      type: LIST_INTERNATIONAL_ECONOMIC_SUCCESS,
      payload: filteredData,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_ECONOMIC_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listworldBank = (indicator) => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/world/bank");
    let filteredData;
    if (indicator == "Choose Indicator") {
      filteredData = res.data;
    } else if (indicator !== "Choose Indicator") {
      filteredData = res.data.filter((x) => x.Indicator == indicator);
    }
    dispatch({
      type: LIST_INTERNATIONAL_SUCCESS,
      payload: filteredData,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listUn = () => async (dispatch) => {
  dispatch({
    type: LIST_INTERNATIONAL_REQUEST,
  });
  try {
    const res = await axios.get("/api/international/un");

    dispatch({
      type: LIST_INTERNATIONAL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_INTERNATIONAL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
//add unicef
export const addUnicefData = (data) => async (dispatch) => {
  dispatch({
    type: ADD_INTERNATIONAL_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/unicef", data);

    dispatch({
      type: ADD_INTERNATIONAL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_INTERNATIONAL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addUnicefDemography = (data) => async (dispatch) => {
  dispatch({
    type: ADD_INTERNATIONAL_DEMOGRAPHY_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/unicef/demography", data);

    dispatch({
      type: ADD_INTERNATIONAL_DEMOGRAPHY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_INTERNATIONAL_DEMOGRAPHY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addUnicefGender = (data) => async (dispatch) => {
  dispatch({
    type: ADD_INTERNATIONAL_GENDER_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/unicef/gender", data);

    dispatch({
      type: ADD_INTERNATIONAL_GENDER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_INTERNATIONAL_GENDER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addUnicefEducation = (data) => async (dispatch) => {
  dispatch({
    type: ADD_INTERNATIONAL_EDUCATION_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/unicef/education", data);

    dispatch({
      type: ADD_INTERNATIONAL_EDUCATION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_INTERNATIONAL_EDUCATION_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addUnicefEconomic = (data) => async (dispatch) => {
  dispatch({
    type: ADD_INTERNATIONAL_ECONOMIC_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/unicef/economic", data);

    dispatch({
      type: ADD_INTERNATIONAL_ECONOMIC_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_INTERNATIONAL_ECONOMIC_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
//add dhs

export const addWoman = (data) => async (dispatch) => {
  dispatch({
    type: ADD_INTERNATIONAL_DHS_WOMAN_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/dhs/woman", data);
    dispatch({
      type: ADD_INTERNATIONAL_DHS_WOMAN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_INTERNATIONAL_DHS_WOMAN_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addChild = (data) => async (dispatch) => {
  dispatch({
    type: ADD_INTERNATIONAL_DHS_CHILD_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/dhs/child", data);
    dispatch({
      type: ADD_INTERNATIONAL_DHS_CHILD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_INTERNATIONAL_DHS_CHILD_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addFgm = (data) => async (dispatch) => {
  dispatch({
    type: ADD_INTERNATIONAL_DHS_FGM_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/dhs/fgm", data);
    dispatch({
      type: ADD_INTERNATIONAL_DHS_FGM_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_INTERNATIONAL_DHS_FGM_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addPhysical = (data) => async (dispatch) => {
  dispatch({
    type: ADD_INTERNATIONAL_DHS_PHYSICAL_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/dhs/physical", data);
    dispatch({
      type: ADD_INTERNATIONAL_DHS_PHYSICAL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_INTERNATIONAL_DHS_PHYSICAL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addWorldBank = (data) => async (dispatch) => {
  dispatch({
    type: ADD_WORLD_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/world/bank", data);
    dispatch({
      type: ADD_WORLD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_WORLD_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addUn = (data) => async (dispatch) => {
  dispatch({
    type: ADD_WORLD_REQUEST,
  });
  try {
    const res = await axios.post("/api/international/un", data);
    dispatch({
      type: ADD_WORLD_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_WORLD_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
