import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => blogSchema(context).extend({
        schema_type: z.enum(['Course', 'HowTo', 'TechArticle']).optional(),
        question: z.string().optional(),
        short_answer: z.string().optional(),
        author: z.string().optional(),
        categories: z.array(z.string()).optional(),
        course_provider: z.string().optional(),
        course_url: z.string().optional(),
        course_mode: z.string().optional(),
        course_language: z.string().optional(),
        course_duration: z.string().optional(),
        howto_steps: z.array(z.object({
          name: z.string(),
          text: z.string(),
          url: z.string().optional(),
        })).optional(),
      }),
    }),
  }),
};
