import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const objToArray = (
  obj: Record<string, string | number>
): string[][] => {
  const entries: string[][] = [];

  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      entries.push([key, String(value)]);
    }
  });

  return entries;
};

export const convertTimestampToDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
};
