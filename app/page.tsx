import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-24 dark:from-gray-900 dark:to-gray-950">
      <Card className="w-[450px] shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
            CollabSpace
          </CardTitle>
          <CardDescription className="text-base">
            Team Collaboration & Project Management Platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center text-sm">
            Built with Next.js 15, TypeScript, PostgreSQL, and Redis
          </p>
          <div className="flex gap-2">
            <Button className="flex-1">Get Started</Button>
            <Button variant="outline" className="flex-1">
              Learn More
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1" size="sm">
              View Docs
            </Button>
            <Button variant="ghost" className="flex-1" size="sm">
              GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
