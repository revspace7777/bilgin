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
  title: 'T&E Moving: Long Distance Moves in Jacksonville, FL',
  description: 'T&E Movers offers secure, efficient long-distance moving services. Get a free quote and experience a stress-free move with us!',
  openGraph: {
    title: 'Long Distance Moves - T&E Moving - Jacksonville, FL',
    description: 'Our long-distance moving services are designed to ensure the secure & efficient transport of your belongings. Trust T&E Movers with your long distance move!',
    images: ['/images/te-longdistance.jpg'],
  },
}

export default function LongDistanceMovesPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        headline="Reliable Long Distance Moving Services"
        subheadline="T&E Moving provides reliable long-distance moving services across the country. Our experienced team ensures your belongings arrive safely and on time, no matter the distance."
        primaryCTA={{
          text: "Get Your Free Quote",
          action: "/quote"
        }}
        secondaryCTA={{
          text: "Call (904) 997-1884",
          action: "tel:9049971884"
        }}
        background={{
          type: 'image',
          source: '/images/truck-fleet.png'
        }}
        trustBadges={['Licensed & Insured', 'GPS Tracking', 'Nationwide Service']}
      />

      <AccoladesSection
        badges={[
          'Licensed & Insured',
          'GPS Tracking',
          'Nationwide Service',
          '25+ Years Experience',
          '10K+ Successful Moves',
          '99.8% Satisfaction Rate'
        ]}
      />

      <ValuePropositionSection
        title="Why Choose Our Long Distance Services?"
        subtitle="Experience the difference with our professional long-distance moving expertise"
        benefits={[
          {
            icon: "👥",
            title: "Experienced Team",
            description: "Professional long-distance moving experts with decades of experience"
          },
          {
            icon: "🛡️",
            title: "Full Service",
            description: "Complete moving solutions from packing to setup and everything in between"
          },
          {
            icon: "📋",
            title: "Licensed & Insured",
            description: "Complete protection for your belongings throughout the entire journey"
          },
          {
            icon: "📍",
            title: "GPS Tracking",
            description: "Real-time shipment tracking so you always know where your belongings are"
          },
          {
            icon: "💰",
            title: "Competitive Pricing",
            description: "Affordable long-distance rates with transparent pricing and no hidden fees"
          },
          {
            icon: "📞",
            title: "Customer Support",
            description: "Dedicated support throughout your move with 24/7 availability"
          }
        ]}
        layout="grid"
        columns={3}
      />

      <ServiceOverviewSection
        title="Long Distance Moving Services"
        subtitle="Comprehensive moving solutions for residential and commercial long-distance relocations"
        services={[
          {
            icon: "🏠",
            title: "Residential Long Distance Moving",
            description: "Complete moving services for homes, apartments, condos, and senior relocations",
            features: [
              "Single-family homes",
              "Apartments and condos",
              "Senior relocations",
              "Student moves"
            ]
          },
          {
            icon: "🏢",
            title: "Commercial Long Distance Moving",
            description: "Professional business relocation services with minimal downtime",
            features: [
              "Office relocations",
              "Business equipment",
              "Industrial moves",
              "Medical office relocations"
            ]
          },
          {
            icon: "📦",
            title: "Professional Packing",
            description: "Expert packing services with specialized crating and fragile item protection",
            features: [
              "Expert packing services",
              "Specialized crating",
              "Fragile item protection",
              "Inventory documentation"
            ]
          },
          {
            icon: "🚚",
            title: "Secure Transportation",
            description: "Professional drivers with GPS tracking and climate-controlled transport",
            features: [
              "Professional drivers",
              "GPS tracking",
              "Climate-controlled transport",
              "Insurance coverage"
            ]
          }
        ]}
        layout="grid"
      />

      <TimelineSection
        title="Our Long Distance Moving Process"
        subtitle="A comprehensive process designed for your peace of mind"
        steps={[
          {
            number: "01",
            title: "Planning and Preparation",
            description: "Detailed move planning with route optimization and timeline coordination"
          },
          {
            number: "02",
            title: "Professional Packing",
            description: "Expert packing services with specialized crating and inventory documentation"
          },
          {
            number: "03",
            title: "Secure Transportation",
            description: "Professional drivers with GPS tracking and climate-controlled transport"
          },
          {
            number: "04",
            title: "Delivery and Setup",
            description: "Careful unloading with furniture assembly and item placement"
          },
          {
            number: "05",
            title: "Post-Move Support",
            description: "Assistance with unpacking and ongoing support to complete your move"
          }
        ]}
      />

      <TestimonialSection
        title="What Our Customers Say"
        subtitle="Real experiences from families who trusted us with their long-distance moves"
        testimonials={[
          {
            quote: "We had to move from Jacksonville to Seattle with just 3 days notice due to a job transfer. T&E Movers not only accommodated our emergency timeline but handled our entire 4-bedroom house with incredible care.",
            author: "Sarah & Mike Thompson",
            location: "Jacksonville, FL → Seattle, WA"
          },
          {
            quote: "As a military family, we've moved 8 times in 12 years. T&E Movers provided the best experience we've ever had. They understood our unique needs and handled everything perfectly.",
            author: "Jennifer & Robert Martinez",
            location: "Mayport, FL → Norfolk, VA"
          },
          {
            quote: "Moving my elderly mother from her home of 40 years was emotionally overwhelming. The T&E team was incredibly patient and gentle, treating her antiques and memories with the utmost respect.",
            author: "Linda Chen",
            location: "Tampa, FL → Orlando, FL"
          }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our long-distance moving services"
        faqs={[
          {
            question: "How far in advance should I book my long-distance move?",
            answer: "We recommend booking 6-8 weeks in advance for optimal scheduling and pricing. However, we understand life doesn't always allow for perfect planning and offer emergency services when needed."
          },
          {
            question: "What's the best time of year to move long-distance?",
            answer: "October-April offers 20-30% lower rates and better availability, while May-September is peak season with higher demand but better weather conditions."
          },
          {
            question: "How much does a long-distance move typically cost?",
            answer: "Costs vary by distance and belongings: 1-bedroom ($2,500-$4,500), 3-bedroom ($4,500-$8,000), 4+ bedroom ($6,500-$12,000+). Get your exact quote in 60 seconds!"
          },
          {
            question: "Can I track my belongings during the move?",
            answer: "Yes! We provide GPS tracking on all trucks, daily check-in calls, text updates at major milestones, and 24-hour advance delivery notice."
          },
          {
            question: "What insurance options do you offer?",
            answer: "We offer basic coverage (included), full value protection (recommended), and high-value item coverage for antiques, artwork, and precious collectibles."
          },
          {
            question: "Do you handle specialty items like pianos or artwork?",
            answer: "Yes! We're specialists in handling high-value and delicate items including pianos, fine art, antiques, and other specialty items with custom crating and white glove service."
          }
        ]}
      />

      <CTASection
        title="Ready to Start Your Long Distance Move?"
        subtitle="Get your free quote today and experience stress-free long-distance moving"
        primaryCTA={{
          text: "Get Free Quote",
          action: "/quote"
        }}
        secondaryCTA={{
          text: "Call (904) 997-1884",
          action: "tel:9049971884"
        }}
        features={[
          "Free estimates",
          "No hidden fees",
          "GPS tracking",
          "Nationwide service"
        ]}
      />
    </div>
  )
} 