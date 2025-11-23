import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ImageGallery,
  MatterportViewer,
  AmenitiesList,
  ContactForm,
  Calendar,
  Button,
} from '@/components';
import { getSpaceById, getAllSpaces } from '@/data/spaces';

interface SpacePageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const spaces = getAllSpaces();
  return spaces.map((space) => ({
    id: space.id,
  }));
}

export async function generateMetadata({ params }: SpacePageProps): Promise<Metadata> {
  const space = getSpaceById(params.id);

  if (!space) {
    return {
      title: 'Space Not Found',
    };
  }

  return {
    title: space.name,
    description: space.shortDescription,
    openGraph: {
      title: `${space.name} | LuxeOffices Dubai`,
      description: space.shortDescription,
      images: [
        {
          url: space.images[0],
          width: 1200,
          height: 630,
          alt: space.name,
        },
      ],
    },
  };
}

export default function SpacePage({ params }: SpacePageProps) {
  const space = getSpaceById(params.id);

  if (!space) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-navy-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center text-sm">
            <Link href="/" className="text-navy-500 hover:text-gold-600 transition-colors">
              Home
            </Link>
            <span className="mx-2 text-navy-400">/</span>
            <Link href="/spaces" className="text-navy-500 hover:text-gold-600 transition-colors">
              Spaces
            </Link>
            <span className="mx-2 text-navy-400">/</span>
            <span className="text-navy-900 font-medium">{space.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {space.featured && (
                    <span className="bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Available
                  </span>
                </div>
                <h1 className="heading-2 mb-3">{space.name}</h1>
                <div className="flex items-center text-navy-600">
                  <svg
                    className="w-5 h-5 mr-2 text-gold-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{space.location}</span>
                </div>
              </div>

              {/* Matterport Viewer - Show first for 3D spaces */}
              {space.matterportId && (
                <MatterportViewer matterportId={space.matterportId} spaceName={space.name} />
              )}

              {/* Image Gallery */}
              <ImageGallery images={space.images} alt={space.name} />

              {/* Description */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <h2 className="text-xl font-bold text-navy-950 mb-4">About This Space</h2>
                <div className="prose prose-navy max-w-none">
                  {space.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-navy-600 mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {space.capacity && (
                  <div className="bg-navy-50 rounded-xl p-4 text-center">
                    <svg
                      className="w-8 h-8 mx-auto mb-2 text-gold-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="text-2xl font-bold text-navy-900">{space.capacity}</div>
                    <div className="text-sm text-navy-600">Capacity</div>
                  </div>
                )}
                {space.size && (
                  <div className="bg-navy-50 rounded-xl p-4 text-center">
                    <svg
                      className="w-8 h-8 mx-auto mb-2 text-gold-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    <div className="text-2xl font-bold text-navy-900">{space.size.toLocaleString()}</div>
                    <div className="text-sm text-navy-600">Sq. Ft.</div>
                  </div>
                )}
                <div className="bg-navy-50 rounded-xl p-4 text-center col-span-2 md:col-span-2">
                  <svg
                    className="w-8 h-8 mx-auto mb-2 text-gold-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-2xl font-bold text-navy-900">AED {space.pricePerYear.toLocaleString()}</div>
                  <div className="text-sm text-navy-600">Per Year</div>
                </div>
              </div>

              {/* Amenities */}
              <AmenitiesList amenities={space.amenities} />
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Pricing Card */}
                <div className="bg-white rounded-2xl shadow-card p-6">
                  <h3 className="text-lg font-bold text-navy-950 mb-4">Pricing</h3>
                  <div className="flex items-center justify-between p-4 bg-gold-50 rounded-xl">
                    <div>
                      <div className="text-sm text-navy-600">Yearly Rate</div>
                      <div className="text-2xl font-bold text-navy-950">
                        AED {space.pricePerYear.toLocaleString()}
                      </div>
                    </div>
                    <svg
                      className="w-10 h-10 text-gold-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-navy-500 mt-4">
                    * Prices exclude VAT. Contact us for flexible terms.
                  </p>
                </div>

                {/* Calendar */}
                <Calendar />

                {/* Contact Form */}
                <ContactForm spaceName={space.name} spaceId={space.id} />

                {/* Quick Contact */}
                <div className="bg-navy-950 rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">Need Help?</h3>
                  <p className="text-navy-300 text-sm mb-4">
                    Our team is available to assist you with any questions.
                  </p>
                  <Button
                    href="/contact"
                    variant="primary"
                    className="w-full"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Spaces */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="heading-3 mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getAllSpaces()
              .filter((s) => s.id !== space.id)
              .slice(0, 3)
              .map((relatedSpace) => (
                <Link
                  key={relatedSpace.id}
                  href={`/spaces/${relatedSpace.id}`}
                  className="group card-luxury p-4"
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
                    <Image
                      src={relatedSpace.images[0]}
                      alt={relatedSpace.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                    {relatedSpace.name}
                  </h3>
                  <p className="text-sm text-navy-600">{relatedSpace.location}</p>
                  <p className="text-sm font-semibold text-gold-600 mt-2">
                    AED {relatedSpace.pricePerYear.toLocaleString()}/year
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
