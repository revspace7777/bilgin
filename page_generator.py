#!/usr/bin/env python3
"""
Next.js Page Generator Script
Generates geo-targeted landing pages from a master template and JSON data.
"""

import json
import os
import re
from pathlib import Path
from typing import Dict, List, Any

def to_camel_case(text: str) -> str:
    """
    Convert a string to camelCase format.
    Handles spaces, hyphens, underscores, and periods properly.
    
    Examples:
    "Amelia Island" -> "ameliaIsland"
    "Ponte Vedra Beach" -> "ponteVedraBeach"
    "St. Augustine" -> "stAugustine"
    "St. Johns County" -> "stJohnsCounty"
    """
    # Remove special characters and split by spaces, hyphens, underscores, and periods
    words = re.split(r'[\s\-_\.]+', text)
    
    # Convert to camelCase
    if not words:
        return ""
    
    # First word should be lowercase
    result = words[0].lower()
    
    # Subsequent words should be capitalized
    for word in words[1:]:
        if word:
            result += word.capitalize()
    
    return result

def replace_content(content: str, old_city: str, new_city: str, new_city_camel_case: str, component_name: str) -> str:
    """
    Replace all instances of the old city name with the new city name in the content.
    Handles various formats and ensures proper JavaScript syntax.
    """
    
    # 1. Replace city names in various contexts (case-insensitive)
    # Handle "Jacksonville's" -> "New City's"
    content = re.sub(
        rf"{re.escape(old_city)}'s",
        f"{new_city}'s",
        content,
        flags=re.IGNORECASE
    )
    
    # Handle "Jacksonville" -> "New City"
    content = re.sub(
        rf"\b{re.escape(old_city)}\b",
        new_city,
        content,
        flags=re.IGNORECASE
    )
    
    # 2. Update the component name
    old_component = "JacksonvilleMovers"
    new_component = f"{component_name}Movers"
    content = content.replace(old_component, new_component)
    
    # 3. Update the zip code checker with a valid JavaScript variable name
    # This is the critical fix - ensure variable names are valid JavaScript
    zip_variable_name = f"{new_city_camel_case}DMACodes"
    
    # Replace the old variable declaration
    content = re.sub(
        r"const \w+DMACodes = \[.*?\];",
        f"const {zip_variable_name} = [32202, 32203, 32204, 32205, 32206, 32207, 32208, 32209, 32210, 32211, 32212, 32214, 32216, 32217, 32218, 32219, 32220, 32221, 32222, 32223, 32224, 32225, 32226, 32227, 32228, 32229, 32230, 32231, 32232, 32233, 32234, 32235, 32236, 32237, 32238, 32239, 32240, 32241, 32244, 32245, 32246, 32247, 32250, 32254, 32255, 32256, 32257, 32258, 32259, 32260, 32266, 32267, 32277];",
        content,
        flags=re.DOTALL
    )
    
    # Replace the usage of the variable
    content = re.sub(
        r"\w+DMACodes\.includes\(startingZip\)",
        f"{zip_variable_name}.includes(startingZip)",
        content
    )
    
    return content

def generate_pages():
    """
    Main function to generate all the landing pages.
    """
    
    # Load the JSON data
    try:
        with open('service_area_data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print("Error: service_area_data.json not found in current directory")
        return
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in service_area_data.json: {e}")
        return
    
    # Load the master template
    template_path = Path("app/l/jacksonville-movers/page.tsx")
    try:
        with open(template_path, 'r', encoding='utf-8') as f:
            master_template = f.read()
    except FileNotFoundError:
        print(f"Error: Master template not found at {template_path}")
        return
    
    # Get the base output directory
    base_output_dir = Path("app/l")
    base_output_dir.mkdir(parents=True, exist_ok=True)
    
    # Track generated pages
    generated_pages = []
    
    # Iterate through each location
    for location in data.get('serviceArea', {}).get('locations', []):
        primary_name = location.get('name', '')
        aliases = location.get('aliases', [])
        
        # Create a list of all names to iterate over
        all_names = [primary_name] + aliases
        
        # Iterate through each keyword template
        for keyword_template in data.get('keywordTemplates', []):
            for name in all_names:
                if not name.strip():
                    continue
                
                # Generate the primary keyword
                primary_keyword = keyword_template.replace('{location}', name)
                
                # Create the file slug (URL-friendly)
                file_slug = primary_keyword.lower().replace(' ', '-').replace("'", '').replace('"', '')
                
                # Create the component name (PascalCase) - handle special characters
                # Remove periods and other special chars, then convert to PascalCase
                clean_name = re.sub(r'[^\w\s]', '', name)  # Remove special characters except spaces
                component_name = ''.join(word.capitalize() for word in clean_name.split())
                
                # Create the output directory
                output_dir = base_output_dir / file_slug
                output_dir.mkdir(parents=True, exist_ok=True)
                
                # Create the output file path
                output_file = output_dir / "page.tsx"
                
                # Create a fresh copy of the template
                page_content = master_template
                
                # Add "use client" directive at the top for client-side interactivity
                if not page_content.startswith('"use client"'):
                    page_content = '"use client"\n\n' + page_content
                
                # Convert the new city name to camelCase for JavaScript variables
                new_city_camel_case = to_camel_case(name)
                
                # Replace content
                page_content = replace_content(page_content, "Jacksonville", name, new_city_camel_case, component_name)
                
                # Write the file
                try:
                    with open(output_file, 'w', encoding='utf-8') as f:
                        f.write(page_content)
                    
                    generated_pages.append(str(output_file))
                    print(f"Generated: {output_file}")
                    
                except Exception as e:
                    print(f"Error writing {output_file}: {e}")
    
    print(f"\nGeneration complete! Generated {len(generated_pages)} pages.")
    print("All pages are now ready for the Next.js build process.")

if __name__ == "__main__":
    generate_pages()