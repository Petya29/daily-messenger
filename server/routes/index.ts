import { Router } from "express";
import conversationRouter from "./conversation.router";

const router = Router();

router.use('/conversation', conversationRouter);

export default router;