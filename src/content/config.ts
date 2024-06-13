// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.object({
            name: z.string(),
            image: z.string(),
        }),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        category: z.object({
            name: z.string(),
            slug: z.string(),
            episode: z.number().optional(),
        }),
    }),
});

const journeyCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.object({
            name: z.string(),
            image: z.string(),
        }),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        category: z.object({
            name: z.string(),
            slug: z.string(),
        }),
    }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'blog': blogCollection,
    'journeys': journeyCollection,
};