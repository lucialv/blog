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
  const title = truncateText(post.data.title, 60);
  const description = post.data.description ? truncateText(post.data.description, 100) : '';
  const tags = post.data.tags ? post.data.tags.slice(0, 3) : [];
  
  // Crear SVG para la imagen de Open Graph con el banner como fondo
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Beautiful gradient that matches your site's aesthetic -->
        <linearGradient id="mainBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
          <stop offset="30%" style="stop-color:#FFB6C1;stop-opacity:1" />
          <stop offset="60%" style="stop-color:#DDA0DD;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#E6E6FA;stop-opacity:1" />
        </linearGradient>
        
        <!-- Overlay for text readability -->
        <linearGradient id="overlay" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(0,0,0,0.2);stop-opacity:1" />
        </linearGradient>
        
        <!-- Subtle texture -->
        <pattern id="texture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/>
          <circle cx="25" cy="25" r="0.5" fill="rgba(255,255,255,0.05)"/>
          <circle cx="75" cy="75" r="0.5" fill="rgba(255,255,255,0.05)"/>
        </pattern>
      </defs>
      
      <!-- Background with dreamy gradient -->
      <rect width="1200" height="630" fill="url(#mainBg)" />
      
      <!-- Texture overlay -->
      <rect width="1200" height="630" fill="url(#texture)" />
      
      <!-- Soft overlay -->
      <rect width="1200" height="630" fill="url(#overlay)" />
      
      <!-- Decorative floating elements -->
      <g opacity="0.3">
        <circle cx="100" cy="100" r="20" fill="rgba(255,255,255,0.4)" />
        <circle cx="1100" cy="150" r="30" fill="rgba(255,255,255,0.3)" />
        <circle cx="200" cy="500" r="15" fill="rgba(255,255,255,0.5)" />
        <circle cx="1000" cy="500" r="25" fill="rgba(255,255,255,0.2)" />
        
        <!-- Floating crystals/books -->
        <g transform="translate(950, 80) rotate(15)">
          <rect x="0" y="0" width="40" height="60" rx="4" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
        </g>
        
        <g transform="translate(150, 450) rotate(-20)">
          <rect x="0" y="0" width="35" height="50" rx="3" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
        </g>
      </g>
      
      <!-- Main content card -->
      <g transform="translate(60, 120)">
        <!-- Glass-morphism card background -->
        <rect x="0" y="0" width="1080" height="390" rx="24" 
              fill="rgba(255, 255, 255, 0.85)" 
              stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"
              filter="drop-shadow(0 20px 40px rgba(0,0,0,0.1))"/>
        
        <!-- Content inside card -->
        <g transform="translate(40, 40)">
          <!-- Title -->
          <text x="0" y="60" fill="rgba(0, 0, 0, 0.9)" font-family="Roboto, Arial, sans-serif" 
                font-size="48" font-weight="700" text-anchor="start">
            <tspan x="0" dy="0">${escapeHtml(title.substring(0, 30))}</tspan>
            ${title.length > 30 ? `<tspan x="0" dy="60">${escapeHtml(title.substring(30))}</tspan>` : ''}
          </text>
          
          <!-- Description -->
          ${description ? `
            <text x="0" y="${title.length > 30 ? '200' : '140'}" fill="rgba(0, 0, 0, 0.7)" 
                  font-family="Roboto, Arial, sans-serif" font-size="24" font-weight="400" text-anchor="start">
              <tspan x="0" dy="0">${escapeHtml(description.substring(0, 50))}</tspan>
              ${description.length > 50 ? `<tspan x="0" dy="32">${escapeHtml(description.substring(50))}</tspan>` : ''}
            </text>
          ` : ''}
          
          <!-- Author and site info -->
          <text x="0" y="310" fill="rgba(0, 0, 0, 0.6)" font-family="Roboto, Arial, sans-serif" 
                font-size="20" font-weight="500" text-anchor="start">
            ${escapeHtml(profileConfig.name)} • ${escapeHtml(siteConfig.title)}
          </text>
        </g>
      </g>
      
      <!-- Tags as floating bubbles -->
      ${tags.length > 0 ? tags.map((tag: string, index: number) => `
        <g transform="translate(${80 + index * 130}, 550)">
          <rect x="0" y="0" width="${Math.min(tag.length * 12 + 20, 110)}" height="40" rx="20" 
                fill="rgba(255, 255, 255, 0.9)" 
                stroke="rgba(255, 255, 255, 0.4)" stroke-width="1"
                filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
          <text x="${Math.min(tag.length * 6 + 10, 55)}" y="26" fill="hsl(${siteConfig.themeColor.hue}, 60%, 40%)" 
                font-family="Roboto, Arial, sans-serif" font-size="16" font-weight="500" text-anchor="middle">
            #${escapeHtml(tag.substring(0, 10))}
          </text>
        </g>
      `).join('') : ''}
      
      <!-- Website branding bubble in top right -->
      <g transform="translate(950, 40)">
        <rect x="0" y="0" width="200" height="50" rx="25" 
              fill="rgba(255, 255, 255, 0.9)" 
              stroke="rgba(255, 255, 255, 0.4)" stroke-width="1"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
        <text x="100" y="32" fill="hsl(${siteConfig.themeColor.hue}, 60%, 40%)" 
              font-family="Roboto, Arial, sans-serif" font-size="18" font-weight="600" text-anchor="middle">
          Lucia's Blog
        </text>
      </g>
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