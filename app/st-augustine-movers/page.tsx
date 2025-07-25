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
  title: 'St. Augustine, FL Moving Services by T&E Moving',
  description: 'T&E Moving in St. Augustine: Your local moving experts for a seamless, stress-free relocation. Get a free quote today!',
  openGraph: {
    title: 'St. Augustine, FL - T&E Moving',
    description: 'Embark on a seamless and stress-free moving journey with T&E Moving and Storage, your premier St. Augustine, FL movers.',
    images: ['/images/te-st-augustine.jpg'],
  },
}

export default function StAugustineMoversPage() {
  return (
    <div className="min-h-screen relative">
      {/* Floating Quote Button */}
      <FloatingQuoteButton />

      {/* Quote Form Slideout */}
      <QuoteFormSlideout />

      <HeroSection
        headline="St. Augustine's Most Trusted Moving Company"
        subheadline="Embark on a seamless and stress-free moving journey with T&E Moving and Storage, your premier St. Augustine, FL movers. As your local moving experts, we take pride in providing top-notch services that cater to your unique needs."
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
        trustBadges={['Licensed & Insured', 'Local Experts', 'Family-Owned']}
      />

      <AccoladesSection
        badges={[
          'Licensed & Insured',
          'Local St. Augustine Company',
          'Family-Owned Business',
          'Customer Satisfaction Guarantee',
          'BBB A+ Rated',
          '5-Star Reviews'
        ]}
      />

      <ValuePropositionSection
        title="Why Choose T&E Movers in St. Augustine?"
        subtitle="Experience the difference with our local expertise and community commitment"
        benefits={[
          {
            icon: "🏛️",
            title: "Historic City Expertise",
            description: "Deep knowledge of St. Augustine area and historic district logistics"
          },
          {
            icon: "👥",
            title: "Community Involvement",
            description: "Active members of the St. Augustine community for over 25 years"
          },
          {
            icon: "⚡",
            title: "Quick Response",
            description: "Fast response times for quotes and scheduling in the St. Augustine area"
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
            icon: "🛡️",
            title: "Licensed & Insured",
            description: "Full protection for your belongings throughout the entire move"
          }
        ]}
        layout="grid"
        columns={3}
      />

      <ServiceOverviewSection
        title="St. Augustine Moving Services"
        subtitle="Comprehensive moving solutions for all your St. Augustine relocation needs"
        services={[
          {
            icon: "🏠",
            title: "Local Moving",
            description: "Professional local moving services throughout St. Augustine and surrounding areas",
            features: [
              "Residential moves",
              "Commercial moves",
              "Same-day service",
              "Weekend availability"
            ]
          },
          {
            icon: "🚚",
            title: "Long Distance Moving",
            description: "Reliable long-distance moving services from St. Augustine to anywhere in the US",
            features: [
              "Cross-country moves",
              "GPS tracking",
              "Climate-controlled transport",
              "Full-service packing"
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
            icon: "🗑️",
            title: "Junk Removal",
            description: "Professional junk removal services to help you declutter before your move",
            features: [
              "Residential cleanup",
              "Commercial cleanup",
              "Eco-friendly disposal",
              "Same-day service"
            ]
          }
        ]}
        layout="grid"
      />

      <TimelineSection
        title="Your St. Augustine Move Timeline"
        subtitle="A simple, stress-free process designed for your convenience"
        steps={[
          {
            number: "01",
            title: "Free Quote",
            description: "Get a detailed estimate for your St. Augustine move with no hidden fees"
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
            description: "Careful unloading and setup at your new St. Augustine location"
          },
          {
            number: "05",
            title: "Post-Move Support",
            description: "Assistance with unpacking and setup to complete your move"
          }
        ]}
      />

      <TestimonialSection
        title="What St. Augustine Customers Say"
        subtitle="Real experiences from St. Augustine families and businesses"
        testimonials={[
          {
            quote: "T&E Moving made our move to St. Augustine so easy! They were professional, careful, and affordable. Highly recommend!",
            author: "Sarah M.",
            location: "St. Augustine"
          },
          {
            quote: "The team was amazing - they handled everything from packing to setup. Our move was stress-free thanks to them.",
            author: "Mike R.",
            location: "St. Augustine"
          },
          {
            quote: "Fast, reliable, and professional. They moved our office in one day with minimal disruption to our business.",
            author: "Jennifer L.",
            location: "St. Augustine"
          }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about moving in St. Augustine"
        faqs={[
          {
            question: "What areas do you serve in St. Augustine?",
            answer: "We serve all of St. Augustine and surrounding areas including Nocatee, Palm Coast, St. Johns County, and more."
          },
          {
            question: "How far in advance should I book my St. Augustine move?",
            answer: "We recommend booking at least 2-3 weeks in advance for local moves, especially during peak moving seasons (May-September)."
          },
          {
            question: "Do you offer same-day moving services in St. Augustine?",
            answer: "Yes, we offer same-day moving services for local moves when available. Contact us for immediate availability."
          },
          {
            question: "What is included in your St. Augustine moving quote?",
            answer: "Our quotes include loading, transportation, unloading, and basic furniture placement. Packing services are available for an additional fee."
          },
          {
            question: "Are you licensed and insured in St. Augustine?",
            answer: "Yes, we are fully licensed and insured. Your belongings are protected throughout the entire moving process."
          },
          {
            question: "Do you provide packing materials in St. Augustine?",
            answer: "Yes, we provide all necessary packing materials including boxes, tape, bubble wrap, and furniture blankets."
          }
        ]}
      />

      <CTASection
        title="Ready to Start Your St. Augustine Move?"
        subtitle="Get your free quote today and experience stress-free moving in St. Augustine"
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
          "Local expertise",
          "St. Augustine service"
        ]}
      />
    </div>
  )
} 