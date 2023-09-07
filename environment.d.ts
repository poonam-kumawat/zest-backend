export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number; // 👈️ mark optional
      MONGODB_URI: string;
    }
  }
}