import LocalMoversPageTemplate from '@/components/templates/LocalMoversPageTemplate';
import pageData from '@/data/local/st-johns.json';
import { Metadata } from 'next';
import { LocalPageData } from '@/lib/types';

// Type assertion to ensure data integrity
const typedPageData: LocalPageData = pageData;

// Metadata is generated dynamically from the JSON for perfect SEO
export const metadata: Metadata = {
  title: typedPageData.meta.title,
  description: typedPageData.meta.description,
};

export default function StJohnsMoversPage() {
  // The page is just the template component with the data passed in
  return <LocalMoversPageTemplate data={typedPageData} />;
}
