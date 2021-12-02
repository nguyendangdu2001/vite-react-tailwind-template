import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;
export const configAxios = (store) => {
  axios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const token = store.getState().userStatus?.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
};
