import type { APIRoute } from 'astro';
import { siteConfig, profileConfig } from '@/config';
import { Resvg } from '@resvg/resvg-js';

export const GET: APIRoute = async () => {
  
  // Crear SVG para la imagen de Open Graph de la página principal
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
      <circle cx="1050" cy="500" r="30" fill="rgba(255, 255, 255, 0.08)" />
      
      <!-- Main Title -->
      <text x="80" y="180" fill="white" font-family="Roboto, Arial, sans-serif" font-size="64" font-weight="700" text-anchor="start">
        <tspan x="80" dy="0">${escapeHtml(siteConfig.title)}</tspan>
      </text>
      
      <!-- Subtitle -->
      <text x="80" y="280" fill="rgba(255, 255, 255, 0.8)" font-family="Roboto, Arial, sans-serif" font-size="32" font-weight="400" text-anchor="start">
        <tspan x="80" dy="0">${escapeHtml(siteConfig.subtitle.substring(0, 50))}</tspan>
        ${siteConfig.subtitle.length > 50 ? `<tspan x="80" dy="45">${escapeHtml(siteConfig.subtitle.substring(50))}</tspan>` : ''}
      </text>
      
      <!-- Author info -->
      <text x="80" y="450" fill="rgba(255, 255, 255, 0.9)" font-family="Roboto, Arial, sans-serif" font-size="24" font-weight="500" text-anchor="start">
        By ${escapeHtml(profileConfig.name)}
      </text>
      
      <!-- Bio -->
      <text x="80" y="500" fill="rgba(255, 255, 255, 0.7)" font-family="Roboto, Arial, sans-serif" font-size="20" font-weight="400" text-anchor="start">
        ${escapeHtml(profileConfig.bio || 'Welcome to my blog')}
      </text>
      
      <!-- Website URL indicator -->
      <text x="80" y="560" fill="rgba(255, 255, 255, 0.6)" font-family="Roboto, Arial, sans-serif" font-size="18" font-weight="400" text-anchor="start">
        Personal Blog & Learning Journey
      </text>
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
    console.error('Error generating home OG image:', error);
    
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