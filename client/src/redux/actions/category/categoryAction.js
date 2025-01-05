import {
  LIST_CATEGORY_FAILED,
  LIST_CATEGORY_REQUEST,
  LIST_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_SUBCATEGORY_FAILED,
  DELETE_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_SUBCATEGORY_FAILED,
  ADD_SUBCATEGORY_REQUEST,
  ADD_SUBCATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_SUBCATEGORY_REQUEST,
  GET_SUBCATEGORY_SUCCESS,
  GET_SUBCATEGORY_FAILED,
  EDIT_CATEGORIES_REQUEST,
  EDIT_CATEGORIES_SUCCESS,
  EDIT_CATEGORIES_FAILED,
  EDIT_SUBCATEGORY_REQUEST,
  EDIT_SUBCATEGORY_FAILED,
  EDIT_SUBCATEGORY_SUCCESS,
} from "../../type";
import axios from "axios";
export const listCategory = () => async (dispatch) => {
  dispatch({
    type: LIST_CATEGORY_REQUEST,
  });
  try {
    const res = await axios.get("/api/category/");
    dispatch({
      type: LIST_CATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_CATEGORY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listCategoryByTitle = (title) => async (dispatch) => {
  dispatch({
    type: GET_CATEGORY_REQUEST,
  });
  try {
    const res = await axios.get(`/api/category/sub/${title}`);
    dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_CATEGORY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const getSubCategory = (title, idResults) => async (dispatch) => {
  dispatch({
    type: GET_SUBCATEGORY_REQUEST,
  });
  try {
    const res = await axios.get(`/api/category/${title}/${idResults}`);
    dispatch({
      type: GET_SUBCATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_SUBCATEGORY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const AddCategory = (cat) => async (dispatch) => {
  dispatch({
    type: ADD_CATEGORY_REQUEST,
  });
  try {
    const res = await axios.post("/api/category", cat, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({
      type: ADD_CATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADD_CATEGORY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const editCategories = (cat, id) => async (dispatch) => {
  dispatch({
    type: EDIT_CATEGORIES_REQUEST,
  });
  try {
    const res = await axios.put(`/api/category/${id}`, cat, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({
      type: EDIT_CATEGORIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: EDIT_CATEGORIES_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const AddSubCategory = (title, sub) => async (dispatch) => {
  console.log(title, sub);

  dispatch({
    type: ADD_SUBCATEGORY_REQUEST,
  });
  try {
    const res = await axios.put(`/api/category/sub/${title}`, sub, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({
      type: ADD_SUBCATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: ADD_SUBCATEGORY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const editSubCategory = (category, id, sub) => async (dispatch) => {
  dispatch({
    type: EDIT_SUBCATEGORY_REQUEST,
  });
  console.log(category, id);

  try {
    const res = await axios.put(
      `/api/category/subCategory/${category}/${id}`,
      sub,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(sub);
    dispatch({
      type: EDIT_SUBCATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: EDIT_SUBCATEGORY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const deleteSubCategory = (title, idResults) => async (dispatch) => {
  dispatch({
    type: DELETE_SUBCATEGORY_REQUEST,
  });
  try {
    const res = await axios.put(`/api/category/delete/${title}/${idResults}`);
    dispatch({
      type: DELETE_SUBCATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: DELETE_SUBCATEGORY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CATEGORY_REQUEST,
  });
  try {
    console.log(id);

    const res = await axios.delete(`/api/category/${id}`);
    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: DELETE_CATEGORY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
