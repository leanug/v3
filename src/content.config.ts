import { z, defineCollection } from "astro:content";

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),

    // media
    img: z.string(),

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
  }),
});

export const collections = {
  work,
};
