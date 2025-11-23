'use client';

import { useState, useEffect } from 'react';

export function useSiteConfig() {
  const [config, setConfig] = useState({
    domain: 'luxeoffices.ae',
    email: 'contact@luxeoffices.ae',
    siteName: 'LuxeOffices',
  });

  useEffect(() => {
    const hostname = window.location.hostname;
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
    const domain = isLocalhost ? 'luxeoffices.ae' : hostname;

    setConfig({
      domain,
      email: `contact@${domain}`,
      siteName: 'LuxeOffices',
    });
  }, []);

  return config;
}
