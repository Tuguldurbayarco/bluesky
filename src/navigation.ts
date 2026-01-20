
// Re-export Next.js navigation components
export { redirect, usePathname, useRouter } from 'next/navigation';
export { default as Link } from 'next/link';

export const locales = ['en', 'ko', 'hb'] as const;
export const localePrefix = 'as-needed'; // Default