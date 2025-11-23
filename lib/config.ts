import { headers } from 'next/headers';

const DEFAULT_DOMAIN = 'luxeoffices.ae';

function normalizeDomain(hostname: string): string {
  // Handle localhost for development
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('localhost:')) {
    return DEFAULT_DOMAIN;
  }
  // Remove port if present
  return hostname.split(':')[0];
}

// For server components - reads from request headers
export function getServerSiteConfig() {
  const headersList = headers();
  const host = headersList.get('host') || DEFAULT_DOMAIN;
  const domain = normalizeDomain(host);

  return {
    domain,
    email: `contact@${domain}`,
    siteName: 'LuxeOffices',
  };
}

// Static fallback for build time and static generation
export const siteConfig = {
  domain: DEFAULT_DOMAIN,
  email: `contact@${DEFAULT_DOMAIN}`,
  siteName: 'LuxeOffices',
};
