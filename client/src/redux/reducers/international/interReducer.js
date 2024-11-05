import {
  LIST_INTERNATIONAL_FAILED,
  LIST_INTERNATIONAL_REQUEST,
  LIST_INTERNATIONAL_SUCCESS,
  LIST_INTERNATIONAL2_FAILED,
  LIST_INTERNATIONAL2_SUCCESS,
  LIST_INTERNATIONAL2_REQUEST,
  LIST_INTERNATIONAL_DHS_CHILD_FAILED,
  LIST_INTERNATIONAL_DHS_CHILD_SUCCESS,
  LIST_INTERNATIONAL_DHS_CHILD_REQUEST,
  LIST_INTERNATIONAL_DHS_WOMAN_FAILED,
  LIST_INTERNATIONAL_DHS_WOMAN_SUCCESS,
  LIST_INTERNATIONAL_DHS_WOMAN_REQUEST,
  LIST_INTERNATIONAL_DHS_FGM_FAILED,
  LIST_INTERNATIONAL_DHS_FGM_SUCCESS,
  LIST_INTERNATIONAL_DHS_FGM_REQUEST,
  LIST_INTERNATIONAL_DHS_PHYSICAL_FAILED,
  LIST_INTERNATIONAL_DHS_PHYSICAL_SUCCESS,
  LIST_INTERNATIONAL_DHS_PHYSICAL_REQUEST,
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
  //add
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
  ADD_INTERNATIONAL_FAILED,
  ADD_INTERNATIONAL_REQUEST,
  ADD_INTERNATIONAL_SUCCESS,
  //add dhs
  ADD_INTERNATIONAL_DHS_CHILD_FAILED,
  ADD_INTERNATIONAL_DHS_CHILD_SUCCESS,
  ADD_INTERNATIONAL_DHS_CHILD_REQUEST,
  ADD_INTERNATIONAL_DHS_WOMAN_FAILED,
  ADD_INTERNATIONAL_DHS_WOMAN_SUCCESS,
  ADD_INTERNATIONAL_DHS_WOMAN_REQUEST,
  ADD_INTERNATIONAL_DHS_FGM_FAILED,
  ADD_INTERNATIONAL_DHS_FGM_SUCCESS,
  ADD_INTERNATIONAL_DHS_FGM_REQUEST,
  ADD_INTERNATIONAL_DHS_PHYSICAL_FAILED,
  ADD_INTERNATIONAL_DHS_PHYSICAL_SUCCESS,
  ADD_INTERNATIONAL_DHS_PHYSICAL_REQUEST,
  //world & un
  ADD_WORLD_REQUEST,
  ADD_WORLD_FAILED,
  ADD_WORLD_SUCCESS,
} from "../../type";
const initialState = {
  data: [],
};
export const internationalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const international2Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL2_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL2_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL2_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const internationalDhsWomanReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL_DHS_WOMAN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL_DHS_WOMAN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL_DHS_WOMAN_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const internationalDhsChildReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL_DHS_CHILD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL_DHS_CHILD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL_DHS_CHILD_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const internationalDhsFgmReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL_DHS_FGM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL_DHS_FGM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL_DHS_FGM_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const internationalDhsPhysicalReducer = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL_DHS_PHYSICAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL_DHS_PHYSICAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL_DHS_PHYSICAL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const unicefDemographyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL_DEMOGRAPHY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL_DEMOGRAPHY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL_DEMOGRAPHY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const unicefGenderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL_GENDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL_GENDER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL_GENDER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const unicefEducationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL_EDUCATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL_EDUCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL_EDUCATION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const unicefEconomicReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INTERNATIONAL_ECONOMIC_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_INTERNATIONAL_ECONOMIC_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LIST_INTERNATIONAL_ECONOMIC_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
//add unicef
export const addInternationalReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INTERNATIONAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_INTERNATIONAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_INTERNATIONAL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addUnicefDemographyReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INTERNATIONAL_DEMOGRAPHY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_INTERNATIONAL_DEMOGRAPHY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_INTERNATIONAL_DEMOGRAPHY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addUnicefGenderReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INTERNATIONAL_GENDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_INTERNATIONAL_GENDER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_INTERNATIONAL_GENDER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addUnicefEducationReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INTERNATIONAL_EDUCATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_INTERNATIONAL_EDUCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_INTERNATIONAL_EDUCATION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addUnicefEconomicReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INTERNATIONAL_ECONOMIC_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_INTERNATIONAL_ECONOMIC_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_INTERNATIONAL_ECONOMIC_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
//dhs

export const addInternationalDhsWomanReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INTERNATIONAL_DHS_WOMAN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_INTERNATIONAL_DHS_WOMAN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_INTERNATIONAL_DHS_WOMAN_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addInternationalDhsChildReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INTERNATIONAL_DHS_CHILD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_INTERNATIONAL_DHS_CHILD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_INTERNATIONAL_DHS_CHILD_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addInternationalDhsFgmReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INTERNATIONAL_DHS_FGM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_INTERNATIONAL_DHS_FGM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_INTERNATIONAL_DHS_FGM_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addInternationalDhsPhysicalReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_INTERNATIONAL_DHS_PHYSICAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_INTERNATIONAL_DHS_PHYSICAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_INTERNATIONAL_DHS_PHYSICAL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const addWorldReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_WORLD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_WORLD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };
    case ADD_WORLD_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
