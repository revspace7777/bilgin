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
  title: 'Apartment Movers | T&E Moving',
  description: 'Expert apartment movers for local and in-town moves. T&E Moving makes your apartment move easy.'
}

export default function ApartmentMoversPage() {
  return (
    <main>
      <HeroSection
        headline="Apartment Moving Experts"
        subheadline="We make moving in and out of apartments hassle-free."
        primaryCTA={{ text: 'Get a Free Quote', action: '/quote' }}
        background={{ type: 'image', source: '/images/banner3.webp' }}
        trustBadges={["Licensed & Insured", "5-Star Rated", "No Hidden Fees"]}
      />
      <AccoladesSection badges={["Angi Super Service Award", "Google 5-Star Reviews", "BBB Accredited"]} />
      <ValuePropositionSection
        title="Why Choose Us for Apartment Moves?"
        benefits={[
          { icon: 'building', title: 'Apartment Specialists', description: 'We know the ins and outs of apartment moves.' },
          { icon: 'dolly', title: 'Efficient & Careful', description: 'We protect your building and your belongings.' },
          { icon: 'clock', title: 'Flexible Scheduling', description: 'We work with your building’s move-in/out times.' },
        ]}
        layout="grid"
        columns={3}
      />
      <ServiceOverviewSection
        title="Our Apartment Moving Services"
        services={[
          { icon: 'box', title: 'Packing & Unpacking', description: 'We handle all your belongings with care.', features: ['Full packing', 'Unpacking', 'Supplies included'] },
          { icon: 'truck', title: 'Transport', description: 'Safe, secure, and efficient moving.', features: ['Elevator moves', 'Stair carries'] },
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
          { quote: 'T&E made our apartment move so easy!', author: 'Emily R.', location: 'Jacksonville' },
          { quote: 'They worked around our building’s rules and were super careful.', author: 'Chris L.', location: 'Ponte Vedra' },
        ]}
      />
      <FAQSection
        title="Apartment Movers FAQ"
        faqs={[
          { question: 'Do you move apartments on upper floors?', answer: 'Yes, we handle elevator and stair moves.' },
          { question: 'Can you move on weekends?', answer: 'Absolutely! We offer flexible scheduling.' },
        ]}
      />
      <CTASection
        title="Ready to Move Apartments?"
        subtitle="Get your free apartment moving quote today."
        primaryCTA={{ text: 'Request Quote', action: '/quote' }}
        features={["No hidden fees", "Flexible scheduling", "Friendly team"]}
      />
    </main>
  )
} 