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
  title: 'Moving Help | T&E Moving',
  description: 'Get professional moving help for packing, loading, and unloading. T&E Moving is your trusted local moving team.'
}

export default function MovingHelpPage() {
  return (
    <main>
      <HeroSection
        headline="Professional Moving Help"
        subheadline="Packing, loading, and unloading help from local experts."
        primaryCTA={{ text: 'Get a Free Quote', action: '/quote' }}
        background={{ type: 'image', source: '/images/banner3.webp' }}
        trustBadges={["Licensed & Insured", "5-Star Rated", "No Hidden Fees"]}
      />
      <AccoladesSection badges={["Angi Super Service Award", "Google 5-Star Reviews", "BBB Accredited"]} />
      <ValuePropositionSection
        title="Why Choose T&E for Moving Help?"
        benefits={[
          { icon: 'hands-helping', title: 'Expert Labor', description: 'Skilled help for packing, loading, and unloading.' },
          { icon: 'clock', title: 'Flexible Scheduling', description: 'We work around your timeline.' },
          { icon: 'dollar-sign', title: 'Affordable Rates', description: 'Get help without breaking the bank.' },
        ]}
        layout="grid"
        columns={3}
      />
      <ServiceOverviewSection
        title="Our Moving Help Services"
        services={[
          { icon: 'box', title: 'Packing Help', description: 'We help you pack your belongings safely.', features: ['Supplies available', 'Fragile item care'] },
          { icon: 'truck', title: 'Loading & Unloading', description: 'We load and unload your truck or pod.', features: ['Heavy lifting', 'Efficient service'] },
        ]}
        layout="grid"
      />
      <TimelineSection
        title="How It Works"
        steps={[
          { number: '1', title: 'Get a Quote', description: 'Request a free, no-obligation estimate.' },
          { number: '2', title: 'Book Your Help', description: 'Choose your date and service options.' },
          { number: '3', title: 'We Help You Move', description: 'Our team handles the heavy lifting.' },
        ]}
      />
      <TestimonialSection
        title="What Our Customers Say"
        testimonials={[
          { quote: 'The moving help team was fast and professional!', author: 'Ashley K.', location: 'Jacksonville' },
          { quote: 'They made packing and loading a breeze.', author: 'Carlos M.', location: 'St. Augustine' },
        ]}
      />
      <FAQSection
        title="Moving Help FAQ"
        faqs={[
          { question: 'Can I hire just labor?', answer: 'Yes, we offer labor-only services for packing, loading, and unloading.' },
          { question: 'Do you provide supplies?', answer: 'We can provide packing supplies if needed.' },
        ]}
      />
      <CTASection
        title="Need Moving Help?"
        subtitle="Get your free moving help quote today."
        primaryCTA={{ text: 'Request Quote', action: '/quote' }}
        features={["No hidden fees", "Flexible scheduling", "Friendly team"]}
      />
    </main>
  )
} 