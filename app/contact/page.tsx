import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with LuxeOffices. Schedule a tour, ask questions, or inquire about our premium office spaces in Dubai.',
};

const faqs = [
  {
    question: 'What is included in the rental price?',
    answer: 'Our rental prices include access to all listed amenities, high-speed WiFi, utilities, and building security. Additional services like catering, printing, or dedicated reception staff can be arranged at an extra cost.',
  },
  {
    question: 'Can I view the space before booking?',
    answer: 'Absolutely! We offer both in-person tours and immersive 3D virtual tours for all our spaces. Simply contact us to schedule a viewing at your convenience.',
  },
  {
    question: 'What are the minimum booking requirements?',
    answer: 'Most of our spaces can be booked by the hour, with a typical minimum of 2 hours. Daily and monthly options are also available with preferential rates.',
  },
  {
    question: 'Do you offer long-term rental agreements?',
    answer: 'Yes, we offer flexible long-term arrangements with competitive monthly rates. Contact our team to discuss your specific requirements and get a customized quote.',
  },
];

export default function ContactPage() {
  const email = siteConfig.email;

  const contactInfo = [
    {
      title: 'Email Us',
      description: email,
      link: `mailto:${email}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Working Hours',
      description: 'Sun - Thu: 9AM - 6PM',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-luxury">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block text-gold-400 font-medium mb-4 tracking-wider uppercase text-sm">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Find Your Perfect Workspace
            </h1>
            <p className="text-xl text-navy-200">
              Have questions or ready to book a tour? Our team is here to help you
              find the ideal office space for your business in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b border-navy-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 bg-navy-50 rounded-2xl hover:bg-gold-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-gold-500 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-navy-950 mb-1">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-navy-600 hover:text-gold-600 transition-colors"
                  >
                    {info.description}
                  </a>
                ) : (
                  <p className="text-navy-600">{info.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-3 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="text-xl font-bold text-navy-950 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Quick Response',
                      description: 'We respond to all inquiries within 2 hours during business hours.',
                    },
                    {
                      title: 'Personalized Consultation',
                      description: 'Our team will understand your needs and recommend suitable spaces.',
                    },
                    {
                      title: 'Flexible Viewing Options',
                      description: 'Schedule in-person tours or explore spaces via 3D virtual tours.',
                    },
                    {
                      title: 'No Pressure',
                      description: 'Take your time to decide. We\'re here to help, not to push.',
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-3 text-gold-500 flex-shrink-0 mt-0.5"
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
                      <div>
                        <h4 className="font-semibold text-navy-900">{item.title}</h4>
                        <p className="text-navy-600 text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h2 className="heading-2 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-navy-50 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-semibold text-navy-950 pr-4">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 text-gold-500 flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-navy-600">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern office space"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-navy-300">
                Browse our premium spaces or send us an email directly
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/spaces" className="btn-primary text-lg">
                Browse Spaces
              </Link>
              <a
                href={`mailto:${email}`}
                className="btn-outline border-white text-white hover:bg-white hover:text-navy-950 px-6 py-3 text-lg flex items-center"
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
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
