import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create test user
  const hashedPassword = await bcrypt.hash("password123", 10);

  const user = await prisma.user.upsert({
    where: { email: "test@collabspace.com" },
    update: {},
    create: {
      email: "test@collabspace.com",
      name: "Test User",
      password: hashedPassword,
    },
  });

  console.log("✅ Created user:", user.email);

  // Create test workspace
  const workspace = await prisma.workspace.create({
    data: {
      name: "Test Workspace",
      slug: "test-workspace",
      description: "A test workspace for development",
      ownerId: user.id,
      members: {
        create: {
          userId: user.id,
          role: "OWNER",
        },
      },
    },
  });

  console.log("✅ Created workspace:", workspace.name);

  // Create test project
  const project = await prisma.project.create({
    data: {
      name: "Test Project",
      description: "A test project",
      workspaceId: workspace.id,
      color: "#3b82f6",
      icon: "📁",
    },
  });

  console.log("✅ Created project:", project.name);

  console.log("🎉 Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
