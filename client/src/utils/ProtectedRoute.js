import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);

  return userInfo?.user?.isAdmin ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
