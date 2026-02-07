import { z, defineCollection } from "astro:content";

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),

    // media
    img: z.string(),
    galleryImg1: z.string().optional(),
    galleryImg2: z.string().optional(),
    gallerySideImg1: z.string().optional(),
    gallerySideImg2: z.string().optional(),
    galleryImg3: z.string().optional(),
    galleryImg4: z.string().optional(),

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
  }),
});

export const collections = {
  work,
};
