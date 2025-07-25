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
  title: 'House Movers | T&E Moving',
  description: 'Expert house movers for local and in-town moves. T&E Moving makes your house move easy.'
}

export default function HouseMoversPage() {
  return (
    <main>
      <HeroSection
        headline="House Moving Made Easy"
        subheadline="We move houses of all sizes with care and expertise."
        primaryCTA={{ text: 'Get a Free Quote', action: '/quote' }}
        background={{ type: 'image', source: '/images/banner3.webp' }}
        trustBadges={["Licensed & Insured", "5-Star Rated", "No Hidden Fees"]}
      />
      <AccoladesSection badges={["Angi Super Service Award", "Google 5-Star Reviews", "BBB Accredited"]} />
      <ValuePropositionSection
        title="Why Choose Us for House Moves?"
        benefits={[
          { icon: 'home', title: 'House Specialists', description: 'We move houses of all sizes and layouts.' },
          { icon: 'shield', title: 'Safe & Secure', description: 'Your home and belongings are protected.' },
          { icon: 'clock', title: 'Flexible Scheduling', description: 'We work around your timeline.' },
        ]}
        layout="grid"
        columns={3}
      />
      <ServiceOverviewSection
        title="Our House Moving Services"
        services={[
          { icon: 'box', title: 'Packing & Unpacking', description: 'We handle all your belongings with care.', features: ['Full packing', 'Unpacking', 'Supplies included'] },
          { icon: 'truck', title: 'Transport', description: 'Safe, secure, and efficient moving.', features: ['House moves', 'Large furniture'] },
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
          { quote: 'Our house move was smooth and easy!', author: 'Diane F.', location: 'Jacksonville' },
          { quote: 'T&E handled our large furniture with care.', author: 'Paul G.', location: 'St. Johns' },
        ]}
      />
      <FAQSection
        title="House Movers FAQ"
        faqs={[
          { question: 'Do you move large houses?', answer: 'Yes, we handle houses of all sizes.' },
          { question: 'Can you move on weekends?', answer: 'Absolutely! We offer flexible scheduling.' },
        ]}
      />
      <CTASection
        title="Ready for Your House Move?"
        subtitle="Get your free house moving quote today."
        primaryCTA={{ text: 'Request Quote', action: '/quote' }}
        features={["No hidden fees", "Flexible scheduling", "Friendly team"]}
      />
    </main>
  )
} 