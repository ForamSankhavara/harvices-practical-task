import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import CompanyMST from './pages/companyMST';
import PrivateRoutes from './routes/PrivateRoutes';
import Login from './pages/login';
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {

  const isAuth = localStorage.getItem("auth_token") ? true: false
  // const isAuth = true
  console.log('isAuth', isAuth)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<Login />} />
        <Route path="auth/login" element={<Login />} />
        <Route
                path="company-mst"
                element={
                  <PrivateRoutes user={isAuth}>
                    <CompanyMST />
                  </PrivateRoutes>
                }
              />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
