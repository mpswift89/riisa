import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    client: z.string(),
    category: z.enum(['Climatización', 'Ventilación', 'Energía Solar']),
    cover: image().optional(),
    date: z.date(),
  }),
});

export const collections = { projects };