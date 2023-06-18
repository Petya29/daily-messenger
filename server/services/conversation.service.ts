import prisma from "../prisma/prisma";

class ConversationService {
	async createConversation(senderId: string, receiverId: string) {
		const newConversation = await prisma.conversation.create({ data: {} });

		await prisma.conversationMembers.createMany({
			data: [
				{ userId: senderId, conversationId: newConversation.id },
				{ userId: receiverId, conversationId: newConversation.id },
			],
		});

		return {
			conversation: newConversation,
			users: [senderId, receiverId],
		};
	}

	async getUserConversations(userId: string) {
		const conversationIdsObj = await prisma.conversationMembers.findMany({
			where: {
				userId: userId,
			},
			select: {
				conversationId: true,
			},
		});
		const conversationIds = conversationIdsObj.map(
			(conversationIdObj) => conversationIdObj.conversationId
		);

		return await prisma.conversation.findMany({
			where: {
				id: {
					in: conversationIds,
				},
			},
			include: {
				members: true,
			},
		});
	}

	async isConversationExist(senderId: string, receiverId: string) {
		const connection = await prisma.conversationMembers.findFirst({
			where: {
				userId: {
					in: [senderId, receiverId],
				},
			},
		});
		if (!connection) return null;

		const conversation = await prisma.conversation.findUnique({
			where: {
				id: connection.conversationId,
			},
		});

		return {
			conversation: conversation,
			users: [senderId, receiverId],
		};
	}
}

export default new ConversationService();
