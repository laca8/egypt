import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  listEduReducer,
  addStudentsReducer,
  addClassesReducer,
  addSchoolsReducer,
  addTeacherReducer,
} from "./reducers/educationReducer/educationReducer";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/user/userReducer";
import {
  listPopReducer,
  listPopMiddleReducer,
  listPopAgeReducer,
  listPopTotalReducer,
  listPopTotalAgeReducer,
  listFamilyReducer,
  addPopMiddleReducer,
  addPopAgeReducer,
} from "./reducers/populationsReducer/populationsRed";
import {
  listPreStuReducer,
  listMidPreStuReducer,
  listClassesReducer,
  listClassesMidReducer,
  listSchoolReducer,
  listScoolMidReducer,
} from "./reducers/educationReducer/educationReducer";
import {
  azharReducer,
  addAzharReducer,
} from "./reducers/educationReducer/azharReducer";
import { avgReducer } from "./reducers/educationReducer/precentageReducer";
import { teachersReducer } from "../redux/reducers/educationReducer/teacherReducer";
import {
  cinemaReducer,
  theaterReducer,
  addCinemaReducer,
  addTheaterReducer,
} from "../redux/reducers/cultureReducer/cultureRed";
import { listDeathRed, addDeathRed } from "./reducers/health/healthReducer";
import {
  internationalReducer,
  international2Reducer,
  internationalDhsChildReducer,
  internationalDhsFgmReducer,
  internationalDhsPhysicalReducer,
  internationalDhsWomanReducer,
  unicefDemographyReducer,
  unicefEconomicReducer,
  unicefEducationReducer,
  unicefGenderReducer,
  addUnicefEconomicReducer,
  addUnicefEducationReducer,
  addUnicefGenderReducer,
  addUnicefDemographyReducer,
  addInternationalReducer,
  addInternationalDhsChildReducer,
  addInternationalDhsFgmReducer,
  addInternationalDhsPhysicalReducer,
  addInternationalDhsWomanReducer,
  addWorldReducer,
} from "./reducers/international/interReducer";
import {
  clubReducer,
  councilReducer,
  addClubReducer,
  addCouncilReducer,
} from "./reducers/sports/clubReducer";
const middleware = [thunk];
const finalReducer = combineReducers({
  listPopReducer: listPopReducer,
  listPopMiddleReducer: listPopMiddleReducer,
  listPopAgeReducer: listPopAgeReducer,
  listPopTotalReducer: listPopTotalReducer,
  listPopTotalAgeReducer: listPopTotalAgeReducer,
  listFamilyReducer: listFamilyReducer,

  listPreStuReducer: listPreStuReducer,
  listMidPreStuReducer: listMidPreStuReducer,

  listClassesReducer: listClassesReducer,
  listClassesMidReducer: listClassesMidReducer,

  listSchoolReducer: listSchoolReducer,
  listScoolMidReducer: listScoolMidReducer,
  azharReducer: azharReducer,
  teachersReducer: teachersReducer,
  avgReducer: avgReducer,

  cinemaReducer: cinemaReducer,
  theaterReducer: theaterReducer,

  listDeathRed: listDeathRed,

  internationalReducer: internationalReducer,
  international2Reducer: international2Reducer,

  internationalDhsChildReducer: internationalDhsChildReducer,
  internationalDhsFgmReducer: internationalDhsFgmReducer,
  internationalDhsPhysicalReducer: internationalDhsPhysicalReducer,
  internationalDhsWomanReducer: internationalDhsWomanReducer,
  unicefDemographyReducer: unicefDemographyReducer,
  unicefEconomicReducer: unicefEconomicReducer,
  unicefEducationReducer: unicefEducationReducer,
  unicefGenderReducer: unicefGenderReducer,
  clubReducer: clubReducer,
  councilReducer: councilReducer,
  userLoginReducer: userLoginReducer,
  userRegisterReducer: userRegisterReducer,
  addAzharReducer: addAzharReducer,
  addStudentsReducer: addStudentsReducer,
  addClassesReducer: addClassesReducer,
  addSchoolsReducer: addSchoolsReducer,
  addTeacherReducer: addTeacherReducer,
  addCinemaReducer: addCinemaReducer,
  addTheaterReducer: addTheaterReducer,
  addClubReducer: addClubReducer,
  addCouncilReducer: addCouncilReducer,
  addDeathRed: addDeathRed,
  addPopMiddleReducer: addPopMiddleReducer,
  addPopAgeReducer: addPopAgeReducer,
  addInternationalReducer: addInternationalReducer,
  addUnicefEconomicReducer: addUnicefEconomicReducer,
  addUnicefEducationReducer: addUnicefEducationReducer,
  addUnicefGenderReducer: addUnicefGenderReducer,
  addUnicefDemographyReducer: addUnicefDemographyReducer,
  addInternationalDhsChildReducer: addInternationalDhsChildReducer,
  addInternationalDhsFgmReducer: addInternationalDhsFgmReducer,
  addInternationalDhsPhysicalReducer: addInternationalDhsPhysicalReducer,
  addInternationalDhsWomanReducer: addInternationalDhsWomanReducer,
  addWorldReducer: addWorldReducer,
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
