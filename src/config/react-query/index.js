import { logout } from "@action/userAction";
import { QueryClient } from "react-query";

export const configReactQuery = ({ store = {} }) => {
  const qc = new QueryClient();
  qc.setDefaultOptions({
    queries: {
      retry: (retry, err) => {
        // console.log(JSON.parse(JSON.stringify(err)));
        if (err?.response?.status === 401) return false;
        if (retry > 3) return false;
        return true;
      },
      onError: (error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error?.response?.status === 401)
            return store?.dispatch(logout(qc.removeQueries("user")));
          return error.response?.data?.message;
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log("Error", error.message);
        }
      },
    },
    mutations: {
      retry: (retry, err) => {
        // console.log(JSON.parse(JSON.stringify(err)));
        if ([401, 411, 493].includes(err?.response?.status)) return false;
        if (retry > 3) return false;
        return true;
      },
    },
  });
  return qc;
};
// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: (retry, err) => {
//         // console.log(JSON.parse(JSON.stringify(err)));
//         if (err?.response?.status === 401) return false;
//         if (retry > 3) return false;
//         return true;
//       },
//     },
//     mutations: {
//       retry: (retry, err) => {
//         // console.log(JSON.parse(JSON.stringify(err)));
//         if ([401, 411, 493].includes(err?.response?.status)) return false;
//         if (retry > 3) return false;
//         return true;
//       },
//     },
//   },
// });
