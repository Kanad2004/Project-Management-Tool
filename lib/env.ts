import { z } from "zod";

// Define the schema for environment variables
const envSchema = z.object({
  // App
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_APP_NAME: z.string().default("CollabSpace"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // Database
  DATABASE_URL: z.string().min(1, "Database URL is required"),

  // Redis
  REDIS_URL: z.string().min(1, "Redis URL is required"),

  // Auth
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z
    .string()
    .min(32, "NextAuth secret must be at least 32 characters"),

  // OAuth (optional)
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GITHUB_CLIENT_ID: z.string().optional(),
  GITHUB_CLIENT_SECRET: z.string().optional(),

  // Email
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().optional().or(z.literal("")),

  // File Upload
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),

  // Real-time (optional)
  NEXT_PUBLIC_PUSHER_APP_KEY: z.string().optional(),
  PUSHER_APP_ID: z.string().optional(),
  PUSHER_APP_SECRET: z.string().optional(),
  NEXT_PUBLIC_PUSHER_CLUSTER: z.string().default("ap2"),

  // Monitoring (optional)
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional().or(z.literal("")),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

// Parse and validate environment variables
const parseEnv = () => {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("❌ Invalid environment variables:");
      console.error(
        JSON.stringify(
          error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
          null,
          2
        )
      );
      throw new Error("Invalid environment variables");
    }
    throw error;
  }
};

// Export validated environment variables
export const env = parseEnv();

// Export types
export type Env = z.infer<typeof envSchema>;
