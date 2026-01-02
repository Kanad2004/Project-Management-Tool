import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import {
  isDatabaseConfigured,
  isRedisConfigured,
  isFeatureEnabled,
} from "@/lib/utils/env";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    environment: env.NODE_ENV,
    app: env.NEXT_PUBLIC_APP_NAME,
    features: {
      database: isDatabaseConfigured(),
      redis: isRedisConfigured(),
      oauth: isFeatureEnabled("oauth"),
      email: isFeatureEnabled("email"),
      fileUpload: isFeatureEnabled("fileUpload"),
      realtime: isFeatureEnabled("realtime"),
    },
    timestamp: new Date().toISOString(),
  });
}
