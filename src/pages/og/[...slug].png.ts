import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig, profileConfig } from '@/config';
import { Resvg } from '@resvg/resvg-js';
import { getBannerBase64 } from '@/utils/banner-utils';

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
  // Limit tags to ensure they fit within the image width
  const tags = post.data.tags ? post.data.tags.slice(0, 4) : [];
  
  // Get banner as base64
  const bannerBase64 = getBannerBase64();
  
  // Crear SVG para la imagen de Open Graph con el banner real como fondo
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Backdrop blur filter -->
        <filter id="backdrop-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8"/>
        </filter>
        
        <!-- Stronger backdrop blur for cards -->
        <filter id="card-backdrop" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0"/>
        </filter>
        
        <!-- Subtle overlay for better readability -->
        <linearGradient id="overlay" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(0,0,0,0.1);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgba(0,0,0,0.2);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(0,0,0,0.3);stop-opacity:1" />
        </linearGradient>
        
        <!-- Badge gradient -->
        <linearGradient id="badge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(255,255,255,0.95);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(255,255,255,0.85);stop-opacity:1" />
        </linearGradient>
        
        <!-- Tag gradient -->
        <linearGradient id="tag-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(255,255,255,0.98);stop-opacity:1" />
          <stop offset="50%" style="stop-color:rgba(255,255,255,0.92);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(248,250,252,0.9);stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Banner background -->
      ${bannerBase64 ? `<image href="${bannerBase64}" x="0" y="0" width="1200" height="630" preserveAspectRatio="xMidYMid slice" />` : `
        <!-- Fallback gradient if banner fails -->
        <defs>
          <linearGradient id="fallback" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
            <stop offset="30%" style="stop-color:#FFB6C1;stop-opacity:1" />
            <stop offset="60%" style="stop-color:#DDA0DD;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#E6E6FA;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#fallback)" />
      `}
      
      <!-- Subtle overlay for better text readability -->
      <rect width="1200" height="630" fill="url(#overlay)" />
      
      <!-- Main content card with backdrop blur -->
      <g transform="translate(60, 120)">
        <!-- Backdrop blur rectangle (behind the card) -->
        <rect x="0" y="0" width="1080" height="390" rx="24" 
              fill="rgba(255, 255, 255, 0.15)" 
              filter="url(#card-backdrop)"/>
        
        <!-- Main card -->
        <rect x="0" y="0" width="1080" height="390" rx="24" 
              fill="rgba(255, 255, 255, 0.25)" 
              stroke="rgba(255, 255, 255, 0.4)" stroke-width="2"
              filter="drop-shadow(0 20px 40px rgba(0,0,0,0.15))"/>
        
        <!-- Inner card for better text readability -->
        <rect x="20" y="20" width="1040" height="350" rx="16" 
              fill="rgba(255, 255, 255, 0.85)" 
              stroke="rgba(255, 255, 255, 0.3)" stroke-width="1"/>
        
        <!-- Content inside card -->
        <g transform="translate(50, 50)">
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
          <text x="0" y="290" fill="rgba(0, 0, 0, 0.6)" font-family="Roboto, Arial, sans-serif" 
                font-size="20" font-weight="500" text-anchor="start">
            ${escapeHtml(profileConfig.name)} • ${escapeHtml(siteConfig.title)}
          </text>
        </g>
      </g>
      
      <!-- Enhanced tags as premium badges -->
      ${tags.length > 0 ? tags.map((tag: string, index: number) => {
        const tagWidth = Math.min(tag.length * 11 + 50, 140);
        const xPos = 80 + index * (tagWidth + 12);
        // Skip tags that would go beyond the image width
        if (xPos + tagWidth > 1120) return '';
        
        return `
          <g transform="translate(${xPos}, 550)">
            <!-- Backdrop blur for tag -->
            <rect x="-2" y="-2" width="${tagWidth + 4}" height="44" rx="22" 
                  fill="rgba(255, 255, 255, 0.15)" 
                  filter="url(#backdrop-blur)"/>
            
            <!-- Tag background with gradient -->
            <rect x="0" y="0" width="${tagWidth}" height="40" rx="20" 
                  fill="url(#tag-gradient)" 
                  stroke="rgba(255, 255, 255, 0.9)" stroke-width="1.5"
                  filter="drop-shadow(0 4px 12px rgba(0,0,0,0.25))"/>
            
            <!-- Tag icon circle -->
            <circle cx="20" cy="20" r="8" fill="hsl(${siteConfig.themeColor.hue}, 80%, 55%)" opacity="1"/>
            <text x="20" y="25" fill="white" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">#</text>
            
            <!-- Tag text -->
            <text x="${tagWidth - 12}" y="26" fill="hsl(${siteConfig.themeColor.hue}, 80%, 25%)" 
                  font-family="Inter, Roboto, Arial, sans-serif" font-size="14" font-weight="600" text-anchor="end">
              ${escapeHtml(tag.substring(0, 14))}
            </text>
          </g>
        `;
      }).filter(Boolean).join('') : ''}
      
      <!-- Date in bottom right of card -->
      <g transform="translate(1000, 470)">
        <text x="0" y="0" fill="rgba(0, 0, 0, 0.5)" font-family="Roboto, Arial, sans-serif" 
              font-size="16" font-weight="500" text-anchor="end">
          ${new Date(post.data.published).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </text>
      </g>
      
      <!-- Website branding badge with backdrop blur -->
      <g transform="translate(950, 40)">
        <!-- Backdrop blur -->
        <rect x="-2" y="-2" width="204" height="54" rx="27" 
              fill="rgba(255, 255, 255, 0.1)" 
              filter="url(#backdrop-blur)"/>
        
        <!-- Main badge -->
        <rect x="0" y="0" width="200" height="50" rx="25" 
              fill="url(#badge-gradient)" 
              stroke="rgba(255, 255, 255, 0.6)" stroke-width="1.5"
              filter="drop-shadow(0 4px 12px rgba(0,0,0,0.2))"/>
        
        <!-- Heart icon -->
        <circle cx="25" cy="25" r="10" fill="hsl(${siteConfig.themeColor.hue}, 70%, 60%)" opacity="0.9"/>
        <text x="25" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">♡</text>
        
        <!-- Blog name -->
        <text x="175" y="32" fill="hsl(${siteConfig.themeColor.hue}, 60%, 30%)" 
              font-family="Roboto, Arial, sans-serif" font-size="16" font-weight="700" text-anchor="end">
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