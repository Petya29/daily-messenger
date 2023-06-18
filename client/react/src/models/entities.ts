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

export type Role = "USER" | "ADMIN";
