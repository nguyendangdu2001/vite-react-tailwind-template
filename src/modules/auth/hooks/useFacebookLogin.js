import { useAppDispatch } from "@hooks/reduxHook";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { login as loginAction } from "../slices";
import { facebookLogin } from "../services/auth";
import socket from "@config/socketio";

const useFacebookLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return useMutation(
    async (requestData) => {
      const { data } = await facebookLogin(requestData);
      return await new Promise((resolve) => {
        console.log("auth ws");
        socket.emit("login", { token: data?.token }, (error) => {
          resolve(data);
        });
      });
    },
    {
      onSuccess: (data) => {
        console.log(data);
        dispatch(loginAction(data));
        navigate("/projects", { replace: true });
      },
    }
  );
};

export default useFacebookLogin;
