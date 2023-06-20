export interface User {
	id: string;
	nickname: string;
	email: string;
	password: string;
	role: Role;
	isActivated: boolean;
	activationLink: string | null;
	region: string;
	createdAt: string;
	updatedAt: string;
}

export interface Token {
	id: string;
	userId: string;
	refreshToken: string;
	createdAt: string;
	updatedAt: string;
}

export interface Conversation {
	id: string;
	members: ConversationMember[];
	messages: Message[];
	createdAt: string;
	updatedAt: string;
}

export interface ConversationMember {
	userId: string;
	conversationId: string;
	user: Pick<User, "nickname">;
	createdAt: string;
	updatedAt: string;
}

export interface Message {
	id: string;
	userId: string;
	conversationId: string;
	text: string;
	createdAt: string;
	updatedAt: string;
}

export type Role = "USER" | "ADMIN";
