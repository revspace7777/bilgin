// /lib/types.ts

// Defines the structure for a single testimonial object
export interface Testimonial {
    customerName: string;
    initials: string;
    moveRoute: string;
    moveType: string;
    testimonialText: string;
  }
  
  // Defines the structure for a single FAQ item
  export interface FaqItem {
    question: string;
    answer: string;
  }
  
  // Defines the structure for the pricing section, allowing it to be toggled on/off
  export interface PricingData {
    isEnabled: boolean;
    price?: string; // e.g., "$397"
    details?: string; // e.g., "For a 2-man crew for 3 hours"
  }
  
  // Defines the structure for a single service card
  export interface ServiceCard {
    icon: string; // A string identifier for the icon, e.g., "Home" or "Building"
    title: string;
    description: string;
  }
  
  // This is the master interface for all the data needed to build a single local movers page.
  // Each city-specific JSON file must conform to this structure.
  export interface LocalPageData {
    meta: {
      title: string; // SEO Title
      description: string; // SEO Meta Description
    };
    cityDetails: {
      cityName: string; // e.g., "Jacksonville"
      colloquialName: string; // e.g., "Jax"
      county: string; // e.g., "Duval County"
      zipCodes: string[];
      neighborhoods: string[]; // Max 8 for the footer
    };
    header: {
      subtitle: string; // The text below "T&E Movers"
    };
    hero: {
      badgeText: string; // e.g., "#1 Rated Jacksonville Moving Company"
      headline: string; // The main H1 tag
      subheadline: string;
      imageBannerText: string; // e.g., "Based in Jacksonville, Serving All Local Areas"
      stat1: { value: string; label: string };
      stat2: { value: string; label: string };
      stat3: { value: string; label: string };
    };
    accolades: {
      // This section is static, but we can add variables if needed in the future
    };
    pricing: PricingData;
    whyChooseUs: {
      headline: string;
      subheadline: string;
      points: {
        icon: string;
        title: string;
        description: string;
      }[];
    };
    hyperlocalSection: {
      headline: string;
      subheadline: string;
      areaList: string[];
      buttonText: string;
    };
    services: {
      headline: string;
      subheadline: string;
      cards: ServiceCard[];
    };
    testimonials: {
      headline: string;
      subheadline: string;
      buttonText: string;
      reviews: Testimonial[];
    };
    faq: {
      headline: string;
      items: FaqItem[];
    };
    prefooter: {
      headline: string;
      // Button and feature box text are conditional on pricing.isEnabled
    };
  }
  