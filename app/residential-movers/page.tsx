import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { ValuePropositionSection } from '@/components/sections/value-proposition-section'
import { ServiceOverviewSection } from '@/components/sections/service-overview-section'
import { TimelineSection } from '@/components/sections/timeline-section'
import { TestimonialSection } from '@/components/sections/testimonial-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { AccoladesSection } from '@/components/sections/accolades-section'

export const metadata: Metadata = {
  title: 'Residential Movers | T&E Moving',
  description: 'Professional residential movers for homes, condos, and apartments. T&E Moving makes your move easy.'
}

export default function ResidentialMoversPage() {
  return (
    <main>
      <HeroSection
        headline="Residential Moving Experts"
        subheadline="We move homes, condos, and apartments with care."
        primaryCTA={{ text: 'Get a Free Quote', action: '/quote' }}
        background={{ type: 'image', source: '/images/banner2.webp' }}
        trustBadges={["Licensed & Insured", "5-Star Rated", "No Hidden Fees"]}
      />
      <AccoladesSection badges={["Angi Super Service Award", "Google 5-Star Reviews", "BBB Accredited"]} />
      <ValuePropositionSection
        title="Why Choose Us for Residential Moves?"
        benefits={[
          { icon: 'home', title: 'Home Specialists', description: 'We move houses, condos, and apartments.' },
          { icon: 'shield', title: 'Safe & Secure', description: 'Your belongings are protected every step.' },
          { icon: 'clock', title: 'Flexible Scheduling', description: 'We work around your timeline.' },
        ]}
        layout="grid"
        columns={3}
      />
      <ServiceOverviewSection
        title="Our Residential Moving Services"
        services={[
          { icon: 'box', title: 'Packing & Unpacking', description: 'We handle all your belongings with care.', features: ['Full packing', 'Unpacking', 'Supplies included'] },
          { icon: 'truck', title: 'Transport', description: 'Safe, secure, and efficient moving.', features: ['Home moves', 'Apartment moves'] },
        ]}
        layout="grid"
      />
      <TimelineSection
        title="How It Works"
        steps={[
          { number: '1', title: 'Get a Quote', description: 'Request a free, no-obligation estimate.' },
          { number: '2', title: 'Book Your Move', description: 'Choose your date and service options.' },
          { number: '3', title: 'We Move You', description: 'Our team handles everything, start to finish.' },
        ]}
      />
      <TestimonialSection
        title="What Our Customers Say"
        testimonials={[
          { quote: 'Our residential move was smooth and stress-free!', author: 'Karen W.', location: 'Jacksonville' },
          { quote: 'T&E took great care of our home and furniture.', author: 'James B.', location: 'Ponte Vedra' },
        ]}
      />
      <FAQSection
        title="Residential Movers FAQ"
        faqs={[
          { question: 'Do you move houses and apartments?', answer: 'Yes, we handle all types of residential moves.' },
          { question: 'Are you licensed and insured?', answer: 'Yes, T&E Moving is fully licensed and insured.' },
        ]}
      />
      <CTASection
        title="Ready for Your Residential Move?"
        subtitle="Get your free residential moving quote today."
        primaryCTA={{ text: 'Request Quote', action: '/quote' }}
        features={["No hidden fees", "Flexible scheduling", "Friendly team"]}
      />
    </main>
  )
} 