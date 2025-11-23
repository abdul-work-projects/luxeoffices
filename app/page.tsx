import Image from 'next/image';
import Link from 'next/link';
import { SpaceCard, Button } from '@/components';
import { getFeaturedSpaces } from '@/data/spaces';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Prime Locations',
    description: 'Prestigious addresses in Downtown Dubai, DIFC, Marina, and Palm Jumeirah.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Luxury Standards',
    description: 'Meticulously designed spaces with premium finishes and state-of-the-art amenities.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Terms',
    description: 'Hourly, daily, or monthly rentals to match your business needs and schedule.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: '3D Virtual Tours',
    description: 'Explore every space in immersive 3D before your visit with Matterport technology.',
  },
];

const amenities = [
  { name: 'High-Speed WiFi', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0' },
  { name: '24/7 Access', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'Meeting Rooms', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { name: 'Concierge Service', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { name: 'Valet Parking', icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' },
  { name: 'Premium Coffee', icon: 'M3 3h18v18H3V3z M12 8v8' },
  { name: 'Fitness Center', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { name: 'Business Lounge', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
];

export default function HomePage() {
  const featuredSpaces = getFeaturedSpaces();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Dubai skyline with modern office buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/50" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-gold-400 font-medium mb-4 tracking-wider uppercase text-sm">
              Premium Office Spaces in Dubai
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Your Business in{' '}
              <span className="text-gold-400">Dubai&apos;s Finest</span> Workspaces
            </h1>
            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Discover prestigious office spaces in the heart of Dubai. From executive
              suites with Burj Khalifa views to creative studios on the Marina, find
              your perfect workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/spaces" size="lg">
                Explore Spaces
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-950">
                Book a Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Spaces Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              Handpicked Selection
            </span>
            <h2 className="heading-2 mt-2">Featured Spaces</h2>
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto">
              Explore our most sought-after premium office spaces, each offering a
              unique blend of luxury, functionality, and prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/spaces" variant="outline">
              View All Spaces
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-navy-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold-400 font-medium tracking-wider uppercase text-sm">
              Why LuxeOffices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              The Premier Choice for Dubai Businesses
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              We curate exceptional workspaces that reflect the ambition and
              sophistication of Dubai&apos;s business landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-navy-900/50 border border-navy-800 hover:border-gold-500/50 transition-colors group"
              >
                <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gold-400 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-navy-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Overview Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
                Premium Amenities
              </span>
              <h2 className="heading-2 mt-2 mb-6">
                Everything You Need for Success
              </h2>
              <p className="text-navy-600 mb-8 leading-relaxed">
                Our spaces are thoughtfully equipped with world-class amenities to
                ensure your comfort and productivity. From high-speed connectivity
                to personalized concierge services, we&apos;ve considered every detail.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={amenity.icon} />
                      </svg>
                    </div>
                    <span className="text-navy-700 font-medium text-sm">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Luxury office interior with modern amenities"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy-500/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
            alt="Dubai downtown at night"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Find Your <span className="text-gold-400">Perfect Space</span>?
          </h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Schedule a personalized tour of our premium office spaces. Our team
            will help you find the ideal workspace for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Schedule a Tour
            </Button>
            <Link
              href="tel:+97141234567"
              className="btn-outline border-white text-white hover:bg-white hover:text-navy-950 px-8 py-4 text-lg"
            >
              Call +971 4 123 4567
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-navy-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Premium Spaces' },
              { value: '6', label: 'Prime Locations' },
              { value: '500+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-navy-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
