import { Router } from "express";
import conversationRouter from "./conversation.router";
import messageRouter from "./message.router";

const router = Router();

router.use('/conversation', conversationRouter);
router.use('/message', messageRouter);

export default router;