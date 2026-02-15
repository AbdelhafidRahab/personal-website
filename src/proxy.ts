import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // We skip:
  // - api (API routes)
  // - _next (Next.js internals)
  // - static files (images, favicon, etc)
  matcher: ["/", "/(ar|en)/:path*"],
};
