#!/usr/bin/env python3
"""
Generate all city pages from JSON data files
"""

import json
import os
from pathlib import Path
import re

def to_pascal_case(text: str) -> str:
    """Convert text to proper PascalCase for React component names."""
    # Split by hyphens, spaces, and underscores, then capitalize each word
    words = re.split(r'[-_\s]+', text)
    # Capitalize each word and join
    return ''.join(word.capitalize() for word in words if word)

def create_page_content(city_name: str, component_name: str) -> str:
    """Create the page.tsx content using the new template system."""
    return f'''import LocalMoversPageTemplate from '@/components/templates/LocalMoversPageTemplate';
import pageData from '@/data/local/{city_name.lower().replace(" ", "-").replace(".", "").replace("'", "")}.json';
import {{ Metadata }} from 'next';
import {{ LocalPageData }} from '@/lib/types';

// Type assertion to ensure data integrity
const typedPageData: LocalPageData = pageData;

// Metadata is generated dynamically from the JSON for perfect SEO
export const metadata: Metadata = {{
  title: typedPageData.meta.title,
  description: typedPageData.meta.description,
}};

export default function {component_name}MoversPage() {{
  // The page is just the template component with the data passed in
  return <LocalMoversPageTemplate data={{typedPageData}} />;
}}
'''

def generate_city_page(city_name: str):
    """Generate a page for a specific city."""
    # Create the file slug (URL-friendly)
    file_slug = city_name.lower().replace(' ', '-').replace('.', '').replace("'", '').replace('"', '')
    if not file_slug.endswith('-movers'):
        file_slug += '-movers'
    
    # Create the component name (PascalCase) - FIXED
    component_name = to_pascal_case(city_name)
    
    # Create the output directory
    output_dir = Path(f"app/l/{file_slug}")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Create the output file path
    output_file = output_dir / "page.tsx"
    
    # Generate the page content
    page_content = create_page_content(city_name.lower().replace(" ", "-").replace(".", "").replace("'", ""), component_name)
    
    # Write the file
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(page_content)
        print(f"✓ Generated: {output_file}")
        return True
    except Exception as e:
        print(f"✗ Error writing {output_file}: {e}")
        return False

def main():
    """Generate pages for all cities with JSON data."""
    cities = [
        "ponte-vedra",
        "jacksonville", 
        "st-augustine",
        "neptune-beach",
        "atlantic-beach",
        "jacksonville-beach",
        "st-johns",
        "duval-county",
        "nassau-county",
        "clay-county",
        "amelia-island",
        "fernandina-beach",
        "green-cove-springs",
        "middleburg",
        "fleming-island",
        "orange-park",
        "st-johns-county",
        "nocatee"
    ]
    
    print("Generating pages for all cities...")
    successful = 0
    
    for city in cities:
        if generate_city_page(city):
            successful += 1
    
    print(f"\n✓ Successfully generated {successful} out of {len(cities)} city pages!")
    return successful

if __name__ == "__main__":
    main()