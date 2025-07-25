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
  title: 'Door to Door Movers | T&E Moving',
  description: 'Seamless door to door moving services for homes and apartments. T&E Moving makes your move easy.'
}

export default function DoorToDoorMoversPage() {
  return (
    <main>
      <HeroSection
        headline="Door to Door Moving Made Simple"
        subheadline="We handle every step, from your old door to your new one."
        primaryCTA={{ text: 'Get a Free Quote', action: '/quote' }}
        background={{ type: 'image', source: '/images/banner2.webp' }}
        trustBadges={["Licensed & Insured", "5-Star Rated", "No Hidden Fees"]}
      />
      <AccoladesSection badges={["Angi Super Service Award", "Google 5-Star Reviews", "BBB Accredited"]} />
      <ValuePropositionSection
        title="Why Door to Door Movers?"
        benefits={[
          { icon: 'door-open', title: 'Full-Service', description: 'We pack, move, and unpack at both locations.' },
          { icon: 'map', title: 'All-Inclusive', description: 'No need to lift a finger—just open the door.' },
          { icon: 'clock', title: 'On-Time', description: 'We arrive and deliver on your schedule.' },
        ]}
        layout="grid"
        columns={3}
      />
      <ServiceOverviewSection
        title="Our Door to Door Services"
        services={[
          { icon: 'box', title: 'Packing & Unpacking', description: 'We handle all your belongings with care.', features: ['Full packing', 'Unpacking', 'Supplies included'] },
          { icon: 'truck', title: 'Transport', description: 'Safe, secure, and efficient moving.', features: ['GPS tracking', 'Licensed drivers'] },
        ]}
        layout="grid"
      />
      <TimelineSection
        title="How It Works"
        steps={[
          { number: '1', title: 'Book Your Move', description: 'Tell us your addresses and dates.' },
          { number: '2', title: 'We Pack & Move', description: 'Our team handles everything, door to door.' },
          { number: '3', title: 'Settle In', description: 'We unpack and set up your new home.' },
        ]}
      />
      <TestimonialSection
        title="What Our Customers Say"
        testimonials={[
          { quote: 'Door to door service was a lifesaver for our family!', author: 'Jessica T.', location: 'Jacksonville' },
          { quote: 'Everything arrived on time and in perfect shape.', author: 'Brian S.', location: 'St. Augustine' },
        ]}
      />
      <FAQSection
        title="Door to Door Movers FAQ"
        faqs={[
          { question: 'What is door to door moving?', answer: 'We handle your move from your old home to your new one, including packing and unpacking.' },
          { question: 'Do you provide packing supplies?', answer: 'Yes, all supplies are included in our service.' },
        ]}
      />
      <CTASection
        title="Ready for a Seamless Move?"
        subtitle="Get your free door to door moving quote today."
        primaryCTA={{ text: 'Request Quote', action: '/quote' }}
        features={["All-inclusive pricing", "No hidden fees", "Friendly team"]}
      />
    </main>
  )
} 