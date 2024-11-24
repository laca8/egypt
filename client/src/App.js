import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Header from "./component/features/Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/user/Login";

import AdminPanel from "./pages/admin/AdminPanel";

import SubCategory from "./pages/admin/SubCategory";
import City from "./pages/map/City";
import CategoryDescription from "./pages/dashboard/CategoryDescription";
import ProtectedRoutes from "./utils/ProtectedRoute";
import CategoriesResults from "./pages/dashboard/CategoriesResults";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}

        <Route path="/map/:gov" element={<City />} />
        <Route path="/sub/:category" element={<CategoriesResults />} />
        <Route
          path="/sub/:category/:idResults"
          element={<CategoryDescription />}
        />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* <Route
          path="/admin/sub/:category"
          element={
            userInfo?.user?.isAdmin ? <AdminPanel /> : <Navigate to="/login" />
          }
        /> */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin/sub/:category" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
