export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT?: number; // 👈️ mark optional
      MONGODB_URI: string;
    }
  }
}