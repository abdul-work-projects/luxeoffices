import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about LuxeOffices - Dubai\'s premier provider of luxury office spaces and premium workspaces in the city\'s most prestigious locations.',
};

const values = [
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in every space we offer, from design to service.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'Embracing cutting-edge technology like 3D virtual tours to enhance your experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Trust',
    description: 'Building lasting relationships with clients through transparency and reliability.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Service',
    description: 'Dedicated concierge support ensuring your workspace experience is seamless.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '50+', label: 'Premium Spaces' },
  { value: '6', label: 'Prime Locations' },
  { value: '500+', label: 'Happy Clients' },
  { value: '24/7', label: 'Support Available' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-luxury">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-gold-400 font-medium mb-4 tracking-wider uppercase text-sm">
              About LuxeOffices
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Redefining Premium Workspaces in Dubai
            </h1>
            <p className="text-xl text-navy-200">
              We curate exceptional office spaces that embody Dubai&apos;s spirit of
              innovation and luxury. Our mission is to provide businesses with
              environments where they can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
                Our Mission
              </span>
              <h2 className="heading-2 mt-2 mb-6">
                Empowering Success Through Exceptional Spaces
              </h2>
              <div className="space-y-4 text-navy-600">
                <p>
                  We believe that the right environment can transform the way you work.
                  Our mission is to provide premium, thoughtfully designed workspaces
                  that inspire productivity, foster creativity, and reflect the prestige
                  of your business.
                </p>
                <p>
                  From executive suites with panoramic views to dynamic co-working spaces,
                  we offer a diverse portfolio of workspaces across Dubai&apos;s most
                  prestigious addresses. Each space is carefully selected to meet the
                  highest standards of quality and design.
                </p>
                <p>
                  We understand that every business is unique. That&apos;s why we offer
                  flexible terms, personalized service, and a commitment to excellence
                  that sets us apart in Dubai&apos;s commercial real estate market.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                  alt="Premium office space"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold-500/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-950">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-navy-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              What We Stand For
            </span>
            <h2 className="heading-2 mt-2">Our Core Values</h2>
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto">
              These principles guide everything we do, from selecting our spaces
              to serving our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gold-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-950 mb-2">{value.title}</h3>
                <p className="text-navy-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80"
                  alt="Premium office interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy-500/10 rounded-2xl -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
                Why Choose Us
              </span>
              <h2 className="heading-2 mt-2 mb-6">
                The LuxeOffices Difference
              </h2>
              <div className="space-y-4 text-navy-600">
                <p>
                  Every space in our portfolio undergoes rigorous evaluation before
                  being listed. We assess location prestige, building quality, amenities,
                  and service standards to ensure only the finest options reach our clients.
                </p>
                <p>
                  We partner exclusively with premium property owners and managers who
                  share our commitment to excellence. Regular quality audits help us
                  maintain the high standards you expect.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Rigorous space evaluation process',
                  'Premium locations across Dubai',
                  'Immersive 3D virtual tours',
                  'Flexible rental terms',
                  'Dedicated client support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-gold-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1920&q=80"
            alt="Dubai skyline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience <span className="text-gold-400">LuxeOffices</span>?
          </h2>
          <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
            Discover why Dubai&apos;s most ambitious businesses choose us for their
            workspace needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/spaces" size="lg">
              Explore Our Spaces
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-950">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
