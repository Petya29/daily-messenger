import { Router } from "express";
import ConversationController from "../controllers/conversation.controller";

const conversationRouter = Router();

conversationRouter.get("/:userId", ConversationController.getUserConversations);

conversationRouter.post("/new", ConversationController.newConversation);

export default conversationRouter;
