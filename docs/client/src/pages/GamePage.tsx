import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import type { Game } from "@shared/schema";
import { useState } from "react";

export default function GamePage() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [isGameLoading, setIsGameLoading] = useState(true);

  const { data: games, isLoading } = useQuery<Game[]>({
    queryKey: ["/api/games"],
  });

  const game = games?.find((g) => g.id === id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <LoadingSpinner text="Loading game..." />
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-md w-full p-8 text-center space-y-6" data-testid="card-game-not-found">
          <div className="rounded-full bg-muted p-6 mx-auto w-fit">
            <svg className="h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold" data-testid="text-not-found-title">Game Not Found</h2>
            <p className="text-muted-foreground" data-testid="text-not-found-message">
              The game you're looking for doesn't exist or has been removed.
            </p>
          </div>
          <Button onClick={() => setLocation("/")} className="w-full gap-2" data-testid="button-back-home">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <Button
          variant="ghost"
          onClick={() => setLocation("/")}
          className="mb-6 gap-2"
          data-testid="button-back"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Games
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden border-card-border">
              <div className="relative aspect-video w-full bg-black">
                {isGameLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-card">
                    <LoadingSpinner text="Loading game..." />
                  </div>
                )}
                <iframe
                  src={game.iframeUrl}
                  className="h-full w-full"
                  allowFullScreen
                  onLoad={() => setIsGameLoading(false)}
                  data-testid="iframe-game"
                  title={game.title}
                  style={{ display: isGameLoading ? 'none' : 'block' }}
                />
              </div>
            </Card>

            <Card className="p-6 space-y-4 border-card-border lg:hidden">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground" data-testid="text-game-title-mobile">
                  {game.title}
                </h1>
                <Badge variant="secondary" className="shrink-0 uppercase tracking-wide" data-testid="badge-game-category-mobile">
                  {game.category}
                </Badge>
              </div>
              
              <p className="text-muted-foreground leading-relaxed" data-testid="text-game-description-mobile">
                {game.description}
              </p>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 space-y-6 border-card-border sticky top-24 hidden lg:block">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-2xl font-display font-bold text-foreground" data-testid="text-game-title-desktop">
                    {game.title}
                  </h1>
                  <Badge variant="secondary" className="shrink-0 uppercase tracking-wide" data-testid="badge-game-category-desktop">
                    {game.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground leading-relaxed" data-testid="text-game-description-desktop">
                  {game.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <span className="font-medium" data-testid="text-controls-label">Game Controls</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-controls-description">
                  Use your keyboard and mouse to play. Each game has its own unique controls - look for instructions within the game.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
