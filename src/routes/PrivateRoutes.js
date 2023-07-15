import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import CompanyMST from "../pages/companyMST";

const PrivateRoutes = ({
    user,
    redirectPath = '/auth/login',
    children,
  }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  export default PrivateRoutes