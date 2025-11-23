import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar, Footer } from '@/components';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://luxeoffices.ae'),
  title: {
    default: 'LuxeOffices | Premium Office Spaces in Dubai',
    template: '%s | LuxeOffices',
  },
  description:
    'Discover premium office and studio rental spaces in Dubai. Luxury workspaces in Downtown, Marina, DIFC, and more. Virtual 3D tours available.',
  keywords: [
    'Dubai office rental',
    'luxury office space',
    'Dubai coworking',
    'premium workspace Dubai',
    'DIFC office',
    'Dubai Marina office',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://luxeoffices.ae',
    siteName: 'LuxeOffices',
    title: 'LuxeOffices | Premium Office Spaces in Dubai',
    description:
      'Discover premium office and studio rental spaces in Dubai. Luxury workspaces with virtual 3D tours.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LuxeOffices - Premium Office Spaces in Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuxeOffices | Premium Office Spaces in Dubai',
    description:
      'Discover premium office and studio rental spaces in Dubai. Luxury workspaces with virtual 3D tours.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
