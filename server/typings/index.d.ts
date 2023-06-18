declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            PORT: string;
            API_URL: string;
            CLIENT_URL: string;
            DATABASE_URL: string;
            DATABASE_LOG: string;
        }
    }
}