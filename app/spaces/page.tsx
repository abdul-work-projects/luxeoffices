import { Metadata } from 'next';
import { SpaceCard } from '@/components';
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

      {/* Filters Bar */}
      <section className="bg-white border-b border-navy-100 sticky top-20 z-40">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-navy-600">
              Showing <span className="font-semibold text-navy-900">{spaces.length}</span> available spaces
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm text-navy-600">Sort by:</label>
              <select className="px-4 py-2 rounded-lg border border-navy-200 bg-white text-navy-700 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
            Our team can help you find the perfect space tailored to your specific
            requirements. Contact us for personalized recommendations.
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}
