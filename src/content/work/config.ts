import { defineCollection, z } from "astro:content";

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    slug: z.string(),
    description: z.string(),
    outbound: z.string().url().optional(), // optional external link
  }),
});

export const collections = work
