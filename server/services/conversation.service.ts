import prisma from "../prisma/prisma";

class ConversationService {
	async findOrCreate(senderId: string, receiverId: string) {
		const newConversation = await prisma.conversation.create({ data: {} });

		await prisma.conversationMembers.createMany({
			data: [
				{ userId: senderId, conversationId: newConversation.id },
				{ userId: receiverId, conversationId: newConversation.id },
			],
		});

		return {
			conversation: newConversation,
			members: [senderId, receiverId],
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
				members: {
					include: {
						user: {
							select: {
								nickname: true,
							},
						},
					},
				},
			},
		});
	}

	async isConversationExist(senderId: string, receiverId: string) {
		const connections = await prisma.conversation.findMany({
			include: {
				members: {
					where: {
						userId: {
							in: [senderId, receiverId],
						},
					},
				},
			},
		});

		for (let i = 0; i < connections.length; i++) {
			if (connections[i].members.length >= 2) {
				return connections[i];
			}
		}

		return null;
	}
}

export default new ConversationService();
