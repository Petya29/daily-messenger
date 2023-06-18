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

export type Role = 'USER' | 'ADMIN';
