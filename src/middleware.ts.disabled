import {locales, localePrefix} from './navigation';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  //A list of all locales that are supported
  //locales: ['en', 'ko'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix,
  locales
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!_next|.*\\..*).*)']
};
