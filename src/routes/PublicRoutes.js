import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login";

const PublicRoutes = () => (
    <Routes>
      <Route exact path="/login" name="Login Page" element={<Login />} />
      <Route path="*" element={<Navigate to="login" />} />
      <Route index element={<Navigate to="login" />} />
    </Routes>
  )
  export default PublicRoutes;