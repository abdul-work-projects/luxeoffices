import { Metadata } from 'next';
import { Suspense } from 'react';
import SpacesFilter from '@/components/SpacesFilter';
import { getAllSpaces } from '@/data/spaces';

export const metadata: Metadata = {
  title: 'Premium Office Spaces',
  description:
    'Browse our collection of premium office spaces and studios in Dubai. From executive suites in Downtown to creative spaces in Marina.',
};

export default function SpacesPage() {
  const spaces = getAllSpaces();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-luxury py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-gold-400 font-medium mb-4 tracking-wider uppercase text-sm">
              Our Spaces
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Office Spaces in Dubai
            </h1>
            <p className="text-xl text-navy-200">
              Discover our curated collection of luxury workspaces across Dubai&apos;s
              most prestigious locations. Each space offers world-class amenities and
              immersive 3D virtual tours.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-8 text-center">Loading spaces...</div>}>
        <SpacesFilter spaces={spaces} />
      </Suspense>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
            Our team can help you find the perfect space tailored to your specific
            requirements. Contact us for personalized recommendations.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}
