import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { ValuePropositionSection } from '@/components/sections/value-proposition-section'
import { ServiceOverviewSection } from '@/components/sections/service-overview-section'
import { TimelineSection } from '@/components/sections/timeline-section'
import { TestimonialSection } from '@/components/sections/testimonial-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { AccoladesSection } from '@/components/sections/accolades-section'
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"

export const metadata: Metadata = {
  title: 'Local Moving Companies: T&E Moving - Professional Moving Company',
  description: 'Find trusted local moving companies. T&E Moving is a professional moving company with 25+ years experience. Licensed, insured, and trusted by thousands.',
  openGraph: {
    title: 'Local Moving Companies - T&E Moving',
    description: 'Professional moving company with 25+ years experience. Licensed, insured, and trusted by thousands of families. Get your free quote today!',
    images: ['/images/truck-fleet.png'],
  },
}

export default function MovingCompanyPage() {
  return (
    <div className="min-h-screen relative">
      {/* Floating Quote Button */}
      <FloatingQuoteButton />

      {/* Quote Form Slideout */}
      <QuoteFormSlideout />

      <HeroSection
        headline="Trusted Local Moving Company Since 1998"
        subheadline="T&E Moving is your professional moving company with over 25 years of experience serving the community. As a family-owned business, we combine corporate professionalism with personal care. Licensed, insured, and trusted by thousands of families for their local moves."
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
        trustBadges={['Licensed & Insured', 'Family-Owned', '25+ Years Experience', 'BBB A+ Rated']}
      />

      <AccoladesSection
        badges={[
          'Licensed & Insured',
          'Family-Owned Business',
          '25+ Years Experience',
          'BBB A+ Rated',
          '5-Star Google Reviews',
          'Angi Super Service Award',
          'Customer Satisfaction Guarantee'
        ]}
      />

      <ValuePropositionSection
        title="Why Choose T&E Moving Company?"
        subtitle="Experience the difference of working with a professional moving company that cares"
        benefits={[
          {
            icon: "🏢",
            title: "Professional Company",
            description: "Established moving company with corporate-level service and family-owned care"
          },
          {
            icon: "📋",
            title: "Licensed & Insured",
            description: "Fully licensed moving company with comprehensive insurance coverage"
          },
          {
            icon: "👥",
            title: "Experienced Team",
            description: "Professional movers with years of experience and specialized training"
          },
          {
            icon: "🚚",
            title: "Modern Equipment",
            description: "State-of-the-art moving equipment and well-maintained fleet"
          },
          {
            icon: "💰",
            title: "Transparent Pricing",
            description: "Clear, upfront pricing with no hidden fees or surprise charges"
          },
          {
            icon: "⭐",
            title: "Proven Track Record",
            description: "Thousands of successful moves with 99.8% customer satisfaction rate"
          }
        ]}
        layout="grid"
        columns={3}
      />

      <ServiceOverviewSection
        title="Professional Moving Company Services"
        subtitle="Comprehensive moving solutions from a trusted local moving company"
        services={[
          {
            icon: "🏠",
            title: "Residential Moving",
            description: "Professional residential moving services for all types of homes",
            features: [
              "Single-family homes",
              "Apartments and condos",
              "Senior living communities",
              "Student housing",
              "Townhouses and duplexes"
            ]
          },
          {
            icon: "🏢",
            title: "Commercial Moving",
            description: "Professional business relocation services with minimal downtime",
            features: [
              "Office relocations",
              "Retail store moves",
              "Industrial equipment",
              "Medical office moves",
              "After-hours moving"
            ]
          },
          {
            icon: "📦",
            title: "Packing Services",
            description: "Professional packing and unpacking with quality materials",
            features: [
              "Professional packing",
              "Quality materials included",
              "Fragile item protection",
              "Unpacking assistance",
              "Box labeling system"
            ]
          },
          {
            icon: "🗄️",
            title: "Storage Solutions",
            description: "Secure storage facilities for short and long-term needs",
            features: [
              "Climate-controlled storage",
              "Short-term storage",
              "Long-term storage",
              "Secure facilities",
              "Inventory management"
            ]
          }
        ]}
        layout="grid"
      />

      <TimelineSection
        title="Our Professional Moving Process"
        subtitle="A proven process developed over 25 years of professional moving experience"
        steps={[
          {
            number: "01",
            title: "Professional Consultation",
            description: "Detailed assessment of your needs with experienced moving consultants"
          },
          {
            number: "02",
            title: "Comprehensive Quote",
            description: "Transparent pricing with detailed breakdown of all services included"
          },
          {
            number: "03",
            title: "Professional Packing",
            description: "Expert packing with quality materials and careful attention to detail"
          },
          {
            number: "04",
            title: "Secure Transport",
            description: "Safe transportation with professional equipment and GPS tracking"
          },
          {
            number: "05",
            title: "Complete Setup",
            description: "Professional unpacking and setup with furniture arrangement"
          }
        ]}
      />

      <TestimonialSection
        title="What Our Customers Say About Our Moving Company"
        subtitle="Real experiences from families and businesses who chose our professional moving company"
        testimonials={[
          {
            quote: "T&E Moving is the best moving company we've ever used. Professional, reliable, and they treated our belongings with care. Highly recommend this moving company!",
            author: "Sarah M.",
            location: "Jacksonville Beach"
          },
          {
            quote: "As a business owner, I needed a professional moving company I could trust. T&E delivered exactly what they promised - minimal downtime and professional service.",
            author: "Mike R.",
            location: "Orange Park"
          },
          {
            quote: "This moving company exceeded our expectations. Professional team, on-time service, and everything arrived in perfect condition. Great moving company!",
            author: "Jennifer L.",
            location: "Ponte Vedra Beach"
          },
          {
            quote: "After 25+ years in business, they know what they're doing. Professional moving company with personal touch. Our move was seamless!",
            author: "David K.",
            location: "Atlantic Beach"
          }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions About Our Moving Company"
        subtitle="Common questions about choosing a professional moving company"
        faqs={[
          {
            question: "How long has T&E Moving been in business?",
            answer: "T&E Moving has been serving the community since 1998, with over 25 years of professional moving experience. We're a family-owned moving company with a proven track record."
          },
          {
            question: "Are you a licensed moving company?",
            answer: "Yes, we are a fully licensed and insured moving company. We maintain all required licenses and carry comprehensive insurance coverage for your protection."
          },
          {
            question: "What makes T&E different from other moving companies?",
            answer: "We combine corporate-level professionalism with family-owned personal care. Our 25+ years of experience, licensed team, modern equipment, and proven track record set us apart from other moving companies."
          },
          {
            question: "Do you provide storage services?",
            answer: "Yes, we offer secure storage solutions for both short and long-term needs. Our climate-controlled facilities provide safe storage for your belongings."
          },
          {
            question: "What areas does your moving company serve?",
            answer: "We serve all local areas including Jacksonville, Jacksonville Beach, Atlantic Beach, Ponte Vedra Beach, Orange Park, Fleming Island, and surrounding communities."
          },
          {
            question: "How do you handle valuable and fragile items?",
            answer: "We use specialized packing techniques and materials for fragile items. Valuable items receive extra care and can be insured separately. Our professional team is trained in handling all types of items."
          },
          {
            question: "What is included in your moving company quote?",
            answer: "Our quotes include loading, transportation, unloading, and basic furniture placement. Packing services are available for an additional fee. All quotes are transparent with no hidden costs."
          },
          {
            question: "Do you offer same-day moving services?",
            answer: "Yes, we offer same-day moving services when available. Contact us for immediate availability and scheduling with our professional moving company."
          }
        ]}
      />

      <CTASection
        title="Ready to Work with a Professional Moving Company?"
        subtitle="Get your free quote today and experience the difference of working with a trusted moving company"
        primaryCTA={{
          text: "Get Free Quote",
          action: "/quote"
        }}
        secondaryCTA={{
          text: "Call (904) 997-1884",
          action: "tel:9049971884"
        }}
        features={[
          "Professional service",
          "Licensed & insured",
          "25+ years experience",
          "Transparent pricing",
          "Modern equipment",
          "Proven track record"
        ]}
      />
    </div>
  )
} 