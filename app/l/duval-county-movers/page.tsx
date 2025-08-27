import LocalMoversPageTemplate from '@/components/templates/LocalMoversPageTemplate';
import pageData from '@/data/local/duval-county.json';
import { Metadata } from 'next';
import { LocalPageData } from '@/lib/types';

// This line is the key fix: It tells TypeScript to treat the imported JSON as LocalPageData
const typedPageData = pageData as LocalPageData;

// This generates the page's title and description for SEO from the JSON file
export const metadata: Metadata = {
  title: typedPageData.meta.title,
  description: typedPageData.meta.description,
};

export default function DuvalCountyMoversPage() {
  // Finally, we render the template, passing in the typed data
  return <LocalMoversPageTemplate data={typedPageData} />;
}
