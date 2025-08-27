// /lib/types.ts

export interface Testimonial {
  customerName: string;
  initials: string;
  moveRoute: string;
  moveType: string;
  testimonialText: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export interface PricingTier {
  title: string;
  priceRange: string;
  duration: string;
  description: string;
}

export interface PricingData {
  isEnabled: boolean;
  heroPrice?: string;
  heroSubtext?: string;
  tiers?: PricingTier[];
  features?: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ServiceTab {
  value: string;
  triggerTitle: string;
  cards: ServiceItem[];
}

export interface MovingTip {
  number: string;
  title: string;
  description: string;
  icon: string;
}

// MASTER INTERFACE FOR ALL LOCAL PAGE DATA
export interface LocalPageData {
  meta: {
    title: string;
    description: string;
  };
  cityDetails: {
    cityName: string;
    county: string;
    colloquialName: string;
    zipCodes: string[];
    neighborhoods: string[];
  };
  header: {
    subtitle: string;
  };
  hero: {
    badgeText: string;
    headline: string;
    subheadline: string;
    image: string;
    imageBannerText: string;
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
  };
  trustIndicators: {
    icon: string;
    label: string;
  }[];
  pricing: PricingData;
  whyChooseUs: {
    headline: string;
    subheadline: string;
    cards: {
      icon: string;
      title: string;
      description: string;
    }[];
    promise: {
      headline: string;
      image: string;
      points: {
        title: string;
        description: string;
      }[];
    };
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
    tabs: ServiceTab[];
  };
  testimonials: {
    headline: string;
    subheadline: string;
    reviews: Testimonial[];
    buttonText: string;
  };
  faq: {
    headline: string;
    subheadline: string;
    categories: FaqCategory[];
  };
  movingTips: {
    headline: string;
    subheadline: string;
    tips: MovingTip[];
    cta: {
      headline: string;
      subheadline: string;
      buttonText: string;
    }
  };
  finalCta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  footer: {
    licenseText: string;
  };
}