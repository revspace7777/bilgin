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
  title: 'Moving Company | T&E Moving',
  description: 'Your trusted local moving company for homes, apartments, and offices. Get a free quote from T&E Moving.'
}

export default function MovingCompanyPage() {
  return (
    <main>
      <HeroSection
        headline="Your Trusted Moving Company"
        subheadline="Professional, reliable, and affordable moving services."
        primaryCTA={{ text: 'Get a Free Quote', action: '/quote' }}
        background={{ type: 'image', source: '/images/banner2.webp' }}
        trustBadges={["Licensed & Insured", "5-Star Rated", "No Hidden Fees"]}
      />
      <AccoladesSection badges={["Angi Super Service Award", "Google 5-Star Reviews", "BBB Accredited"]} />
      <ValuePropositionSection
        title="Why Choose T&E as Your Moving Company?"
        benefits={[
          { icon: 'truck', title: 'Full-Service Moves', description: 'Packing, loading, transport, and unpacking.' },
          { icon: 'clock', title: 'On-Time Guarantee', description: 'We respect your schedule and show up on time.' },
          { icon: 'shield', title: 'Licensed & Insured', description: 'Your belongings are protected every step.' },
        ]}
        layout="grid"
        columns={3}
      />
      <ServiceOverviewSection
        title="Our Moving Services"
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
        title="Moving Company FAQ"
        faqs={[
          { question: 'How much does a move cost?', answer: 'It depends on distance, size, and services. Get a free quote!' },
          { question: 'Are you licensed and insured?', answer: 'Yes, T&E Moving is fully licensed and insured.' },
        ]}
      />
      <CTASection
        title="Ready to Move?"
        subtitle="Get your free moving quote today."
        primaryCTA={{ text: 'Request Quote', action: '/quote' }}
        features={["No hidden fees", "Flexible scheduling", "Friendly team"]}
      />
    </main>
  )
} 