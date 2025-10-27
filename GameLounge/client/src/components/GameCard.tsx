import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Game } from "@shared/schema";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.id}`} data-testid={`link-game-${game.id}`}>
      <Card className="group relative overflow-hidden border border-card-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 cursor-pointer h-full flex flex-col">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <img
            src={game.thumbnailUrl}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-game-thumbnail-${game.id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm shadow-lg">
              <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-5 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-semibold leading-tight text-foreground line-clamp-1" data-testid={`text-game-title-${game.id}`}>
              {game.title}
            </h3>
            <Badge variant="secondary" className="shrink-0 text-xs uppercase tracking-wide" data-testid={`badge-category-${game.id}`}>
              {game.category}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 flex-1" data-testid={`text-game-description-${game.id}`}>
            {game.description}
          </p>

          <Button 
            size="sm" 
            className="w-full mt-2 gap-2"
            data-testid={`button-play-${game.id}`}
          >
            <Play className="h-4 w-4" fill="currentColor" />
            Play Now
          </Button>
        </div>
      </Card>
    </Link>
  );
}
