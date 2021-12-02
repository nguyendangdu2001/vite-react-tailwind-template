import { logout } from "@modules/auth/slices";
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
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalConfig = error.config;
      const url = originalConfig.url;

      if (error.response && url !== "/auth/refresh" && url !== "/auth/login") {
        //@ts-ignore
        if (error.response.status === 401) {
          //@ts-ignore
          try {
            store.dispatch(logout());
            // const { data } = await refresh_token();
            // const userInfo = JSON.parse(Cookies.get("userInfo"));
            // const access_token = data?.access_token;
            // store.dispatch(updateToken({ access_token }));
            // originalConfig.headers["Authorization"] = `Bearer ${access_token}`;
            // return axios(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(error);
    }
  );
};
