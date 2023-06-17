import http from "http";
import { Server } from "socket.io";

export const setupSocket = (server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) => {
    const io = new Server(server, {
        cors: {
            credentials: true,
            origin: process.env.CLIENT_URL?.split('|')
        }
    });

    io.on("connection", (socket) => {
        console.log(`IO Connection. SocketID: ${socket.id}`);
    
        socket.on("disconnect", () => {
            console.log(`User ${socket.id} is disconnected`);
        });
    });

    setInterval(() => {
        console.log(`[health check] io has ${io.engine.clientsCount} connected clients`);
    }, 15000);
}