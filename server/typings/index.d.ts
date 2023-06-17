declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            PORT: string;
            API_URL: string;
            CLIENT_URL: string;
        }
    }
}