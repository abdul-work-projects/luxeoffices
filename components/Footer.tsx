'use client';

import Link from 'next/link';
import { useSiteConfig } from '@/lib/hooks';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Spaces', href: '/spaces' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Executive Offices', href: '/spaces' },
    { label: 'Meeting Rooms', href: '/spaces' },
    { label: 'Co-Working Spaces', href: '/spaces' },
    { label: 'Virtual Tours', href: '/spaces' },
  ],
  locations: [
    { label: 'Bur Dubai', href: '/spaces?location=bur-dubai' },
    { label: 'Deira', href: '/spaces?location=deira' },
    { label: 'Sheikh Zayed Road', href: '/spaces?location=sheikh-zayed-road' },
    { label: 'Business Bay', href: '/spaces?location=business-bay' },
    { label: 'Port Saeed', href: '/spaces?location=port-saeed' },
    { label: 'Oud Metha', href: '/spaces?location=oud-metha' },
    { label: 'The Greens', href: '/spaces?location=the-greens' },
  ],
};

export default function Footer() {
  const { email } = useSiteConfig();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold">
                Luxe<span className="text-gold-400">Offices</span>
              </span>
            </Link>
            <p className="text-navy-300 mb-6">
              Premium office spaces in Dubai&apos;s most prestigious locations.
              Experience luxury workspaces designed for success.
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {email}
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Locations</h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-navy-400 text-sm">
              &copy; {new Date().getFullYear()} LuxeOffices. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/about" className="text-navy-400 hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="text-navy-400 hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
