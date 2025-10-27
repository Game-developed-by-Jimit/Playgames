import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GameCard } from "@/components/GameCard";
import { SearchBar } from "@/components/SearchBar";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import type { Game } from "@shared/schema";
import heroBackground from "@assets/generated_images/Gaming_hero_background_neon_circuits_85b74be9.png";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: games, isLoading } = useQuery<Game[]>({
    queryKey: ["/api/games"],
  });

  const filteredGames = games?.filter((game) => {
    const query = searchQuery.toLowerCase();
    return (
      game.title.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query) ||
      game.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <section 
        className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        
        <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg" data-testid="text-hero-title">
              Play Free Games
              <span className="block mt-2 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Anytime, Anywhere
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md" data-testid="text-hero-description">
              Discover amazing HTML5 games you can play instantly in your browser. No downloads, no waiting.
            </p>
          </div>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by game name or category..."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {isLoading ? (
          <LoadingSpinner text="Loading awesome games..." />
        ) : filteredGames && filteredGames.length > 0 ? (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground" data-testid="text-games-header">
                {searchQuery ? `Search Results (${filteredGames.length})` : "All Games"}
              </h2>
              {searchQuery && (
                <p className="text-sm text-muted-foreground" data-testid="text-search-count">
                  Showing {filteredGames.length} {filteredGames.length === 1 ? "game" : "games"}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-16 text-center" data-testid="empty-state">
            <div className="rounded-full bg-muted p-6">
              <svg className="h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground" data-testid="text-empty-title">No games found</h3>
            <p className="text-muted-foreground max-w-md" data-testid="text-empty-message">
              {searchQuery 
                ? `We couldn't find any games matching "${searchQuery}". Try a different search term.`
                : "No games available at the moment. Check back soon!"}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
