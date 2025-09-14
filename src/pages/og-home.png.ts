import type { APIRoute } from 'astro';
import { siteConfig, profileConfig } from '@/config';
import { Resvg } from '@resvg/resvg-js';
import { getBannerBase64 } from '@/utils/banner-utils';

export const GET: APIRoute = async () => {
  
  // Get banner as base64
  const bannerBase64 = getBannerBase64();
  
  // Crear SVG para la imagen de Open Graph de la página principal
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
          <stop offset="0%" style="stop-color:rgba(255,255,255,0.9);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(255,255,255,0.7);stop-opacity:1" />
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
      <g transform="translate(60, 100)">
        <!-- Backdrop blur rectangle (behind the card) -->
        <rect x="0" y="0" width="1080" height="430" rx="24" 
              fill="rgba(255, 255, 255, 0.15)" 
              filter="url(#card-backdrop)"/>
        
        <!-- Main card -->
        <rect x="0" y="0" width="1080" height="430" rx="24" 
              fill="rgba(255, 255, 255, 0.25)" 
              stroke="rgba(255, 255, 255, 0.4)" stroke-width="2"
              filter="drop-shadow(0 20px 40px rgba(0,0,0,0.15))"/>
        
        <!-- Inner card for better text readability -->
        <rect x="20" y="20" width="1040" height="390" rx="16" 
              fill="rgba(255, 255, 255, 0.85)" 
              stroke="rgba(255, 255, 255, 0.3)" stroke-width="1"/>
        
        <!-- Content inside card -->
        <g transform="translate(50, 50)">
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
          <text x="0" y="240" fill="hsl(${siteConfig.themeColor.hue}, 60%, 40%)" 
                font-family="Roboto, Arial, sans-serif" font-size="24" font-weight="600" text-anchor="start">
            By ${escapeHtml(profileConfig.name)}
          </text>
          
          <!-- Bio -->
          <text x="0" y="280" fill="rgba(0, 0, 0, 0.6)" font-family="Roboto, Arial, sans-serif" 
                font-size="20" font-weight="400" text-anchor="start">
            ${escapeHtml(profileConfig.bio || 'Welcome to my blog')}
          </text>
          
          <!-- Website URL indicator -->
          <text x="0" y="320" fill="rgba(0, 0, 0, 0.5)" font-family="Roboto, Arial, sans-serif" 
                font-size="18" font-weight="400" text-anchor="start">
            Personal Blog & Learning Journey
          </text>
        </g>
        
        <!-- Date in bottom right of card -->
        <g transform="translate(1000, 470)">
          <text x="0" y="0" fill="rgba(0, 0, 0, 0.5)" font-family="Roboto, Arial, sans-serif" 
                font-size="16" font-weight="500" text-anchor="end">
            ${new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </text>
        </g>
      </g>
      
      <!-- Enhanced decorative badges -->
      <g transform="translate(580, 545)">
        <!-- Backdrop blur -->
        <rect x="-2" y="-2" width="114" height="44" rx="22" 
              fill="rgba(255, 255, 255, 0.1)" 
              filter="url(#backdrop-blur)"/>
        
        <!-- Badge -->
        <rect x="0" y="0" width="110" height="40" rx="20" 
              fill="url(#badge-gradient)" 
              stroke="rgba(255, 255, 255, 0.6)" stroke-width="1.5"
              filter="drop-shadow(0 4px 12px rgba(0,0,0,0.2))"/>
        
        <!-- Icon -->
        <circle cx="20" cy="20" r="10" fill="hsl(${siteConfig.themeColor.hue}, 70%, 50%)" opacity="0.9"/>
        <text x="20" y="26" fill="white" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">💻</text>
        
        <!-- Text -->
        <text x="95" y="26" fill="hsl(${siteConfig.themeColor.hue}, 60%, 30%)" 
              font-family="Roboto, Arial, sans-serif" font-size="15" font-weight="600" text-anchor="end">
          Code
        </text>
      </g>
      
      <g transform="translate(710, 545)">
        <!-- Backdrop blur -->
        <rect x="-2" y="-2" width="154" height="44" rx="22" 
              fill="rgba(255, 255, 255, 0.1)" 
              filter="url(#backdrop-blur)"/>
        
        <!-- Badge -->
        <rect x="0" y="0" width="150" height="40" rx="20" 
              fill="url(#badge-gradient)" 
              stroke="rgba(255, 255, 255, 0.6)" stroke-width="1.5"
              filter="drop-shadow(0 4px 12px rgba(0,0,0,0.2))"/>
        
        <!-- Icon -->
        <circle cx="20" cy="20" r="10" fill="hsl(${siteConfig.themeColor.hue}, 70%, 50%)" opacity="0.9"/>
        <text x="20" y="26" fill="white" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">📚</text>
        
        <!-- Text -->
        <text x="135" y="26" fill="hsl(${siteConfig.themeColor.hue}, 60%, 30%)" 
              font-family="Roboto, Arial, sans-serif" font-size="15" font-weight="600" text-anchor="end">
          Learning
        </text>
      </g>
      
      <g transform="translate(880, 545)">
        <!-- Backdrop blur -->
        <rect x="-2" y="-2" width="124" height="44" rx="22" 
              fill="rgba(255, 255, 255, 0.1)" 
              filter="url(#backdrop-blur)"/>
        
        <!-- Badge -->
        <rect x="0" y="0" width="120" height="40" rx="20" 
              fill="url(#badge-gradient)" 
              stroke="rgba(255, 255, 255, 0.6)" stroke-width="1.5"
              filter="drop-shadow(0 4px 12px rgba(0,0,0,0.2))"/>
        
        <!-- Icon -->
        <circle cx="20" cy="20" r="10" fill="hsl(${siteConfig.themeColor.hue}, 70%, 50%)" opacity="0.9"/>
        <text x="20" y="26" fill="white" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">✨</text>
        
        <!-- Text -->
        <text x="105" y="26" fill="hsl(${siteConfig.themeColor.hue}, 60%, 30%)" 
              font-family="Roboto, Arial, sans-serif" font-size="15" font-weight="600" text-anchor="end">
          Blog
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