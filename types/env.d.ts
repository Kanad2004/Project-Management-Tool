declare namespace NodeJS {
  interface ProcessEnv {
    // App
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_APP_NAME: string;
    NODE_ENV: "development" | "production" | "test";

    // Database
    DATABASE_URL: string;

    // Redis
    REDIS_URL: string;

    // Auth
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;

    // OAuth (optional)
    GOOGLE_CLIENT_ID?: string;
    GOOGLE_CLIENT_SECRET?: string;
    GITHUB_CLIENT_ID?: string;
    GITHUB_CLIENT_SECRET?: string;

    // Email
    RESEND_API_KEY?: string;
    RESEND_FROM_EMAIL?: string;

    // File Upload
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?: string;
    CLOUDINARY_API_KEY?: string;
    CLOUDINARY_API_SECRET?: string;

    // Real-time
    NEXT_PUBLIC_PUSHER_APP_KEY?: string;
    PUSHER_APP_ID?: string;
    PUSHER_APP_SECRET?: string;
    NEXT_PUBLIC_PUSHER_CLUSTER?: string;

    // Monitoring
    NEXT_PUBLIC_SENTRY_DSN?: string;
    NEXT_PUBLIC_GA_ID?: string;
  }
}
