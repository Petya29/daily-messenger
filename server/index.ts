import * as dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import errorHandler from "./middleware/error-handling.middleware";
import router from './routes';
import { setupSocket } from "./socket/setup-socket";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL?.split('|')
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/v1/', router);
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