import prisma from "../prisma/prisma";

class MessageService {
	async create(conversationId: string, senderId: string, text: string) {
		return await prisma.message.create({
			data: {
				userId: senderId,
				conversationId: conversationId,
				text: text,
			},
		});
	}

	async getConversationMessages(conversationId: string) {
		return await prisma.message.findMany({
			where: {
				conversationId: conversationId,
			},
		});
	}
}

export default new MessageService();
