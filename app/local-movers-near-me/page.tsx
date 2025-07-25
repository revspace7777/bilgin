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
  title: 'Affordable Local Movers Near Me: T&E Moving - Budget-Friendly Moving Services',
  description: 'Find affordable local movers near you. T&E Moving provides budget-friendly moving services without compromising quality. Get your free quote for affordable local moving.',
  openGraph: {
    title: 'Affordable Local Movers Near Me - T&E Moving',
    description: 'Budget-friendly local moving services that don\'t compromise on quality. Licensed, insured, and affordable. Get your free quote today!',
    images: ['/images/truck-fleet.png'],
  },
}

export default function LocalMoversNearMePage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        headline="Affordable Local Movers Near You"
        subheadline="T&E Moving provides quality local moving services at affordable prices. We believe quality moving shouldn't break the bank. Get professional moving services with transparent pricing and no hidden fees. Affordable local movers you can trust."
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
        trustBadges={['Licensed & Insured', 'Family-Owned', 'Affordable Rates', 'No Hidden Fees']}
      />

      <AccoladesSection
        badges={[
          'Licensed & Insured',
          'Family-Owned Business',
          'Affordable Rates',
          'No Hidden Fees',
          'BBB A+ Rated',
          '5-Star Google Reviews',
          'Transparent Pricing'
        ]}
      />

      <ValuePropositionSection
        title="Why Choose Our Affordable Local Movers?"
        subtitle="Quality moving services at prices that fit your budget"
        benefits={[
          {
            icon: "💰",
            title: "Affordable Rates",
            description: "Competitive pricing that fits your budget without compromising quality"
          },
          {
            icon: "📋",
            title: "Transparent Pricing",
            description: "Clear, upfront pricing with no hidden fees or surprise charges"
          },
          {
            icon: "🛡️",
            title: "Licensed & Insured",
            description: "Full protection for your belongings at affordable rates"
          },
          {
            icon: "👥",
            title: "Professional Team",
            description: "Experienced movers who provide quality service at affordable prices"
          },
          {
            icon: "⚡",
            title: "Quick Service",
            description: "Efficient moving services that save you time and money"
          },
          {
            icon: "❤️",
            title: "Family-Owned",
            description: "Personal care and attention at family-owned business prices"
          }
        ]}
        layout="grid"
        columns={3}
      />

      <ServiceOverviewSection
        title="Affordable Local Moving Services"
        subtitle="Quality moving solutions that fit your budget"
        services={[
          {
            icon: "🏠",
            title: "Residential Moving",
            description: "Affordable moving services for homes, apartments, and condos",
            features: [
              "Single-family homes",
              "Apartments and condos",
              "Student housing",
              "Senior living",
              "Townhouses"
            ]
          },
          {
            icon: "🏢",
            title: "Commercial Moving",
            description: "Cost-effective business relocation services",
            features: [
              "Office relocations",
              "Retail moves",
              "Industrial equipment",
              "After-hours service",
              "Minimal downtime"
            ]
          },
          {
            icon: "📦",
            title: "Packing Services",
            description: "Affordable packing with quality materials",
            features: [
              "Professional packing",
              "Quality materials",
              "Fragile protection",
              "Box labeling",
              "Unpacking help"
            ]
          },
          {
            icon: "🚚",
            title: "Loading & Unloading",
            description: "Efficient loading and unloading services",
            features: [
              "Secure loading",
              "Professional equipment",
              "Careful unloading",
              "Furniture placement",
              "Protective wrapping"
            ]
          }
        ]}
        layout="grid"
      />

      <TimelineSection
        title="Our Affordable Moving Process"
        subtitle="A cost-effective process designed to save you money while providing quality service"
        steps={[
          {
            number: "01",
            title: "Free Quote",
            description: "Get a detailed, transparent quote with no hidden fees"
          },
          {
            number: "02",
            title: "Efficient Packing",
            description: "Professional packing services at affordable rates"
          },
          {
            number: "03",
            title: "Quick Loading",
            description: "Efficient loading and transport to save time and money"
          },
          {
            number: "04",
            title: "Safe Delivery",
            description: "Careful unloading and setup at your new location"
          },
          {
            number: "05",
            title: "Quality Service",
            description: "Professional service at affordable prices throughout"
          }
        ]}
      />

      <TestimonialSection
        title="What Our Affordable Moving Customers Say"
        subtitle="Real experiences from customers who found quality service at affordable prices"
        testimonials={[
          {
            quote: "T&E Moving provided excellent service at an affordable price. No hidden fees and they were professional throughout. Great value for the money!",
            author: "Sarah M.",
            location: "Jacksonville Beach"
          },
          {
            quote: "Affordable rates without compromising on quality. The team was professional and careful with our belongings. Highly recommend!",
            author: "Mike R.",
            location: "Orange Park"
          },
          {
            quote: "We were on a tight budget and T&E delivered quality service at a price we could afford. No surprises, just great service.",
            author: "Jennifer L.",
            location: "Ponte Vedra Beach"
          },
          {
            quote: "Affordable local movers who actually care about your belongings. Professional service at family-owned prices.",
            author: "David K.",
            location: "Atlantic Beach"
          }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions About Affordable Moving"
        subtitle="Common questions about our budget-friendly moving services"
        faqs={[
          {
            question: "How much do your local moves cost?",
            answer: "Our local move prices vary based on distance, size, and services needed. We provide free, transparent quotes with no hidden fees. Contact us for a detailed estimate."
          },
          {
            question: "Are there any hidden fees?",
            answer: "No, we believe in transparent pricing. Our quotes include all costs upfront with no hidden fees or surprise charges. What you see is what you pay."
          },
          {
            question: "How do you keep prices affordable?",
            answer: "We maintain affordable prices through efficient operations, family-owned business structure, and transparent pricing. We pass savings directly to our customers."
          },
          {
            question: "Do you offer discounts?",
            answer: "Yes, we offer various discounts including senior discounts, military discounts, and off-season rates. Contact us to learn about available discounts."
          },
          {
            question: "What areas do you serve for affordable moving?",
            answer: "We serve all local areas including Jacksonville, Jacksonville Beach, Atlantic Beach, Ponte Vedra Beach, Orange Park, Fleming Island, and surrounding communities."
          },
          {
            question: "Is affordable moving still quality service?",
            answer: "Absolutely! We maintain high quality standards while keeping prices affordable. Our team is licensed, insured, and experienced - we just don't overcharge."
          },
          {
            question: "Do you provide packing materials?",
            answer: "Yes, we provide quality packing materials at affordable rates. All materials are included in our transparent pricing."
          },
          {
            question: "How far in advance should I book for affordable rates?",
            answer: "We recommend booking 2-3 weeks in advance for the best rates, especially during peak moving seasons. However, we can often accommodate last-minute moves."
          }
        ]}
      />

      <CTASection
        title="Ready for Affordable Local Moving?"
        subtitle="Get your free quote today and experience quality moving at affordable prices"
        primaryCTA={{
          text: "Get Free Quote",
          action: "/quote"
        }}
        secondaryCTA={{
          text: "Call (904) 997-1884",
          action: "tel:9049971884"
        }}
        features={[
          "Affordable rates",
          "No hidden fees",
          "Licensed & insured",
          "Professional service",
          "Transparent pricing",
          "Quality guarantee"
        ]}
      />
    </div>
  )
} 