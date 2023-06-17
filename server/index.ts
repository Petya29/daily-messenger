import cors from "cors";
import express from "express";
import http from "http";
import errorHandler from "./middleware/error-handling.middleware";
import { setupSocket } from "./socket/setup-socket";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL?.split('|')
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

const server = http.createServer(app);

const io = setupSocket(server);

const start = () => {
    try {
        server.listen(PORT, () => {
            console.log(`Server start on ${PORT} port: http://localhost:${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();