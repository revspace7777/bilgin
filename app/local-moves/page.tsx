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
  title: 'Local Moving and Storage: T&E Moving - Complete Moving & Storage Solutions',
  description: 'Professional local moving and storage services. T&E Moving provides comprehensive moving and storage solutions. Get your free quote for local moving and storage.',
  openGraph: {
    title: 'Local Moving and Storage - T&E Moving',
    description: 'Complete local moving and storage solutions. Professional moving services with secure storage facilities. Get your free quote today!',
    images: ['/images/facility-aerial.png'],
  },
}

export default function LocalMovesPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        headline="Local Moving and Storage Solutions"
        subheadline="T&E Moving provides expert local moving services combined with secure storage solutions. Our experienced team handles your move and offers flexible storage options for short and long-term needs. Complete moving and storage solutions under one roof."
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
          source: '/images/facility-aerial.png'
        }}
        trustBadges={['Licensed & Insured', 'Family-Owned', 'Secure Storage', '5-Star Rated']}
      />

      <AccoladesSection
        badges={[
          'Licensed & Insured',
          'Family-Owned Business',
          'Secure Storage Facilities',
          'Customer Satisfaction Guarantee',
          'BBB A+ Rated',
          '5-Star Google Reviews',
          'Climate-Controlled Storage'
        ]}
      />

      <ValuePropositionSection
        title="Why Choose Our Local Moving and Storage?"
        subtitle="Experience the convenience of complete moving and storage solutions"
        benefits={[
          {
            icon: "🏠",
            title: "Complete Solutions",
            description: "Moving and storage services combined for your convenience"
          },
          {
            icon: "🗄️",
            title: "Secure Storage",
            description: "Climate-controlled storage facilities with 24/7 security"
          },
          {
            icon: "👥",
            title: "Professional Team",
            description: "Experienced movers and storage specialists"
          },
          {
            icon: "💰",
            title: "Flexible Pricing",
            description: "Competitive rates for both moving and storage services"
          },
          {
            icon: "🛡️",
            title: "Full Protection",
            description: "Comprehensive insurance for moving and stored items"
          },
          {
            icon: "⚡",
            title: "Quick Access",
            description: "Easy access to your stored items when you need them"
          }
        ]}
        layout="grid"
        columns={3}
      />

      <ServiceOverviewSection
        title="Local Moving and Storage Services"
        subtitle="Comprehensive solutions for all your moving and storage needs"
        services={[
          {
            icon: "🚚",
            title: "Local Moving",
            description: "Professional local moving services with experienced teams",
            features: [
              "Residential moves",
              "Commercial moves",
              "Packing services",
              "Furniture assembly",
              "Loading/unloading"
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
              "24/7 security",
              "Easy access"
            ]
          },
          {
            icon: "📦",
            title: "Packing & Storage",
            description: "Professional packing with storage coordination",
            features: [
              "Professional packing",
              "Storage coordination",
              "Inventory management",
              "Box labeling",
              "Storage organization"
            ]
          },
          {
            icon: "🔄",
            title: "Moving & Storage Packages",
            description: "Combined moving and storage solutions for convenience",
            features: [
              "Complete packages",
              "Flexible terms",
              "Cost savings",
              "One-stop service",
              "Convenient coordination"
            ]
          }
        ]}
        layout="grid"
      />

      <TimelineSection
        title="Our Local Moving and Storage Process"
        subtitle="A seamless process that combines moving and storage for your convenience"
        steps={[
          {
            number: "01",
            title: "Free Consultation",
            description: "We assess your moving and storage needs with a detailed consultation"
          },
          {
            number: "02",
            title: "Customized Plan",
            description: "Create a personalized moving and storage plan that fits your needs"
          },
          {
            number: "03",
            title: "Professional Moving",
            description: "Expert moving services with careful handling of your belongings"
          },
          {
            number: "04",
            title: "Secure Storage",
            description: "Safe storage in our climate-controlled facilities with 24/7 security"
          },
          {
            number: "05",
            title: "Flexible Access",
            description: "Easy access to your stored items whenever you need them"
          }
        ]}
      />

      <TestimonialSection
        title="What Our Moving and Storage Customers Say"
        subtitle="Real experiences from customers who used our combined moving and storage services"
        testimonials={[
          {
            quote: "The moving and storage package was perfect for our situation. They moved our furniture and stored the rest until we were ready. Great service!",
            author: "Sarah M.",
            location: "Jacksonville Beach"
          },
          {
            quote: "Secure storage facilities and professional moving service. They made our transition so much easier with the combined service.",
            author: "Mike R.",
            location: "Orange Park"
          },
          {
            quote: "We needed storage while our new home was being built. T&E handled everything - moving and storage in one convenient package.",
            author: "Jennifer L.",
            location: "Ponte Vedra Beach"
          },
          {
            quote: "The storage facilities are clean and secure. Combined with their moving service, it was the perfect solution for our needs.",
            author: "David K.",
            location: "Atlantic Beach"
          }
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions About Moving and Storage"
        subtitle="Common questions about our local moving and storage services"
        faqs={[
          {
            question: "What storage options do you offer?",
            answer: "We offer climate-controlled storage facilities with flexible terms for short and long-term storage. Our facilities feature 24/7 security and easy access to your items."
          },
          {
            question: "Can you coordinate moving and storage together?",
            answer: "Yes, we offer combined moving and storage packages that coordinate both services for your convenience. This often saves money and simplifies the process."
          },
          {
            question: "How secure are your storage facilities?",
            answer: "Our storage facilities feature 24/7 security monitoring, climate control, and secure access systems. Your belongings are protected with comprehensive insurance coverage."
          },
          {
            question: "Do you offer climate-controlled storage?",
            answer: "Yes, our storage facilities are climate-controlled to protect your belongings from temperature and humidity damage."
          },
          {
            question: "How do I access my stored items?",
            answer: "You can access your stored items during business hours with advance notice. We make it easy to retrieve items when you need them."
          },
          {
            question: "What is included in a moving and storage package?",
            answer: "Our packages typically include moving services, storage for a specified period, and coordination between the two services. Contact us for a custom quote."
          },
          {
            question: "Do you provide storage for businesses?",
            answer: "Yes, we offer storage solutions for both residential and commercial clients, including business equipment and inventory storage."
          },
          {
            question: "How far in advance should I book moving and storage?",
            answer: "We recommend booking 2-3 weeks in advance for combined moving and storage services, especially during peak seasons."
          }
        ]}
      />

      <CTASection
        title="Ready for Complete Moving and Storage Solutions?"
        subtitle="Get your free quote today for professional moving and secure storage services"
        primaryCTA={{
          text: "Get Free Quote",
          action: "/quote"
        }}
        secondaryCTA={{
          text: "Call (904) 997-1884",
          action: "tel:9049971884"
        }}
        features={[
          "Complete solutions",
          "Secure storage",
          "Licensed & insured",
          "Climate-controlled",
          "Flexible terms",
          "Professional service"
        ]}
      />
    </div>
  )
} 