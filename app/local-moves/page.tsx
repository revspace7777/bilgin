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
  title: 'Jacksonville Local Moves: T&E Moving - Get a Quote',
  description: 'Jacksonville local moves? T&E Moving provides stress-free moving services. Get a free quote today!',
  openGraph: {
    title: 'Local Moves - T&E Moving - Jacksonville, FL',
    description: 'Need local moving services in Jacksonville, FL? Call T&E Moving for a free quote for local moves. Stress-free local moving is our specialty!',
    images: ['/images/te-localmoves.jpg'],
  },
}

export default function LocalMovesPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        headline="Professional Local Moving Services in Jacksonville"
        subheadline="T&E Moving provides expert local moving services throughout Jacksonville and surrounding areas. Our experienced team handles residential and commercial moves with the utmost care and professionalism."
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
        trustBadges={['Licensed & Insured', 'Family-Owned', 'Local Experts']}
      />

      <AccoladesSection
        badges={[
          'Licensed & Insured',
          'Family-Owned Business',
          'Local Jacksonville Company',
          'Customer Satisfaction Guarantee'
        ]}
      />

      <ValuePropositionSection
        title="Why Choose Our Local Moving Services?"
        subtitle="Experience the difference with our professional local moving expertise"
        benefits={[
          {
            icon: "🏠",
            title: "Local Expertise",
            description: "Deep knowledge of Jacksonville area and surrounding communities"
          },
          {
            icon: "👥",
            title: "Professional Team",
            description: "Experienced moving professionals dedicated to your satisfaction"
          },
          {
            icon: "🛡️",
            title: "Licensed & Insured",
            description: "Full protection for your belongings throughout the entire move"
          },
          {
            icon: "💰",
            title: "Competitive Pricing",
            description: "Affordable rates for quality service without hidden fees"
          },
          {
            icon: "❤️",
            title: "Family-Owned",
            description: "Personal touch and attention to detail you can trust"
          },
          {
            icon: "⚡",
            title: "Quick Response",
            description: "Fast response times for quotes and scheduling"
          }
        ]}
        layout="grid"
        columns={3}
      />

      <ServiceOverviewSection
        title="Local Moving Services"
        subtitle="Comprehensive moving solutions for residential and commercial needs"
        services={[
          {
            icon: "🏠",
            title: "Residential Moving",
            description: "Complete moving services for homes, apartments, condos, and senior living communities",
            features: [
              "Single-family homes",
              "Apartments and condos", 
              "Senior living communities",
              "Student housing"
            ]
          },
          {
            icon: "🏢",
            title: "Commercial Moving",
            description: "Professional office and business relocation services with minimal downtime",
            features: [
              "Office relocations",
              "Retail store moves",
              "Industrial equipment",
              "Medical office moves"
            ]
          },
          {
            icon: "📦",
            title: "Packing Services",
            description: "Expert packing and unpacking services with quality materials",
            features: [
              "Professional packing",
              "Quality materials",
              "Fragile item protection",
              "Unpacking assistance"
            ]
          },
          {
            icon: "🚚",
            title: "Loading & Unloading",
            description: "Careful handling and secure transportation of all your belongings",
            features: [
              "Secure loading",
              "Professional equipment",
              "Careful unloading",
              "Furniture placement"
            ]
          }
        ]}
        layout="grid"
      />

      <TimelineSection
        title="Our Local Moving Process"
        subtitle="A simple, stress-free process designed for your convenience"
        steps={[
          {
            number: "01",
            title: "Free Quote",
            description: "Get a detailed estimate for your move with no hidden fees"
          },
          {
            number: "02", 
            title: "Professional Packing",
            description: "Expert packing services available with quality materials"
          },
          {
            number: "03",
            title: "Careful Loading",
            description: "Secure loading and transportation with professional equipment"
          },
          {
            number: "04",
            title: "Safe Delivery",
            description: "Careful unloading and setup at your new location"
          },
          {
            number: "05",
            title: "Post-Move Support",
            description: "Assistance with unpacking and setup to complete your move"
          }
        ]}
      />

      <TestimonialSection
        title="What Our Customers Say"
        subtitle="Real experiences from Jacksonville families and businesses"
        testimonials={[
          {
            quote: "T&E Moving made our local move so easy! They were professional, careful, and affordable. Highly recommend!",
            author: "Sarah M.",
            location: "Jacksonville Beach"
          },
          {
            quote: "The team was amazing - they handled everything from packing to setup. Our move was stress-free thanks to them.",
            author: "Mike R.",
            location: "Orange Park"
          },
          {
            quote: "Fast, reliable, and professional. They moved our office in one day with minimal disruption to our business.",
            author: "Jennifer L.",
            location: "Ponte Vedra Beach"
          }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our local moving services"
        faqs={[
          {
            question: "How far in advance should I book my local move?",
            answer: "We recommend booking at least 2-3 weeks in advance for local moves, especially during peak moving seasons (May-September)."
          },
          {
            question: "Do you provide packing materials?",
            answer: "Yes, we provide all necessary packing materials including boxes, tape, bubble wrap, and furniture blankets."
          },
          {
            question: "What areas do you serve for local moves?",
            answer: "We serve all of Jacksonville and surrounding areas including Jacksonville Beach, Atlantic Beach, Ponte Vedra Beach, Orange Park, and more."
          },
          {
            question: "Do you offer same-day moving services?",
            answer: "Yes, we offer same-day moving services for local moves when available. Contact us for immediate availability."
          },
          {
            question: "What is included in your local moving quote?",
            answer: "Our quotes include loading, transportation, unloading, and basic furniture placement. Packing services are available for an additional fee."
          },
          {
            question: "Are you licensed and insured?",
            answer: "Yes, we are fully licensed and insured. Your belongings are protected throughout the entire moving process."
          }
        ]}
      />

      <CTASection
        title="Ready to Start Your Local Move?"
        subtitle="Get your free quote today and experience stress-free local moving"
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
          "Licensed & insured",
          "Local expertise"
        ]}
      />
    </div>
  )
} 