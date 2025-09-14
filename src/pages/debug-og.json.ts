import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');
  
  const ogImages = posts.map(post => ({
    slug: post.slug,
    title: post.data.title,
    ogImageUrl: `/og/${post.slug}.png`,
    description: post.data.description || 'No description',
    tags: post.data.tags || []
  }));

  const homeImage = {
    slug: 'home',
    title: 'Home Page',
    ogImageUrl: '/og-home.png',
    description: 'Homepage OG image'
  };

  return new Response(
    JSON.stringify([homeImage, ...ogImages], null, 2),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};