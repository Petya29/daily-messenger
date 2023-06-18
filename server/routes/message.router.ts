import { Router } from "express";
import MessageController from "../controllers/message.controller";

const messageRouter = Router();

messageRouter.get("/:conversationId", MessageController.getConversationMessages);

messageRouter.post("/new", MessageController.newMessage);

export default messageRouter;
