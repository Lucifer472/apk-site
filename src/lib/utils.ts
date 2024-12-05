import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateString(input: string, isMobile?: boolean): string {
  const maxLength = 28;

  if (input.length > maxLength && isMobile) {
    return input.slice(0, maxLength) + "...";
  }
  return input;
}

export function formatNumber(num: number) {
  if (num < 1e3) return num.toString(); // Less than 1,000
  if (num < 1e6) return (num / 1e3).toFixed(num % 1e3 === 0 ? 0 : 1) + "k"; // Thousands
  if (num < 1e9) return (num / 1e6).toFixed(num % 1e6 === 0 ? 0 : 1) + "M"; // Millions
  return (num / 1e9).toFixed(num % 1e9 === 0 ? 0 : 1) + "B"; // Billions
}
