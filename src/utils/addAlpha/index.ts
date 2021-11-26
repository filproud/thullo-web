import { extractColors } from 'utils/extractColors';

export function addAlpha(hex: string, alpha: number): string {
  const { r, g, b } = extractColors(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
