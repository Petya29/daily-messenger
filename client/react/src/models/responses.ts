import { Message } from "./entities";

export interface GetConversationMessagesResponse {
	conversationId: string;
	messages: Message[];
}
