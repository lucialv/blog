import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig, profileConfig } from '@/config';
import { Resvg } from '@resvg/resvg-js';

export async function getStaticPaths() {
  const posts = await getCollection('posts');
  
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as any;
  
  // Helper function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  };

  // Prepare text content
  const title = truncateText(post.data.title, 80);
  const description = post.data.description ? truncateText(post.data.description, 120) : '';
  const tags = post.data.tags ? post.data.tags.slice(0, 3) : [];
  
  // Crear SVG para la imagen de Open Graph
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:hsl(${siteConfig.themeColor.hue}, 60%, 20%);stop-opacity:1" />
          <stop offset="100%" style="stop-color:hsl(${siteConfig.themeColor.hue}, 40%, 10%);stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bg)" />
      
      <!-- Decorative circles -->
      <circle cx="1120" cy="80" r="40" fill="rgba(255, 255, 255, 0.1)" />
      <circle cx="1140" cy="100" r="20" fill="rgba(255, 255, 255, 0.05)" />
      <circle cx="50" cy="550" r="60" fill="rgba(255, 255, 255, 0.05)" />
      
      <!-- Title -->
      <text x="80" y="180" fill="white" font-family="Roboto, Arial, sans-serif" font-size="56" font-weight="700" text-anchor="start">
        <tspan x="80" dy="0">${escapeHtml(title.substring(0, 25))}</tspan>
        ${title.length > 25 ? `<tspan x="80" dy="70">${escapeHtml(title.substring(25, 50))}</tspan>` : ''}
        ${title.length > 50 ? `<tspan x="80" dy="70">${escapeHtml(title.substring(50, 75))}</tspan>` : ''}
      </text>
      
      <!-- Description -->
      ${description ? `
        <text x="80" y="380" fill="rgba(255, 255, 255, 0.8)" font-family="Roboto, Arial, sans-serif" font-size="24" font-weight="400" text-anchor="start">
          <tspan x="80" dy="0">${escapeHtml(description.substring(0, 60))}</tspan>
          ${description.length > 60 ? `<tspan x="80" dy="35">${escapeHtml(description.substring(60))}</tspan>` : ''}
        </text>
      ` : ''}
      
      <!-- Site info -->
      <text x="80" y="540" fill="rgba(255, 255, 255, 0.9)" font-family="Roboto, Arial, sans-serif" font-size="20" font-weight="500" text-anchor="start">
        ${escapeHtml(profileConfig.name)} • ${escapeHtml(siteConfig.title)}
      </text>
      
      <!-- Tags -->
      ${tags.length > 0 ? tags.map((tag: string, index: number) => `
        <rect x="${900 + index * 90}" y="520" width="80" height="30" rx="15" fill="rgba(255, 255, 255, 0.1)" />
        <text x="${940 + index * 90}" y="540" fill="rgba(255, 255, 255, 0.7)" font-family="Roboto, Arial, sans-serif" font-size="14" font-weight="400" text-anchor="middle">
          #${escapeHtml(tag.substring(0, 8))}
        </text>
      `).join('') : ''}
    </svg>
  `;

  // Convertir SVG a PNG
  try {
    const resvg = new Resvg(svg, {
      background: 'rgba(0, 0, 0, 0)',
      fitTo: {
        mode: 'width',
        value: 1200,
      },
    });
    
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(new Uint8Array(pngBuffer), {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    
    // Fallback a SVG si hay error
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }
};

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}