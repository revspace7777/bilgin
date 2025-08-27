#!/usr/bin/env python3
"""
Next.js Page Generator Script - One JSON at a Time
Processes each JSON file individually without bulk operations.
"""

import json
import os
import re
from pathlib import Path
from typing import Dict, List, Any

def to_pascal_case(text: str) -> str:
    """Convert a string to PascalCase format for React component names."""
    words = re.split(r'[\s\-_\.]+', text)
    if not words:
        return ""
    result = ""
    for word in words:
        if word:
            result += word.capitalize()
    return result

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

def process_single_json(json_file_path: Path) -> bool:
    """Process a single JSON file and generate its corresponding page."""
    try:
        # Read and validate the JSON file
        with open(json_file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Extract city name from the JSON data
        city_name = data.get('cityDetails', {}).get('cityName', '')
        if not city_name:
            print(f"⚠️  No city name found in {json_file_path.name}")
            return False
        
        # Create the file slug (URL-friendly)
        file_slug = city_name.lower().replace(' ', '-').replace('.', '').replace("'", '').replace('"', '')
        if not file_slug.endswith('-movers'):
            file_slug += '-movers'
        
        # Create the component name (PascalCase)
        component_name = to_pascal_case(city_name)
        
        # Create the output directory
        output_dir = Path("app/l") / file_slug
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # Create the output file path
        output_file = output_dir / "page.tsx"
        
        # Generate the page content
        page_content = create_page_content(city_name.lower().replace(" ", "-").replace(".", "").replace("'", ""), component_name)
        
        # Write the file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(page_content)
        
        print(f"✓ Generated: {output_file}")
        return True
        
    except json.JSONDecodeError as e:
        print(f"✗ Invalid JSON in {json_file_path.name}: {e}")
        return False
    except Exception as e:
        print(f"✗ Error processing {json_file_path.name}: {e}")
        return False

def generate_all_pages_from_json():
    """Generate pages by processing each JSON file individually."""
    print("Starting individual JSON processing...")
    
    # Get the data/local directory
    json_dir = Path("data/local")
    if not json_dir.exists():
        print("Error: data/local directory not found")
        return
    
    # Find all JSON files
    json_files = list(json_dir.glob("*.json"))
    if not json_files:
        print("No JSON files found in data/local/")
        return
    
    print(f"Found {len(json_files)} JSON files to process")
    
    # Process each JSON file individually
    successful = 0
    for json_file in json_files:
        print(f"\nProcessing: {json_file.name}")
        if process_single_json(json_file):
            successful += 1
        else:
            print(f"Failed to process: {json_file.name}")
    
    print(f"\n✓ Successfully processed {successful} out of {len(json_files)} JSON files!")
    print("All pages are now ready for the Next.js build process.")

if __name__ == "__main__":
    generate_all_pages_from_json()