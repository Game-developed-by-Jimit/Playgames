import type { Game } from "@shared/schema";

export interface IStorage {
  getGames(): Promise<Game[]>;
  getGameById(id: string): Promise<Game | undefined>;
}

export class MemStorage implements IStorage {
  private games: Map<string, Game>;

  constructor() {
    this.games = new Map();
    this.initializeGames();
  }

  private initializeGames() {
    const initialGames: Game[] = [
      {
        id: "2048",
        title: "2048 Puzzle",
        description: "Join the numbers and get to the 2048 tile! Swipe to move tiles and combine matching numbers. A simple yet addictive puzzle game.",
        category: "Puzzle",
        thumbnailUrl: "/attached_assets/generated_images/Puzzle_game_colorful_blocks_308c4b68.png",
        iframeUrl: "https://play2048.co/",
      },
      {
        id: "asteroids",
        title: "Asteroids Classic",
        description: "Pilot your spaceship through an asteroid field! Shoot asteroids and flying saucers to earn points. A retro arcade classic.",
        category: "Arcade",
        thumbnailUrl: "/attached_assets/generated_images/Space_shooter_spaceship_asteroids_e5e225c4.png",
        iframeUrl: "https://freeasteroids.org/",
      },
      {
        id: "tetris",
        title: "Tetris Block Puzzle",
        description: "The classic falling blocks game! Rotate and position pieces to create complete lines. Fast-paced action and strategy combined.",
        category: "Puzzle",
        thumbnailUrl: "/attached_assets/generated_images/Platform_game_pixel_character_bece568f.png",
        iframeUrl: "https://www.freetetris.org/game.php",
      },
      {
        id: "pacman",
        title: "Pac-Man Adventure",
        description: "Navigate the maze, eat dots, and avoid ghosts! Collect power pellets to turn the tables on your pursuers in this timeless classic.",
        category: "Arcade",
        thumbnailUrl: "/attached_assets/generated_images/Puzzle_game_colorful_blocks_308c4b68.png",
        iframeUrl: "https://freepacman.org/",
      },
    ];

    initialGames.forEach((game) => {
      this.games.set(game.id, game);
    });
  }

  async getGames(): Promise<Game[]> {
    return Array.from(this.games.values());
  }

  async getGameById(id: string): Promise<Game | undefined> {
    return this.games.get(id);
  }
}

export const storage = new MemStorage();
