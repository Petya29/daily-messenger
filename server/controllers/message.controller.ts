import { NextFunction, Request, Response } from "express";
import MessageService from "../services/message.service";

class MessageController {
	async newMessage(req: Request, res: Response, next: NextFunction) {
		try {
			const { conversationId, senderId, text } = req.body;

			const message = await MessageService.create(
				conversationId,
				senderId,
				text
			);

			return res.json(message);
		} catch (e) {
			next(e);
		}
	}

	async getConversationMessages(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const conversationId = req.params.conversationId;

			const messages = await MessageService.getConversationMessages(
				conversationId
			);

			return res.json(messages);
		} catch (e) {
			next(e);
		}
	}
}

export default new MessageController();
