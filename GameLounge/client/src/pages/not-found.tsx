import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="max-w-md w-full p-8 text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-display font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-display font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        <Button onClick={() => setLocation("/")} className="w-full gap-2" data-testid="button-home">
          <Home className="h-4 w-4" />
          Go Home
        </Button>
      </Card>
    </div>
  );
}
