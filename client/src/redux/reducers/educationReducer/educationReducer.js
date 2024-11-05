import {
  LIST_EDU_PRE_STU_REQUEST,
  LIST_EDU_PRE_STU_SUCCESS,
  LIST_EDU_PRE_STU_FAILED,
  LIST_EDU_MID_PRE_STU_REQUEST,
  LIST_EDU_MID_PRE_STU_SUCCESS,
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
const initialState = {
  students: [],
};
export const listPreStuReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_PRE_STU_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_PRE_STU_SUCCESS:
      return {
        ...state,
        loading: false,
        students: payload,
      };
    case LIST_EDU_PRE_STU_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listMidPreStuReducer = (state = { studentsMid: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_MID_PRE_STU_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_MID_PRE_STU_SUCCESS:
      return {
        ...state,
        loading: false,
        studentsMid: payload,
      };
    case LIST_EDU_MID_PRE_STU_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

//class
export const listClassesReducer = (state = { classes: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: payload,
      };
    case LIST_EDU_CLASS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listClassesMidReducer = (state = { classes: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_MID_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_MID_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: payload,
      };
    case LIST_EDU_MID_CLASS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

//cschool
export const listSchoolReducer = (state = { schools: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_SCHOOL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_SCHOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        schools: payload,
      };
    case LIST_EDU_SCHOOL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listScoolMidReducer = (state = { schools: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_MID_SCHOOL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_MID_SCHOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        schools: payload,
      };
    case LIST_EDU_MID_SCHOOL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

//add students
export const addStudentsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_STUDENTS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
//add classes
export const addClassesReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CLASSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_CLASSES_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
//add schools
export const addSchoolsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SCHOOLS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_SCHOOLS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_SCHOOLS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
//add teacher
export const addTeacherReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SCHOOLS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_SCHOOLS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_SCHOOLS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
