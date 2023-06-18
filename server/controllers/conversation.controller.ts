import { NextFunction, Request, Response } from "express";
import ConversationService from "../services/conversation.service";

class ConversationController {
	async newConversation(req: Request, res: Response, next: NextFunction) {
		try {
			const { senderId, receiverId } = req.body;

			const potentialConversation =
				await ConversationService.isConversationExist(senderId, receiverId);
			if (potentialConversation) return res.json(potentialConversation);

			const newConversation = await ConversationService.findOrCreate(
				senderId,
				receiverId
			);

			return res.json(newConversation);
		} catch (e) {
			next(e);
		}
	}

	async getUserConversations(req: Request, res: Response, next: NextFunction) {
		try {
			const userId = req.params.userId;

			const userConversations =
				await ConversationService.getUserConversations(userId);

			return res.json(userConversations);
		} catch (e) {
			next(e);
		}
	}
}

export default new ConversationController();
