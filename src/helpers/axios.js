import axios from 'axios';
import { api } from '../urlConfig';
import store from '../redux/store';

const token = localStorage.getItem("token");

const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});

axiosIntance.interceptors.request.use((req) => {
  const { login } = store.getState();
  if (login.token) {
    req.headers.Authorization = `Bearer ${login.token}`;
  }
  return req;
});

axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
      // store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
  }
);

export default axiosIntance;
