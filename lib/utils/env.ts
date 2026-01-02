import { env } from "@/lib/env";

/**
 * Check if app is running in production
 */
export const isProduction = env.NODE_ENV === "production";

/**
 * Check if app is running in development
 */
export const isDevelopment = env.NODE_ENV === "development";

/**
 * Check if app is running in test mode
 */
export const isTest = env.NODE_ENV === "test";

/**
 * Get the app URL
 */
export const getAppUrl = () => env.NEXT_PUBLIC_APP_URL;

/**
 * Check if feature is enabled
 */
export const isFeatureEnabled = (feature: string): boolean => {
  const features = {
    oauth: Boolean(env.GOOGLE_CLIENT_ID || env.GITHUB_CLIENT_ID),
    email: Boolean(env.RESEND_API_KEY),
    fileUpload: Boolean(env.CLOUDINARY_API_KEY),
    realtime: Boolean(env.NEXT_PUBLIC_PUSHER_APP_KEY),
    monitoring: Boolean(env.NEXT_PUBLIC_SENTRY_DSN),
  };

  return features[feature as keyof typeof features] ?? false;
};

/**
 * Get database connection status
 */
export const isDatabaseConfigured = () => Boolean(env.DATABASE_URL);

/**
 * Get Redis connection status
 */
export const isRedisConfigured = () => Boolean(env.REDIS_URL);
