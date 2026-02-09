import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Optional: Set path prefix hidden for default locale?
  // We keep it 'always' to enforce /ar and /en consistency
  localePrefix: 'always',

  // Disable browser language detection
  //localeDetection: false 
});

// Lightweight wrappers around Next.js' navigation APIs
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);