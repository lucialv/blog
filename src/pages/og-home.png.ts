import type { APIRoute } from 'astro';
import { siteConfig, profileConfig } from '@/config';
import { Resvg } from '@resvg/resvg-js';

export const GET: APIRoute = async () => {
  
  // Crear SVG para la imagen de Open Graph de la página principal
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
      <g opacity="0.4">
        <circle cx="100" cy="100" r="25" fill="rgba(255,255,255,0.5)" />
        <circle cx="1100" cy="150" r="35" fill="rgba(255,255,255,0.3)" />
        <circle cx="200" cy="500" r="18" fill="rgba(255,255,255,0.6)" />
        <circle cx="1000" cy="480" r="28" fill="rgba(255,255,255,0.2)" />
        
        <!-- Floating books/crystals -->
        <g transform="translate(950, 80) rotate(15)">
          <rect x="0" y="0" width="45" height="65" rx="5" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
          <line x1="10" y1="15" x2="35" y2="15" stroke="rgba(200,200,255,0.6)" stroke-width="1"/>
          <line x1="10" y1="25" x2="30" y2="25" stroke="rgba(200,200,255,0.6)" stroke-width="1"/>
        </g>
        
        <g transform="translate(120, 420) rotate(-20)">
          <rect x="0" y="0" width="40" height="55" rx="4" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
          <line x1="8" y1="12" x2="32" y2="12" stroke="rgba(255,200,255,0.6)" stroke-width="1"/>
          <line x1="8" y1="20" x2="28" y2="20" stroke="rgba(255,200,255,0.6)" stroke-width="1"/>
        </g>
        
        <!-- Heart element -->
        <g transform="translate(1050, 400)">
          <circle cx="15" cy="15" r="15" fill="rgba(255,182,193,0.6)"/>
          <text x="15" y="21" fill="rgba(255,255,255,0.9)" font-family="Arial" font-size="16" text-anchor="middle">♡</text>
        </g>
      </g>
      
      <!-- Main content card -->
      <g transform="translate(60, 100)">
        <!-- Glass-morphism card background -->
        <rect x="0" y="0" width="1080" height="430" rx="24" 
              fill="rgba(255, 255, 255, 0.85)" 
              stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"
              filter="drop-shadow(0 20px 40px rgba(0,0,0,0.1))"/>
        
        <!-- Content inside card -->
        <g transform="translate(40, 40)">
          <!-- Main Title -->
          <text x="0" y="80" fill="rgba(0, 0, 0, 0.9)" font-family="Roboto, Arial, sans-serif" 
                font-size="64" font-weight="700" text-anchor="start">
            ${escapeHtml(siteConfig.title)}
          </text>
          
          <!-- Subtitle -->
          <text x="0" y="140" fill="rgba(0, 0, 0, 0.7)" font-family="Roboto, Arial, sans-serif" 
                font-size="28" font-weight="400" text-anchor="start">
            <tspan x="0" dy="0">${escapeHtml(siteConfig.subtitle.substring(0, 45))}</tspan>
            ${siteConfig.subtitle.length > 45 ? `<tspan x="0" dy="36">${escapeHtml(siteConfig.subtitle.substring(45))}</tspan>` : ''}
          </text>
          
          <!-- Author info -->
          <text x="0" y="260" fill="hsl(${siteConfig.themeColor.hue}, 60%, 40%)" 
                font-family="Roboto, Arial, sans-serif" font-size="24" font-weight="600" text-anchor="start">
            By ${escapeHtml(profileConfig.name)}
          </text>
          
          <!-- Bio -->
          <text x="0" y="300" fill="rgba(0, 0, 0, 0.6)" font-family="Roboto, Arial, sans-serif" 
                font-size="20" font-weight="400" text-anchor="start">
            ${escapeHtml(profileConfig.bio || 'Welcome to my blog')}
          </text>
          
          <!-- Website URL indicator -->
          <text x="0" y="350" fill="rgba(0, 0, 0, 0.5)" font-family="Roboto, Arial, sans-serif" 
                font-size="18" font-weight="400" text-anchor="start">
            Personal Blog & Learning Journey
          </text>
        </g>
      </g>
      
      <!-- Decorative tags -->
      <g transform="translate(780, 550)">
        <rect x="0" y="0" width="140" height="40" rx="20" 
              fill="rgba(255, 255, 255, 0.9)" 
              stroke="rgba(255, 255, 255, 0.4)" stroke-width="1"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
        <text x="70" y="26" fill="hsl(${siteConfig.themeColor.hue}, 60%, 40%)" 
              font-family="Roboto, Arial, sans-serif" font-size="16" font-weight="500" text-anchor="middle">
          #Learning
        </text>
      </g>
      
      <g transform="translate(940, 550)">
        <rect x="0" y="0" width="120" height="40" rx="20" 
              fill="rgba(255, 255, 255, 0.9)" 
              stroke="rgba(255, 255, 255, 0.4)" stroke-width="1"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
        <text x="60" y="26" fill="hsl(${siteConfig.themeColor.hue}, 60%, 40%)" 
              font-family="Roboto, Arial, sans-serif" font-size="16" font-weight="500" text-anchor="middle">
          #Blog
        </text>
      </g>
      
      <g transform="translate(650, 550)">
        <rect x="0" y="0" width="100" height="40" rx="20" 
              fill="rgba(255, 255, 255, 0.9)" 
              stroke="rgba(255, 255, 255, 0.4)" stroke-width="1"
              filter="drop-shadow(0 4px 8px rgba(0,0,0,0.1))"/>
        <text x="50" y="26" fill="hsl(${siteConfig.themeColor.hue}, 60%, 40%)" 
              font-family="Roboto, Arial, sans-serif" font-size="16" font-weight="500" text-anchor="middle">
          #Code
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