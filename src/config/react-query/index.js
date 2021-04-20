import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (retry, err) => {
        // console.log(JSON.parse(JSON.stringify(err)));
        if (err?.response?.status === 401) return false;
        if (retry > 3) return false;
        return true;
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
  },
});
