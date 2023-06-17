import { io } from "socket.io-client";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const setupSocket = () => {
    const socket = io(API_URL);

    return socket;
}