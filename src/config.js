/* eslint-disable */
import axios from "axios";
// import { Logout } from "src/Redux/Actions/authActions";
// import { store } from "src/Redux/Store";
// import { Toast } from '../../views/toasts/index'
// import { SERVER_URL } from "./routes/common";

// const { dispatch } = store

const Axios = axios.create({
  baseURL: 'https://projects.harvices.in/ticketingappapitest-uat/',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const requestHandler = (config) => {
  console.log('config', config)
  const authUser = localStorage.getItem("auth_token")

  if (authUser) {
    config.headers = {
      Authorization: `Bearer ${authUser}`,
    };
  }
  return config;
};

//request interceptor
Axios.interceptors.request.use(
  (config) => requestHandler(config),
  (error) => Promise.reject(error)
);

// const ErrorHandler = (error) => {

//   if (!error.response) {
//     Toast.error(error.message || 'Network error - something went wrong', 'Network error')
//   }

//   if (error.response && error.response.data) {
//     if (error.response.data.errorMessage.includes('Trace ID')) {
//       Toast.error(error.response.data.errorMessage, undefined, 10000, undefined, undefined, true, true, true)
//     } else {
//       Toast.error(error.response.data.errorMessage)
//     }

//     if ([ "Session expired", "Unauthorized access" ].includes(error.response.data.errorMessage)) {
//       dispatch(Logout());
//     }
//   }
//   return Promise.reject(error);
// };

// response interceptor

Axios.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => ErrorHandler(error)
);

export default Axios;
