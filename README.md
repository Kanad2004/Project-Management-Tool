# CollabSpace

Team Collaboration & Project Management Platform built with Next.js 15, TypeScript, PostgreSQL, and Redis.

## Features

- 🔐 **Authentication** - Secure auth with NextAuth.js
- 👥 **Workspaces** - Multi-tenant workspace management
- 📊 **Projects** - Organize work into projects
- ✅ **Tasks** - Create, assign, and track tasks
- 🎨 **Kanban Board** - Visual task management
- 💬 **Real-time** - Live updates with Pusher/Socket.IO
- 📁 **File Upload** - Attach files to tasks
- 🔔 **Notifications** - In-app and email notifications
- 📈 **Analytics** - Dashboard with insights

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL (Prisma ORM)
- **Cache:** Redis
- **Styling:** TailwindCSS + Shadcn UI
- **Auth:** NextAuth.js v5
- **File Storage:** Cloudinary
- **Email:** Resend
- **Real-time:** Pusher (optional)

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database
- Redis instance

### Installation

1. Clone the repository:
   git clone https://github.com/YOUR_USERNAME/collabspace.git
   cd collabspace
2. Install dependencies:
   pnpm install
3. Set up environment variables:
   cp .env.example .env.local
   Edit `.env.local` and add your credentials.
4. Run the development server:
   pnpm dev
5. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Check TypeScript types

## Project Structure

collabspace/
├── app/ # Next.js app directory
├── components/ # React components
│ ├── ui/ # Shadcn UI components
│ └── features/ # Feature components
├── lib/ # Utilities and configurations
│ ├── actions/ # Server Actions
│ ├── db/ # Database client
│ ├── validations/ # Zod schemas
│ └── utils/ # Helper functions
├── types/ # TypeScript types
└── hooks/ # Custom React hooks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License
