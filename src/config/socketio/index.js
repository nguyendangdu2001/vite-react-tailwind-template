import io from "socket.io-client";
import { BASE_URL_WS } from "@config/axios";
const socket = io(BASE_URL_WS, {
  transports: ["websocket"],
  auth: { token: localStorage.getItem("token-like168") },
});
export const wsIo = io;
export default socket;
