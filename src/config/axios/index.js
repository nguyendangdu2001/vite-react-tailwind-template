import axios from "axios";
axios.defaults.baseURL = import.meta.env.BE_URL;
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
