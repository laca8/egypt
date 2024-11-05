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
  ADD_POPULATIONS_AGE_REQUEST,
  ADD_POPULATIONS_AGE_FAILED,
  ADD_POPULATIONS_AGE_SUCCESS,
} from "../../type";
const initialState = {
  populations: [],
};
export const listPopReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_POPULATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_POPULATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        populations: payload,
      };
    case LIST_POPULATIONS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listPopMiddleReducer = (state = { popMiddle: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_POPULATIONS_MIDDLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_POPULATIONS_MIDDLE_SUCCESS:
      return {
        ...state,
        loading: false,
        popMiddle: payload,
      };
    case LIST_POPULATIONS_MIDDLE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listPopAgeReducer = (state = { popAge: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_POPULATIONS_AGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_POPULATIONS_AGE_SUCCESS:
      return {
        ...state,
        loading: false,
        popAge: payload,
      };
    case LIST_POPULATIONS_AGE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listPopTotalReducer = (state = { popTotal: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_POPULATIONS_TOTAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_POPULATIONS_TOTAL_SUCCESS:
      return {
        ...state,
        loading: false,
        popTotal: payload,
      };
    case LIST_POPULATIONS_TOTAL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listPopTotalAgeReducer = (state = { popTotalAge: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_TOTAL_AGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_TOTAL_AGE_SUCCESS:
      return {
        ...state,
        loading: false,
        popTotalAge: payload,
      };
    case LIST_TOTAL_AGE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listFamilyReducer = (state = { families: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_POPULATIONS_FAMILY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_POPULATIONS_FAMILY_SUCCESS:
      return {
        ...state,
        loading: false,
        families: payload,
      };
    case LIST_POPULATIONS_FAMILY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
//add population middle
export const addPopMiddleReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POPULATIONS_MIDDLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_POPULATIONS_MIDDLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_POPULATIONS_MIDDLE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
//add age

export const addPopAgeReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POPULATIONS_AGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_POPULATIONS_AGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_POPULATIONS_AGE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
