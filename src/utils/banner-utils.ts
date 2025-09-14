import { readFileSync } from 'fs';
import { join } from 'path';

let bannerBase64: string | null = null;

export function getBannerBase64(): string {
  if (bannerBase64) return bannerBase64;
  
  try {
    const bannerPath = join(process.cwd(), 'public', 'banner.png');
    const bannerBuffer = readFileSync(bannerPath);
    bannerBase64 = `data:image/png;base64,${bannerBuffer.toString('base64')}`;
    return bannerBase64;
  } catch (error) {
    console.error('Error loading banner:', error);
    // Fallback to gradient if banner can't be loaded
    return '';
  }
}