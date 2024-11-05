import {
  LIST_EDU_PRE_STU_REQUEST,
  LIST_EDU_PRE_STU_FAILED,
  LIST_EDU_PRE_STU_SUCCESS,
  LIST_EDU_MID_PRE_STU_SUCCESS,
  LIST_EDU_MID_PRE_STU_REQUEST,
  LIST_EDU_MID_PRE_STU_FAILED,
  LIST_EDU_CLASS_FAILED,
  LIST_EDU_CLASS_REQUEST,
  LIST_EDU_CLASS_SUCCESS,
  LIST_EDU_MID_CLASS_REQUEST,
  LIST_EDU_MID_CLASS_SUCCESS,
  LIST_EDU_MID_CLASS_FAILED,
  LIST_EDU_SCHOOL_FAILED,
  LIST_EDU_SCHOOL_REQUEST,
  LIST_EDU_SCHOOL_SUCCESS,
  LIST_EDU_MID_SCHOOL_REQUEST,
  LIST_EDU_MID_SCHOOL_SUCCESS,
  LIST_EDU_MID_SCHOOL_FAILED,
  ADD_STUDENTS_FAILED,
  ADD_STUDENTS_REQUEST,
  ADD_STUDENTS_SUCCESS,
  ADD_CLASSES_FAILED,
  ADD_CLASSES_REQUEST,
  ADD_CLASSES_SUCCESS,
  ADD_SCHOOLS_FAILED,
  ADD_SCHOOLS_REQUEST,
  ADD_SCHOOLS_SUCCESS,
  ADD_TEACHER_FAILED,
  ADD_TEACHER_REQUEST,
  ADD_TEACHER_SUCCESS,
} from "../../type";
import axios from "axios";
export const studentsPrePrimary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/preprimary/stu");
    dispatch({
      type: LIST_EDU_PRE_STU_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsMidPrePrimary = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/preprimary/stu/${city}`);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsPrimary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/primary/stu");
    dispatch({
      type: LIST_EDU_PRE_STU_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsMidPriPrimary = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/primary/stu/${city}`);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsSecondary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/secondary/stu");
    dispatch({
      type: LIST_EDU_PRE_STU_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsMidSecondary = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/secondary/stu/${city}`);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsPrivate = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/private/stu");
    dispatch({
      type: LIST_EDU_PRE_STU_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsMidPrivate = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/private/stu/${city}`);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsCommunity = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/community/stu");
    dispatch({
      type: LIST_EDU_PRE_STU_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsMidCommunity = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/community/stu/${city}`);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsArg = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/agri/stu");
    dispatch({
      type: LIST_EDU_PRE_STU_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsMidArg = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/agri/stu/${city}`);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsHigh = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/high/stu");
    dispatch({
      type: LIST_EDU_PRE_STU_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsMidHigh = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/high/stu/${city}`);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsInd = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/ind/stu");
    dispatch({
      type: LIST_EDU_PRE_STU_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsMidInd = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/ind/stu/${city}`);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsComm = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/comm/stu");
    dispatch({
      type: LIST_EDU_PRE_STU_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const studentsMidComm = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_PRE_STU_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/comm/stu/${city}`);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_PRE_STU_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

//class
export const classesPrePrimary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/preprimary/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesPrePrimaryMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/preprimary/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesPrimary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/primary/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesPrimaryMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/primary/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesSecondary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/secondary/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesSecondaryMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/secondary/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesHigh = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/high/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesHighMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/high/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesInd = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/ind/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesIndMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/ind/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesHotel = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/hotel/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesHotelMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/hotel/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesAgri = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/agri/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesAgriMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/agri/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesComm = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/comm/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesCommMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/comm/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesCommunity = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/community/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesCommunityMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/community/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesSpecial = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_CLASS_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/special/class");
    dispatch({
      type: LIST_EDU_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const classesSpecialMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_CLASS_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/special/class/${city}`);
    dispatch({
      type: LIST_EDU_MID_CLASS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_CLASS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
//edu/school
export const schoolPrePrimary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/preprimary/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolPrePrimaryMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/preprimary/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolPrimary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/primary/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolPrimaryMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/primary/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolSecondary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/secondary/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolSecondaryMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/secondary/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolHigh = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/high/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolHighMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/high/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const schoolInd = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/ind/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolIndMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/ind/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolCommercial = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/comm/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolCommercialMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/comm/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolHotel = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/hotel/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolHotelMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/hotel/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolAgri = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/agri/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolAgriMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/agri/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolCommunity = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/community/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolCommunityMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/community/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const schoolSpecial = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu/special/school");
    dispatch({
      type: LIST_EDU_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const schoolSpecialMid = (city) => async (dispatch) => {
  dispatch({
    type: LIST_EDU_MID_SCHOOL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu/special/school/${city}`);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_MID_SCHOOL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addStudentsPreprimaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENTS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/preprimary/stu", data);
    dispatch({
      type: ADD_STUDENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_STUDENTS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addStudentsPrimaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENTS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/primary/stu", data);
    dispatch({
      type: ADD_STUDENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_STUDENTS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addStudentsSecondaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENTS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/secondary/stu", data);
    dispatch({
      type: ADD_STUDENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_STUDENTS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addStudentsPrivateAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENTS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/private/stu", data);
    dispatch({
      type: ADD_STUDENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_STUDENTS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addStudentsIndAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENTS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/ind/stu", data);
    dispatch({
      type: ADD_STUDENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_STUDENTS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addStudentsHighAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENTS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/high/stu", data);
    dispatch({
      type: ADD_STUDENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_STUDENTS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addStudentsCommAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENTS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/comm/stu", data);
    dispatch({
      type: ADD_STUDENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_STUDENTS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addStudentsCommunityAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENTS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/community/stu", data);
    dispatch({
      type: ADD_STUDENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_STUDENTS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addStudentsAgriAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_STUDENTS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/agri/stu", data);
    dispatch({
      type: ADD_STUDENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_STUDENTS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addClassesPreprimaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/preprimary/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addClassesPrimaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/primary/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addClassesSecondaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/secondary/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addClassesPrivateAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/private/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addClassesIndAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/ind/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addClassesHighAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/high/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addClassesCommAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/comm/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addClassesCommunityAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/community/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addClassesAgriAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/agri/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addClassesHotelAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CLASSES_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/hotel/class", data);
    dispatch({
      type: ADD_CLASSES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CLASSES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
//add school
export const addSchoolPreprimaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/preprimary/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addSchoolPrimaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/primary/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addSchoolSecondaryAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/secondary/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addSchoolPrivateAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/private/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const addSchoolIndAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/ind/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addSchoolHighAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/high/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addSchoolCommAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/comm/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addSchoolCommunityAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/community/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addSchoolAgriAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/agri/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const addSchoolHotelAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_SCHOOLS_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/hotel/school", data);
    dispatch({
      type: ADD_SCHOOLS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_SCHOOLS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
//add teacher
export const addTeacherAction = (data) => async (dispatch) => {
  dispatch({
    type: ADD_TEACHER_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/edu/total/teachers", data);
    dispatch({
      type: ADD_TEACHER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_TEACHER_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
