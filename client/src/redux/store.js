import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  listCategoryReducer,
  AddCategoryReducer,
  AddSubCategoryReducer,
  DeleteCategoryReducer,
  DeleteSubCategoryReducer,
  listCategoryByTitlReducer,
  getSubCategoryReducer,
} from "./reducers/category/categoryReducer";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/user/userReducer";

const middleware = [thunk];
const finalReducer = combineReducers({
  //user
  userLoginReducer: userLoginReducer,
  userRegisterReducer: userRegisterReducer,
  //category
  listCategoryReducer: listCategoryReducer,
  listCategoryByTitlReducer: listCategoryByTitlReducer,
  getSubCategoryReducer: getSubCategoryReducer,
  DeleteSubCategoryReducer: DeleteSubCategoryReducer,
  DeleteCategoryReducer: DeleteCategoryReducer,
  AddSubCategoryReducer: AddSubCategoryReducer,
  AddCategoryReducer: AddCategoryReducer,
});
const userInfoFormStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLoginReducer: { userInfo: userInfoFormStorage },
};
const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
