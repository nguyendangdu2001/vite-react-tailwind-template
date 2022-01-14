import socket from "@config/socketio";
import { useAppDispatch } from "@hooks/reduxHook";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../services/auth";
import { logout as logoutAction } from "../slices/index";

const useLogout = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const naviagte = useNavigate();
  return useMutation(
    async () => {
      await logout();
      return await new Promise((resolve) => {
        console.log("logout ws");
        socket.emit("logout", (error) => {
          resolve();
        });
      });
    },
    {
      onSuccess: () => {
        dispatch(logoutAction());
        queryClient.removeQueries("user");
        naviagte("/login", { replace: true });
      },
    }
  );
};

export default useLogout;
