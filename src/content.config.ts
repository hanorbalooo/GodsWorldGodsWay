import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const podcasts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/podcasts' }),
  schema: z.object({
    title: z.string(),
    series: z.string(),
    season: z.number(),
    episode: z.number(),
    scripture: z.string(),
    publishDate: z.date(),
    audioEmbed: z.string().url(),
    description: z.string(),
    sponsor: z.string().optional(),
    slug: z.string(),
  }),
});

const kitchenVideos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kitchen-videos' }),
  schema: z.object({
    title: z.string(),
    series: z.string(),
    season: z.number(),
    scripture: z.string(),
    publishDate: z.string(),
    youtubeId: z.string(),
    description: z.string(),
    slug: z.string(),
  }),
});

export const collections = { podcasts, kitchenVideos };
