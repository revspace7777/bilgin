import json
import os
import re
from pathlib import Path

def load_json_data(file_path):
    """Load and parse the JSON data file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)

def load_template(file_path):
    """Load the master template file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def slugify(text):
    """Convert text to a URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[\s_]+', '-', text)  # Replace spaces and underscores with hyphens
    text = re.sub(r'[^\w-]', '', text)    # Remove all non-word chars except hyphens
    return text.strip('-')

def to_pascal_case(text):
    """Convert text to PascalCase."""
    return ''.join(word.capitalize() for word in re.split(r'[\s-]', text))

def replace_content(template_content, original_component_name, new_component_name, original_city, new_city, primary_keyword):
    """
    Replace placeholder content in the template with dynamic, location-specific content
    using regular expressions for robustness.
    """
    content = template_content

    # 1. Replace the component name
    content = content.replace(f"export default function {original_component_name}()", f"export default function {new_component_name}()")

    # 2. Keep "T&E Movers" as main headline, only change the subheadline
    content = content.replace(f"<p className=\"text-sm text-gray-600\">{original_city} Movers</p>", f"<p className=\"text-sm text-gray-600\">{primary_keyword.title()}</p>")

    # 3. Replace the main hero H1 tag
    content = content.replace(f"{original_city}'s <span className=\"text-red-400\">Premier Local Movers</span> Since 1998", f"{new_city}'s <span className=\"text-red-400\">Premier Local Movers</span> Since 1998")

    # 4. Replace the badge text
    content = content.replace(f" #1 Rated {original_city} Moving Company", f" #1 Rated {new_city} Moving Company")

    # 5. Add page title, meta description, and meta keywords at the top
    meta_content = f'''import {{ Button }} from "@/components/ui/button"
import {{ Card, CardContent, CardHeader, CardTitle }} from "@/components/ui/card"
import {{ Badge }} from "@/components/ui/badge"
import {{ Accordion, AccordionContent, AccordionItem, AccordionTrigger }} from "@/components/ui/accordion"
import {{ Tabs, TabsContent, TabsList, TabsTrigger }} from "@/components/ui/tabs"
import {{
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  CheckCircle,
  Users,
  ArrowRight,
  Quote,
  Award,
  Calendar,
  Package,
  Home,
  Building,
  Zap,
  FileText,
  Wrench,
  ThumbsUp,
  Lock,
  Boxes,
  Heart,
  DollarSign,
  MapPinIcon,
}} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"

export default function {new_component_name}() {{
  const checkZipCode = () => {{
    const startingZip = document.getElementById('startingZip')?.value;
    const destinationZip = document.getElementById('destinationZip')?.value;
    const resultDiv = document.getElementById('zipResult');
    const successDiv = document.getElementById('zipSuccess');
    const errorDiv = document.getElementById('zipError');
    
    // Jacksonville DMA region zip codes
    const jacksonvilleDMACodes = [
      // Duval County
      '32202', '32204', '32205', '32206', '32207', '32208', '32209', '32210',
      '32211', '32212', '32216', '32217', '32218', '32219', '32220', '32221',
      '32222', '32223', '32224', '32225', '32226', '32227', '32228', '32233',
      '32234', '32244', '32246', '32250', '32254', '32256', '32257', '32258',
      '32277',
      // St. Johns County
      '32080', '32081', '32082', '32084', '32086', '32092', '32095',
      // Clay County
      '32003', '32065', '32068', '32073',
      // Nassau County
      '32034', '32035', '32038', '32046', '32058', '32091',
      // Baker County
      '32026', '32025', '32011', '32009', '32030', '32033', '32034', '32035',
      '32038', '32046', '32058', '32091'
    ];
    
    if (startingZip && destinationZip) {{
      if (resultDiv) resultDiv.classList.remove('hidden');
      
      // Check if starting zip is in Jacksonville DMA
      if (jacksonvilleDMACodes.includes(startingZip)) {{
        if (successDiv) successDiv.classList.remove('hidden');
        if (errorDiv) errorDiv.classList.add('hidden');
      }} else {{
        if (successDiv) successDiv.classList.add('hidden');
        if (errorDiv) errorDiv.classList.remove('hidden');
      }}
    }} else {{
      alert('Please enter both zip codes.');
    }}
  }};

  return (
    <div className="min-h-screen bg-white relative">'''
    
    # Remove the first few lines and replace with our meta content
    lines = content.split('\n')
    # Find where the actual content starts (after imports and function declaration)
    start_index = 0
    for i, line in enumerate(lines):
        if '<div className="min-h-screen bg-white relative">' in line:
            start_index = i
            break
    
    # Replace the beginning with our meta content
    content = meta_content + '\n'.join(lines[start_index:])

    # 6. Update all image alt attributes to be city/keyword specific
    content = content.replace('alt="T&E Movers"', f'alt="T&E Movers - {primary_keyword.title()}"')
    content = content.replace('alt="T&E Movers Jacksonville Fleet"', f'alt="T&E Movers {new_city} Fleet - Professional Moving Services"')
    content = content.replace('alt="T&E Movers Jacksonville Team"', f'alt="T&E Movers {new_city} Team - Local Moving Experts"')
    content = content.replace('alt="T&E Movers Jacksonville Fleet"', f'alt="T&E Movers {new_city} Fleet - Professional Moving Services"')

    # 7. Insert Local Area Expertise section after the "Why Choose Us" section
    local_expertise_section = f'''
      <!-- Local Area Expertise Section -->
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Local Knowledge Matters in {new_city}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Moving in {new_city} requires more than just a truck and movers. It requires deep local knowledge that only comes from years of experience in the area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Local {new_city} Moving Expertise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team knows {new_city} like the back of our hands. From traffic patterns during peak moving seasons to building restrictions and parking regulations, we navigate the local challenges that out-of-town movers simply can't anticipate.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <MapPinIcon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Local Traffic</div>
                    <div className="text-sm text-gray-600">Know the best routes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Building className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Building Rules</div>
                    <div className="text-sm text-gray-600">Access restrictions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/facility-overview.png"
                alt="T&E Movers {new_city} Team - Local Moving Experts"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPinIcon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Neighborhood Knowledge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We know every neighborhood in {new_city}, from quiet residential streets to busy commercial districts. This knowledge helps us plan the most efficient moving routes and anticipate potential challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Timing Expertise</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Understanding {new_city}'s traffic patterns, school schedules, and seasonal variations helps us schedule moves at optimal times, ensuring minimal disruption to your day.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl text-center">Local Regulations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-600 leading-relaxed">
                  From parking permits to building access requirements, we're familiar with all the local regulations that can affect your move in {new_city}.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>'''

    # Find the "Why Choose Us" section and insert local expertise after it
    why_choose_pattern = 'Why 15,000+ Jacksonville Families Choose T&E Movers'
    if why_choose_pattern in content:
        # Find the end of the Why Choose Us section (look for the next major section)
        sections = content.split('{/* ')
        for i, section in enumerate(sections):
            if 'Why Choose Us' in section:
                # Insert our new section after this one
                if i + 1 < len(sections):
                    sections[i + 1] = local_expertise_section + '\n      {/* ' + sections[i + 1]
                break
        content = '{/* '.join(sections)

    # 8. Update service areas section to exclude the current city and add zip code checker
    # First, exclude the current city from the service areas list
    service_areas = [
        "Jacksonville", "Jacksonville Beach", "Atlantic Beach", "Neptune Beach", 
        "Ponte Vedra Beach", "St. Augustine", "Orange Park", "Fleming Island", 
        "Middleburg", "Green Cove Springs", "Fernandina Beach", "Amelia Island", 
        "Nocatee", "St. Johns County", "Mandarin", "Riverside"
    ]
    
    # Remove the current city from the list
    if new_city in service_areas:
        service_areas.remove(new_city)
    
    # Update the service areas section
    service_areas_content = f'''
      <!-- Service Areas -->
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Serving All of {new_city} & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From {new_city} to the surrounding communities, from St. Johns County to Clay County - we know every
              neighborhood and provide expert local moving services throughout Northeast Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {chr(10).join([f'            <Card key="{area}" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">' + chr(10) + f'              <div className="flex items-center justify-center space-x-2">' + chr(10) + f'                <MapPinIcon className="h-5 w-5 text-red-500" />' + chr(10) + f'                <span className="font-semibold text-gray-900">{area}</span>' + chr(10) + f'              </div>' + chr(10) + f'            </Card>' for area in service_areas])}
          </div>

          <!-- Zip Code Checker -->
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Check If We Serve Your Area</h3>
              <p className="text-gray-600 mb-6">
                Enter your starting and destination zip codes to see if we can help with your move.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Starting Zip Code</label>
                  <input 
                    type="text" 
                    id="startingZip" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 32250"
                    maxLength="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination Zip Code</label>
                  <input 
                    type="text" 
                    id="destinationZip" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 32082"
                    maxLength="5"
                  />
                </div>
              </div>
              
              <Button 
                onClick={{checkZipCode}} 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg mb-4"
              >
                Check Service Area
              </Button>
              
              <div id="zipResult" className="hidden">
                <div id="zipSuccess" className="hidden">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                      <span className="text-green-800 font-semibold">Great news! We serve your area.</span>
                    </div>
                    <p className="text-green-700 mt-2">Get your free quote today!</p>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg quote-trigger">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div id="zipError" className="hidden">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <Shield className="h-6 w-6 text-red-500 mr-2" />
                      <span className="text-red-800 font-semibold">We don't currently serve this area.</span>
                    </div>
                    <p className="text-red-700 mt-2">Please contact us to discuss options or check back later as we expand our service area.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>'''

    # Replace the existing service areas section
    service_areas_pattern = 'Serving All of Jacksonville & Surrounding Areas'
    if service_areas_pattern in content:
        # Find the service areas section and replace it
        sections = content.split('{/* ')
        for i, section in enumerate(sections):
            if 'Service Areas' in section:
                sections[i] = service_areas_content
                break
        content = '{/* '.join(sections)

    # 9. Expand use of primary keyword phrase throughout content (minimum 6 instances)
    # Replace various Jacksonville references with the primary keyword phrase
    
    # Replace "Jacksonville" in service area descriptions
    content = content.replace(f"throughout {original_city}, St. Johns County", f"throughout {new_city} and surrounding areas")
    content = content.replace(f"Years in {original_city}", f"Years serving {new_city}")
    content = content.replace(f"Based in {original_city}", f"Based in {new_city}")
    content = content.replace(f"serving all local areas", f"serving {new_city} and surrounding areas")
    
    # Replace in section headings and content
    content = content.replace(f"Why 15,000+ {original_city} Families Choose T&E Movers", f"Why 15,000+ {new_city} Families Choose T&E Movers")
    content = content.replace(f"Local {original_city} Experts", f"Local {new_city} Experts")
    content = content.replace(f"every neighborhood, traffic pattern, and building restriction in {original_city}", f"every neighborhood, traffic pattern, and building restriction in {new_city}")
    
    # Replace in FAQ sections
    content = content.replace(f"local moves in {original_city}", f"local moves in {new_city}")
    content = content.replace(f"{original_city} local moving experts", f"{new_city} local moving experts")
    content = content.replace(f"local moving in {original_city}", f"local moving in {new_city}")
    
    # Replace in customer stories
    content = content.replace(f"Real {original_city} Moving Stories", f"Real {new_city} Moving Stories")
    content = content.replace(f"from {original_city} families and businesses", f"from {new_city} families and businesses")
    
    # Replace in moving tips
    content = content.replace(f"Top 10 Tips for a Stress-Free {original_city} Move", f"Top 10 Tips for a Stress-Free {new_city} Move")
    content = content.replace(f"15,000+ local moves in {original_city}", f"15,000+ local moves in {new_city}")
    content = content.replace(f"Choose {original_city} inside and out", f"Choose {new_city} inside and out")
    content = content.replace(f"new {original_city} home", f"new {new_city} home")
    content = content.replace(f"utilities in {new_city}", f"utilities in {new_city}")
    content = content.replace(f"experienced {original_city} movers", f"experienced {new_city} movers")
    
    # Replace in final CTA
    content = content.replace(f"Ready to Move in {original_city}?", f"Ready to Move in {new_city}?")
    content = content.replace(f"15,000 satisfied {original_city} families", f"15,000 satisfied {new_city} families")
    content = content.replace(f"Jacksonville local moving company", f"{new_city} local moving company")
    
    # 10. Replace all other instances of the city name
    # Handle possessive and different cases
    content = content.replace(f"{original_city}'s", f"{new_city}'s")
    content = content.replace(original_city, new_city)
    content = content.replace(original_city.lower(), new_city.lower())

    return content

def main():
    """Main function to generate pages."""
    try:
        # Define file paths
        # NOTE: Ensure these paths are correct for your environment.
        json_file_path = 'json-template_jacksonville-movers.json'  # Fixed path
        template_file_path = 'app/l/jacksonville-movers/page.tsx'

        # Load data and template
        print("Loading data...")
        json_data = load_json_data(json_file_path)
        template_content = load_template(template_file_path)
        print("Data and template loaded successfully.")

        # Dynamically find the original component name from the template
        match = re.search(r"export default function (\w+)\(\)", template_content)
        if not match:
            print("Error: Could not find the component name in the template file.")
            return
        original_component_name = match.group(1)
        original_city = "Jacksonville" # The base city of the template
        print(f"Original component name detected: {original_component_name}")


        # --- Iteration and Generation Loop ---
        page_counter = 0
        for location_data in json_data['serviceArea']['locations']:
            location_names = [location_data['name']] + location_data.get('aliases', [])
            
            for name in location_names:
                for keyword_template in json_data['keywordTemplates']:
                    
                    # Create page variables
                    primary_keyword = keyword_template.replace('{location}', name)
                    file_slug = slugify(primary_keyword)
                    component_name = to_pascal_case(primary_keyword)

                    # Define output path
                    output_dir = Path(f"app/l/{file_slug}")
                    output_dir.mkdir(parents=True, exist_ok=True)
                    output_file_path = output_dir / "page.tsx"

                    # --- Content Substitution ---
                    new_page_content = replace_content(
                        template_content,
                        original_component_name,
                        component_name,
                        original_city,
                        name,
                        primary_keyword
                    )

                    # --- File Creation ---
                    with open(output_file_path, 'w', encoding='utf-8') as f:
                        f.write(new_page_content)
                    
                    page_counter += 1
                    print(f"({page_counter}) Generated: {output_file_path}")

        print(f"\n✅ Successfully generated {page_counter} pages.")

    except FileNotFoundError as e:
        print(f"Error: File not found. Please check your paths.")
        print(f"Details: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()
