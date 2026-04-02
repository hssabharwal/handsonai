import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const docs = await getCollection('docs');
  const posts = docs
    .filter((entry) => entry.id.startsWith('blog/') && !entry.id.endsWith('blog/'))
    .filter((entry) => entry.data.date)
    .sort((a, b) => new Date(b.data.date!).getTime() - new Date(a.data.date!).getTime());

  return rss({
    title: 'Hands-on AI Playbook Changelog',
    description: 'Latest updates from the Hands-on AI Playbook — new content, plugins, and platform guides.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date!),
      description: post.data.description || '',
      link: `/${post.id.replace(/\.md$/, '')}/`,
    })),
  });
}
