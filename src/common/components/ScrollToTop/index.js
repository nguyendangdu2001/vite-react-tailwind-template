import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const ScrollToTop = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    });
    return unlisten;
  }, [history]);
  return null;
};
