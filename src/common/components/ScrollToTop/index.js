import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ScrollToTop = () => {
  const history = useNavigate();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    });
    return unlisten;
  }, [history]);
  return null;
};
