import { z } from "zod";

export const gameSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  thumbnailUrl: z.string(),
  iframeUrl: z.string(),
});

export type Game = z.infer<typeof gameSchema>;
