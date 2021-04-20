import { useEffect } from "react";
import { useHistory } from "react-router";

const useRedirect = (params) => {
  const history = useHistory();
  useEffect(() => {
    params.some(({ condition, to, cb }) => {
      // console.log(condition, to);
      if (condition) {
        history.replace(to);
        cb?.();
      }
      return condition;
    });
    return () => {};
  }, [params, history]);
};

export default useRedirect;
