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
  title: 'In Town Movers | T&E Moving',
  description: 'Reliable in town movers for short-distance moves. T&E Moving makes your move easy.'
}

export default function InTownMoversPage() {
  return (
    <main>
      <HeroSection
        headline="In Town Moving Pros"
        subheadline="Short-distance moves made simple and affordable."
        primaryCTA={{ text: 'Get a Free Quote', action: '/quote' }}
        background={{ type: 'image', source: '/images/banner1.webp' }}
        trustBadges={["Licensed & Insured", "5-Star Rated", "No Hidden Fees"]}
      />
      <AccoladesSection badges={["Angi Super Service Award", "Google 5-Star Reviews", "BBB Accredited"]} />
      <ValuePropositionSection
        title="Why Choose Us for In Town Moves?"
        benefits={[
          { icon: 'map-pin', title: 'Local Experts', description: 'We know the area and the best routes.' },
          { icon: 'clock', title: 'Fast & Efficient', description: 'We get you moved quickly and safely.' },
          { icon: 'dollar-sign', title: 'Affordable', description: 'Competitive rates for all in-town moves.' },
        ]}
        layout="grid"
        columns={3}
      />
      <ServiceOverviewSection
        title="Our In Town Moving Services"
        services={[
          { icon: 'box', title: 'Packing & Unpacking', description: 'We handle all your belongings with care.', features: ['Full packing', 'Unpacking', 'Supplies included'] },
          { icon: 'truck', title: 'Transport', description: 'Safe, secure, and efficient moving.', features: ['Short distance', 'Flexible scheduling'] },
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
          { quote: 'Our in-town move was fast and easy!', author: 'Linda P.', location: 'Jacksonville' },
          { quote: 'T&E handled everything with care and speed.', author: 'Tom S.', location: 'St. Johns' },
        ]}
      />
      <FAQSection
        title="In Town Movers FAQ"
        faqs={[
          { question: 'How far do you move in-town?', answer: 'We handle all short-distance moves within the metro area.' },
          { question: 'Are your rates competitive?', answer: 'Yes, we offer some of the best rates for in-town moves.' },
        ]}
      />
      <CTASection
        title="Ready for Your In Town Move?"
        subtitle="Get your free in town moving quote today."
        primaryCTA={{ text: 'Request Quote', action: '/quote' }}
        features={["No hidden fees", "Flexible scheduling", "Friendly team"]}
      />
    </main>
  )
} 