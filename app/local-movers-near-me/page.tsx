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
  title: 'Local Movers Near Me | T&E Moving',
  description: 'Find the best local movers near you. T&E Moving offers trusted, affordable moving services in your area.'
}

export default function LocalMoversNearMePage() {
  return (
    <main>
      <HeroSection
        headline="Find Local Movers Near You"
        subheadline="Trusted, affordable, and reliable moving services in your area."
        primaryCTA={{ text: 'Get a Free Quote', action: '/quote' }}
        background={{ type: 'image', source: '/images/banner1.webp' }}
        trustBadges={["Licensed & Insured", "5-Star Rated", "No Hidden Fees"]}
      />
      <AccoladesSection badges={["Angi Super Service Award", "Google 5-Star Reviews", "BBB Accredited"]} />
      <ValuePropositionSection
        title="Why Choose T&E for Local Moves Near You?"
        benefits={[
          { icon: 'map-pin', title: 'Local Experts', description: 'We know your area and the best routes.' },
          { icon: 'clock', title: 'Fast & Efficient', description: 'We get you moved quickly and safely.' },
          { icon: 'dollar-sign', title: 'Affordable', description: 'Competitive rates for all local moves.' },
        ]}
        layout="grid"
        columns={3}
      />
      <ServiceOverviewSection
        title="Our Local Moving Services"
        services={[
          { icon: 'home', title: 'Home Moves', description: 'Apartments, condos, houses, and more.', features: ['Packing', 'Unpacking', 'Furniture Assembly'] },
          { icon: 'building', title: 'Office Moves', description: 'Business and commercial relocations.', features: ['After-hours moves', 'Minimal downtime'] },
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
          { quote: 'T&E made our move so easy and stress-free!', author: 'Sarah M.', location: 'Jacksonville' },
          { quote: 'Professional, fast, and careful with our things.', author: 'Mike D.', location: 'Ponte Vedra' },
        ]}
      />
      <FAQSection
        title="Local Movers Near Me FAQ"
        faqs={[
          { question: 'How do I find the best local movers near me?', answer: 'Check reviews, ask for quotes, and choose a licensed, insured company like T&E Moving.' },
          { question: 'Are you licensed and insured?', answer: 'Yes, T&E Moving is fully licensed and insured.' },
        ]}
      />
      <CTASection
        title="Ready to Move?"
        subtitle="Get your free local moving quote today."
        primaryCTA={{ text: 'Request Quote', action: '/quote' }}
        features={["No hidden fees", "Flexible scheduling", "Friendly team"]}
      />
    </main>
  )
} 