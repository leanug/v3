import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),

    // media
    img: z.string(),
    video: z.string().optional(),

    // content
    description: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),

    // links
    link: z.string().url().optional(),
    outbound: z.string().url().optional(),

    // flags
    published: z.boolean(),
    featured: z.boolean().optional(),
    more: z.boolean().optional(),
    order: z.number().optional(),
    cols: z.number().optional(),
  }),
});

export const collections = {
  work,
};