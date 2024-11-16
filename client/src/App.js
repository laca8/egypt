import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Header from "./component/features/Header";
import Footer from "./component/features/Footer";
import Populations from "./pages/populations/Populations";
import Education from "./pages/education/Education";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./pages/education/pre-primary/Students";
import StudentsPrimary from "./pages/education/primary/Students";
import StudentsSecondary from "./pages/education/Secondary/Students";
import StudentsPrivate from "./pages/education/private/Students";
import StudentsCommunity from "./pages/education/community/Students";
import StudentsCommercial from "./pages/education/commercial/Students";
import StudentsArgiculture from "./pages/education/arg/Students";
import StudentsHigh from "./pages/education/high/Students";
import StudentsIndustrial from "./pages/education/industrial/Students";
import ClassePrePrimary from "./pages/education/pre-primary/Classes";
import ClassePrimary from "./pages/education/primary/Classes";
import ClasseSecondary from "./pages/education/Secondary/Classes";
import ClasseHigh from "./pages/education/high/Classes";
import ClasseIndustrial from "./pages/education/industrial/Classes";
import ClasseCommercial from "./pages/education/commercial/Classes";
import ClasseAgriculture from "./pages/education/arg/Classes";
import ClasseHotel from "./pages/education/hotel/Classes";
import SchoolSecondary from "./pages/education/Secondary/Schools";
import SchoolAgri from "./pages/education/arg/Schools";
import SchoolPrimary from "./pages/education/primary/Schools";
import SchoolPrePrimary from "./pages/education/pre-primary/Schools";
import SchoolIndustrial from "./pages/education/industrial/Schools";
import SchoolHotel from "./pages/education/hotel/Schools";
import SchoolHigh from "./pages/education/high/Schools";
import SchoolCommercial from "./pages/education/commercial/Schools";
import SchoolCommunity from "./pages/education/community/Schools";
import ClasseCommunity from "./pages/education/community/Classes";
import ClasseSpecial from "./pages/education/private/Classes";
import SchoolSpecial from "./pages/education/private/Schools";
import Child from "./pages/child/Child";
import PrimaryAzhar from "./pages/education/Azhar/Primary";
import SecondaryAzhar from "./pages/education/Azhar/Secondary";
import DisabledAzhar from "./pages/education/Azhar/Disabled";
import ReadsAzhar from "./pages/education/Azhar/Reads";
import IndAzhar from "./pages/education/Azhar/Ind";
import ClassesAzhar from "./pages/education/Azhar/Classes";
import TeachersAzhar from "./pages/education/Azhar/Teachers";
import HighAzhar from "./pages/education/Azhar/High";
import KidsAzhar from "./pages/education/Azhar/Kids";
import TotalTeachers from "./pages/education/teacher/Teacher";
import TeacherForStudents from "./pages/education/teacher/TeacherForStudents";
import PrecentageGrils from "./pages/education/precentage/Girls";
import PrecentageSchools from "./pages/education/precentage/Schools";
import PrecentageClasses from "./pages/education/precentage/Classes";
import PrecentageTeachers from "./pages/education/precentage/Teachers";
import Azhar from "./pages/education/Azhar";
import Culture from "./pages/culture/Culture";
import Health from "./pages/health/Health";

import ChildsUnder28Days from "./pages/health/death/ChildsUnder28Days";
import KidsUnder28Days from "./pages/health/death/KidsUnder28Days";
import KidsFrom1To5Years from "./pages/health/death/KidsFrom1To5Years";
import KidsUnder5Years from "./pages/health/death/KidsUnder5Years";
import KidsUnder7Days from "./pages/health/death/KidsUnder7Days";
import KidsUnder1Year from "./pages/health/death/KidsUnder1Year";
import MotherPlace from "./pages/health/death/MotherPlace";
import MotherResidence from "./pages/health/death/MotherResidence";
import FemalesRate from "./pages/health/death/FemalesRate";
import KidsRate from "./pages/health/death/KidsRate";
import International from "./pages/international/International";
import Unicef from "./pages/international/unicef/Unicef";
import DHS from "./pages/international/dhs/DHS";

import Bank from "./pages/international/world/Bank";
import Un from "./pages/international/un/Un";
import Sport from "./pages/sports/Sport";
import Graphs from "./pages/dashboard/Graphs";
import Tables from "./pages/dashboard/Tables";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import AdminPanel from "./pages/admin/AdminPanel";
import TeacherArgi from "./component/education/arg/Teacher";
import TeacherComm from "./component/education/commercial/Teacher";
import TeacherCommunity from "./component/education/community/Teacher";
import TeacherHigh from "./component/education/high/Teacher";
import TeacherHotel from "./component/education/hotel/Teacher";
import TeacherInd from "./component/education/industrial/Teacher";
import TeacherPre from "./component/education/pre-primary/Teacher";
import TeacherPrimary from "./component/education/primary/Teacher";
import TeacherSpecial from "./component/education/private/Teacher";
import TeacherSecondary from "./component/education/secondary/Teacher";
import SubCategory from "./pages/admin/SubCategory";
import City from "./pages/map/City";
import CategoryDescription from "./pages/dashboard/CategoryDescription";
import ProtectedRoutes from "./utils/ProtectedRoute";
import CategoriesResults from "./pages/dashboard/CategoriesResults";
function App() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/population" element={<Populations />} />
        <Route path="/education" element={<Education />} />
        <Route path="/pre-primary/students" element={<Students />} />
        <Route path="/primary/students" element={<StudentsPrimary />} />
        <Route path="/secondary/students" element={<StudentsSecondary />} />
        <Route path="/special/students" element={<StudentsPrivate />} />
        <Route path="/community/students" element={<StudentsCommunity />} />
        <Route path="/high/students" element={<StudentsHigh />} />
        <Route path="/comm/students" element={<StudentsCommercial />} />
        <Route path="/ind/students" element={<StudentsIndustrial />} />
        <Route path="/argi/students" element={<StudentsArgiculture />} />
        <Route path="/pre-primary/classes" element={<ClassePrePrimary />} />
        <Route path="/primary/classes" element={<ClassePrimary />} />
        <Route path="/secondary/classes" element={<ClasseSecondary />} />
        <Route path="/high/classes" element={<ClasseHigh />} />
        <Route path="/comm/classes" element={<ClasseCommercial />} />
        <Route path="/ind/classes" element={<ClasseIndustrial />} />
        <Route path="/agri/classes" element={<ClasseAgriculture />} />
        <Route path="/hotel/classes" element={<ClasseHotel />} />
        <Route path="/secondary/schools" element={<SchoolSecondary />} />
        <Route path="/agri/schools" element={<SchoolAgri />} />
        <Route path="/ind/schools" element={<SchoolIndustrial />} />
        <Route path="/primary/schools" element={<SchoolPrimary />} />
        <Route path="/pre-primary/schools" element={<SchoolPrePrimary />} />
        <Route path="/high/schools" element={<SchoolHigh />} />
        <Route path="/hotel/schools" element={<SchoolHotel />} />
        <Route path="/comm/schools" element={<SchoolCommercial />} />
        <Route path="/community/schools" element={<SchoolCommunity />} />
        <Route path="/community/classes" element={<ClasseCommunity />} />
        <Route path="/special/classes" element={<ClasseSpecial />} />
        <Route path="/special/schools" element={<SchoolSpecial />} />
        <Route path="/children" element={<Child />} />
        <Route path="/azhar/primary" element={<PrimaryAzhar />} />
        <Route path="/azhar/secondary" element={<SecondaryAzhar />} />
        <Route path="/azhar/high" element={<HighAzhar />} />
        <Route path="/azhar/instituide" element={<IndAzhar />} />
        <Route path="/azhar/classes" element={<ClassesAzhar />} />
        <Route path="/azhar/teachers" element={<TeachersAzhar />} />
        <Route path="/azhar/kids" element={<KidsAzhar />} />
        <Route path="/azhar/reads" element={<ReadsAzhar />} />
        <Route path="/azhar/disabled" element={<DisabledAzhar />} />
        <Route path="/total/teachers" element={<TotalTeachers />} />
        <Route path="/argi/teachers" element={<TeacherArgi />} />
        <Route path="/comm/teachers" element={<TeacherComm />} />
        <Route path="/community/teachers" element={<TeacherCommunity />} />
        <Route path="/primary/teachers" element={<TeacherPrimary />} />
        <Route path="/pre-primary/teachers" element={<TeacherPre />} />
        <Route path="/secondary/teachers" element={<TeacherSecondary />} />
        <Route path="/high/teachers" element={<TeacherHigh />} />
        <Route path="/hotel/teachers" element={<TeacherHotel />} />
        <Route path="/special/teachers" element={<TeacherSpecial />} />
        <Route path="/ind/teachers" element={<TeacherInd />} />
        <Route
          path="/total/teachers/students"
          element={<TeacherForStudents />}
        />
        <Route path="/edu/precentage/girls" element={<PrecentageGrils />} />
        <Route path="/edu/precentage/classes" element={<PrecentageClasses />} />
        <Route path="/edu/precentage/schools" element={<PrecentageSchools />} />

        <Route path="/azhar" element={<Azhar />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/health" element={<Health />} />
        <Route
          path="/health/death/childs-under-28"
          element={<ChildsUnder28Days />}
        />
        <Route
          path="/health/death/kids-under-28"
          element={<KidsUnder28Days />}
        />
        <Route
          path="/health/death/kids-from-1-to-5years"
          element={<KidsFrom1To5Years />}
        />
        <Route
          path="/health/death/kids-under-1year"
          element={<KidsUnder1Year />}
        />
        <Route
          path="/health/death/kids-under-5years"
          element={<KidsUnder5Years />}
        />
        <Route
          path="/health/death/kids-under-7days"
          element={<KidsUnder7Days />}
        />
        <Route path="/health/death/mother-place" element={<MotherPlace />} />
        <Route
          path="/health/death/mother-residence"
          element={<MotherResidence />}
        />
        <Route path="/health/death/kids/rate" element={<KidsRate />} />
        <Route path="/health/female/rate" element={<FemalesRate />} />
        <Route path="/International" element={<International />} />
        <Route path="/international/unicef" element={<Unicef />} />
        <Route path="/international/dhs" element={<DHS />} />
        <Route path="/international/world/bank" element={<Bank />} />
        <Route path="/international/un" element={<Un />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/map/:gov" element={<City />} />
        <Route path="/sub/:category" element={<CategoriesResults />} />
        <Route
          path="/sub/:category/:idResults"
          element={<CategoryDescription />}
        />

        {/* <Route path="/" element={<Graphs />} /> */}
        {/* <Route path="/dashboard/tables" element={<Tables />} /> */}

        <Route
          path="/admin/:category"
          element={userInfo?.user?.isAdmin ? <AdminPanel /> : <Login />}
        />
        <Route
          path="/admin/sub/:category"
          element={userInfo?.user?.isAdmin ? <SubCategory /> : <Login />}
        />
        <Route
          path="/admin/sub/:category"
          element={userInfo?.user?.isAdmin ? <SubCategory /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
