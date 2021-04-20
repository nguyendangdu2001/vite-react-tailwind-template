import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const useModal = (name) => {
  const isOpen = useSelector(
    (state) => state.modal?.[name.toLowerCase()],
    shallowEqual
  );
  const dispatch = useDispatch();

  const open = useCallback(() => {
    dispatch({ type: `OPEN_${name.toUpperCase()}_MODAL` });
  }, [dispatch, name]);

  const close = useCallback(() => {
    dispatch({ type: `CLOSE_${name.toUpperCase()}_MODAL` });
  }, [dispatch, name]);

  return { close, open, isOpen };
};

export default useModal;
