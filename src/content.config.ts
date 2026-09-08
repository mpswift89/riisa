import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    client: z.string(),
    category: z.enum(['Climatización', 'Ventilación', 'Energía Solar']),
    cover: image(),
    date: z.date(),
  }),
});

export const collections = { projects };