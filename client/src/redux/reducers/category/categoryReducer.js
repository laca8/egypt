import {
  LIST_CATEGORY_REQUEST,
  LIST_CATEGORY_SUCCESS,
  LIST_CATEGORY_FAILED,
  ADD_CATEGORY_FAILED,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_SUBCATEGORY_FAILED,
  ADD_SUBCATEGORY_REQUEST,
  ADD_SUBCATEGORY_SUCCESS,
  DELETE_SUBCATEGORY_FAILED,
  DELETE_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_SUCCESS,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_FAILED,
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_SUBCATEGORY_REQUEST,
  GET_SUBCATEGORY_SUCCESS,
  GET_SUBCATEGORY_FAILED,
  EDIT_CATEGORIES_FAILED,
  EDIT_CATEGORIES_REQUEST,
  EDIT_CATEGORIES_SUCCESS,
  EDIT_SUBCATEGORY_REQUEST,
  EDIT_SUBCATEGORY_SUCCESS,
  EDIT_SUBCATEGORY_FAILED,
  DOWNLOAD_EXCEL_REQUEST,
  DOWNLOAD_EXCEL_SUCCESS,
  DOWNLOAD_EXCEL_FAILED,
} from "../../type.js";
const initialState = {
  categories: [],
  category: null,
  loading: null,
  error: null,
  success: false,
};
export const listCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case LIST_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listCategoryByTitlReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: payload,
      };
    case GET_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const getSubCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: payload,
      };
    case GET_SUBCATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const AddCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: payload,
        success: true,
      };
    case ADD_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const AddSubCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        category: payload,
        loading: false,
        success: true,
      };
    case ADD_SUBCATEGORY_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const EditSubCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case EDIT_SUBCATEGORY_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const editCategoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_CATEGORIES_SUCCESS:
      return {
        ...state,
        category: payload,
        loading: false,
        success: true,
      };
    case EDIT_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const DeleteCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: payload,
      };
    case DELETE_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const DeleteSubCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: payload,
      };
    case DELETE_SUBCATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const downloadExcelReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DOWNLOAD_EXCEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DOWNLOAD_EXCEL_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case DOWNLOAD_EXCEL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
