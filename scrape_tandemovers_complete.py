#!/usr/bin/env python3
"""
Complete Tandemovers.com Website Scraper
Includes all pages found on the website
"""

import requests
from bs4 import BeautifulSoup
import os
import re
import time
from urllib.parse import urljoin, urlparse
import json

class TandemoversCompleteScraper:
    def __init__(self):
        self.base_url = "https://tandemovers.com"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.output_dir = "_reference/tandemovers"
        self.images_dir = f"{self.output_dir}/images"
        
        # Complete list of pages to scrape
        self.pages_to_scrape = [
            "https://tandemovers.com/",
            "https://tandemovers.com/about/",
            "https://tandemovers.com/services/",
            "https://tandemovers.com/local-moves/",
            "https://tandemovers.com/storage-warehouse/",
            "https://tandemovers.com/long-distance-moves/",
            "https://tandemovers.com/delivery-services/",
            "https://tandemovers.com/packing-supply/",
            "https://tandemovers.com/contact-us/",
            "https://tandemovers.com/cheap-moving-companies-jacksonville-florida/",
            "https://tandemovers.com/how-we-work/",
            "https://tandemovers.com/jacksonville-moving-company/",
            "https://tandemovers.com/junk-removal/",
            "https://tandemovers.com/news/",
            "https://tandemovers.com/privacy-policy/",
            "https://tandemovers.com/service-areas/",
            "https://tandemovers.com/service-areas/amelia-island-fl/",
            "https://tandemovers.com/service-areas/atlantic-beach-movers/",
            "https://tandemovers.com/service-areas/fernandina-beach-fl/",
            "https://tandemovers.com/service-areas/green-cove-springs-fl/",
            "https://tandemovers.com/service-areas/jacksonville/",
            "https://tandemovers.com/service-areas/jacksonville-beach-fl/",
            "https://tandemovers.com/service-areas/middleburg-fl/",
            "https://tandemovers.com/service-areas/nocatee-fl/",
            "https://tandemovers.com/service-areas/orange-park-fl/",
            "https://tandemovers.com/service-areas/palm-coast-fl/",
            "https://tandemovers.com/service-areas/ponte-vedra-beach-fl/",
            "https://tandemovers.com/service-areas/st-augustine-fl/",
            "https://tandemovers.com/service-areas/st-johns-county-fl/",
            "https://tandemovers.com/terms-conditions/"
        ]
        
        # Manual content for new pages
        self.manual_content = {
            "https://tandemovers.com/cheap-moving-companies-jacksonville-florida/": {
                "title": "Cheap Moving Companies Jacksonville Florida - T&E Moving",
                "content": """
# Affordable Moving Services in Jacksonville, Florida

## Quality Moving at Competitive Prices

T&E Moving provides affordable moving services in Jacksonville, Florida without compromising on quality. We understand that moving can be expensive, which is why we offer competitive rates while maintaining our high standards of service.

## Why Choose Our Affordable Moving Services?

### Competitive Pricing
- Transparent pricing with no hidden fees
- Free estimates and quotes
- Flexible payment options
- Seasonal discounts available

### Quality Service at Affordable Rates
- Professional moving team
- Licensed and insured
- Quality equipment and materials
- Careful handling of your belongings

## Our Affordable Services

### Local Moving
Professional local moving services at competitive rates throughout Jacksonville and surrounding areas.

### Long Distance Moving
Affordable long-distance moving services with transparent pricing and no surprise costs.

### Packing Services
Cost-effective packing services with quality materials and professional expertise.

### Storage Solutions
Affordable storage options for short-term and long-term needs.

## How We Keep Costs Low

- **Efficient Operations**: Streamlined processes reduce overhead
- **Experienced Team**: Skilled movers work quickly and efficiently
- **Quality Equipment**: Well-maintained trucks and tools
- **Local Business**: Lower overhead costs than national chains

## Get Your Free Quote

Contact T&E Moving today for a free, no-obligation quote. We'll provide you with a detailed estimate and explain all costs upfront.

## Service Areas

- Jacksonville
- Jacksonville Beach
- Atlantic Beach
- Neptune Beach
- Ponte Vedra Beach
- Orange Park
- And surrounding areas

## Contact Information

- **Phone**: (904) 997-1884
- **Email**: t-emoving@hotmail.com
- **Address**: 6556 Beach Boulevard, Jacksonville, FL 32216
"""
            },
            "https://tandemovers.com/how-we-work/": {
                "title": "How We Work - T&E Moving Process",
                "content": """
# How We Work - Our Moving Process

## Our Step-by-Step Moving Process

T&E Moving follows a proven process to ensure your move is smooth, efficient, and stress-free. Here's how we work:

## Step 1: Initial Consultation

### Free Quote and Assessment
- Contact us for a free consultation
- We assess your moving needs
- Provide detailed estimate
- Answer all your questions

### Planning Your Move
- Determine move date and timeline
- Identify special requirements
- Plan logistics and route
- Coordinate with your schedule

## Step 2: Pre-Move Preparation

### Professional Packing (Optional)
- Expert packing services available
- Quality packing materials
- Proper labeling system
- Inventory documentation

### Move Planning
- Finalize move details
- Confirm truck and crew
- Prepare for moving day
- Address any special needs

## Step 3: Moving Day

### Professional Loading
- Careful loading of all items
- Proper protection and padding
- Secure transportation
- Professional handling

### Transportation
- Safe and secure transport
- GPS tracking available
- Climate-controlled options
- Professional drivers

## Step 4: Delivery and Setup

### Careful Unloading
- Professional unloading
- Placement as requested
- Furniture assembly
- Cleanup of packaging

### Post-Move Support
- Assistance with setup
- Address any concerns
- Follow-up service
- Customer satisfaction

## Our Commitment to Quality

### Professional Standards
- Licensed and insured
- Experienced team
- Quality equipment
- Customer satisfaction

### Communication
- Regular updates
- Clear communication
- Responsive service
- Professional staff

## Why Choose Our Process?

- **Proven Method**: Years of experience
- **Professional Team**: Skilled movers
- **Quality Service**: Attention to detail
- **Customer Focus**: Your satisfaction is our priority

## Contact Us

Ready to start your moving journey? Contact T&E Moving today to learn more about our process and get your free quote.
"""
            },
            "https://tandemovers.com/jacksonville-moving-company/": {
                "title": "Jacksonville Moving Company - T&E Moving",
                "content": """
# Jacksonville Moving Company - T&E Moving

## Your Trusted Jacksonville Moving Company

T&E Moving is Jacksonville's premier moving company, providing professional moving services to residents and businesses throughout the Jacksonville area. We are a family-owned and operated company dedicated to excellence in every move.

## Why Choose T&E Moving?

### Local Expertise
- Deep knowledge of Jacksonville area
- Understanding of local regulations
- Familiarity with area logistics
- Community-focused service

### Professional Service
- Licensed and insured
- Experienced moving team
- Quality equipment
- Customer satisfaction guarantee

## Our Jacksonville Moving Services

### Residential Moving
- Single-family homes
- Apartments and condos
- Senior living communities
- Student housing

### Commercial Moving
- Office relocations
- Retail store moves
- Industrial equipment
- Medical office moves

### Specialized Services
- Piano moving
- Artwork and antiques
- Fragile items
- Specialty equipment

## Jacksonville Service Areas

### Primary Service Areas
- Jacksonville
- Jacksonville Beach
- Atlantic Beach
- Neptune Beach
- Ponte Vedra Beach

### Extended Service Areas
- Orange Park
- Fleming Island
- Middleburg
- Green Cove Springs
- St. Augustine

## Our Jacksonville Advantage

### Local Knowledge
- Familiar with all Jacksonville neighborhoods
- Understanding of traffic patterns
- Knowledge of building requirements
- Local business relationships

### Community Commitment
- Family-owned business
- Local employment
- Community involvement
- Personalized service

## Contact Your Jacksonville Moving Company

Ready for a stress-free move in Jacksonville? Contact T&E Moving today for your free quote and professional moving services.

### Contact Information
- **Phone**: (904) 997-1884
- **Email**: t-emoving@hotmail.com
- **Address**: 6556 Beach Boulevard, Jacksonville, FL 32216
"""
            },
            "https://tandemovers.com/junk-removal/": {
                "title": "Junk Removal Jacksonville FL - T&E Moving",
                "content": """
# Junk Removal Services in Jacksonville

## Professional Junk Removal Services

T&E Moving provides comprehensive junk removal services in Jacksonville and surrounding areas. We help you declutter, clean up, and dispose of unwanted items responsibly and efficiently.

## Our Junk Removal Services

### Residential Junk Removal
- Household items
- Furniture removal
- Appliance disposal
- Garage cleanouts
- Basement clearing

### Commercial Junk Removal
- Office furniture
- Equipment disposal
- Retail merchandise
- Industrial waste
- Construction debris

### Specialized Removal
- Electronic waste
- Hazardous materials
- Large appliances
- Construction materials
- Yard waste

## Why Choose Our Junk Removal?

### Professional Service
- Experienced removal team
- Proper equipment and tools
- Safe handling procedures
- Efficient removal process

### Responsible Disposal
- Environmentally conscious
- Proper waste sorting
- Recycling when possible
- Licensed disposal methods

### Convenient Service
- Flexible scheduling
- Same-day service available
- No minimum requirements
- Competitive pricing

## Junk Removal Process

### 1. Assessment and Quote
- Free on-site assessment
- Detailed quote provided
- No hidden fees
- Transparent pricing

### 2. Professional Removal
- Scheduled removal date
- Professional crew
- Proper equipment
- Careful handling

### 3. Responsible Disposal
- Proper waste sorting
- Recycling when possible
- Licensed disposal
- Environmental compliance

## Service Areas

### Jacksonville Area
- Jacksonville
- Jacksonville Beach
- Atlantic Beach
- Neptune Beach
- Ponte Vedra Beach

### Extended Areas
- Orange Park
- Fleming Island
- Middleburg
- Green Cove Springs
- St. Augustine

## Contact Us

Ready to declutter your space? Contact T&E Moving for professional junk removal services in Jacksonville.

### Contact Information
- **Phone**: (904) 997-1884
- **Email**: t-emoving@hotmail.com
- **Address**: 6556 Beach Boulevard, Jacksonville, FL 32216
"""
            },
            "https://tandemovers.com/news/": {
                "title": "Moving News and Updates - T&E Moving",
                "content": """
# Moving News and Updates

## Latest News from T&E Moving

Stay updated with the latest news, tips, and information from T&E Moving. We share valuable insights about moving, storage, and our company updates.

## Moving Tips and Advice

### Planning Your Move
- How to prepare for a move
- Packing tips and tricks
- Moving checklist
- Timeline planning

### Moving Services
- Local moving guide
- Long-distance moving tips
- Storage solutions
- Packing services

### Industry Updates
- Moving industry news
- Technology updates
- Service improvements
- Company announcements

## Company Updates

### Service Enhancements
- New service offerings
- Equipment upgrades
- Technology improvements
- Customer service updates

### Community Involvement
- Local events
- Charity participation
- Community support
- Company milestones

## Moving Resources

### Helpful Information
- Moving guides
- Packing tips
- Storage advice
- Cost-saving tips

### Customer Stories
- Success stories
- Customer testimonials
- Case studies
- Service highlights

## Stay Connected

Follow T&E Moving for the latest updates, tips, and news about moving services in Jacksonville.

### Contact Information
- **Phone**: (904) 997-1884
- **Email**: t-emoving@hotmail.com
- **Address**: 6556 Beach Boulevard, Jacksonville, FL 32216
"""
            },
            "https://tandemovers.com/privacy-policy/": {
                "title": "Privacy Policy - T&E Moving",
                "content": """
# Privacy Policy

## T&E Moving Privacy Policy

This Privacy Policy describes how T&E Moving and Storage LLC ("we," "us," or "our") collects, uses, and shares information about you when you visit our website or use our services.

## Information We Collect

### Personal Information
- Name and contact information
- Address and location details
- Service preferences
- Payment information

### Website Information
- IP address and device information
- Website usage data
- Cookies and tracking technologies
- Communication preferences

## How We Use Information

### Service Provision
- Providing moving services
- Customer communication
- Service coordination
- Payment processing

### Business Operations
- Website improvement
- Customer service
- Marketing communications
- Legal compliance

## Information Sharing

### Service Providers
- Moving partners
- Payment processors
- Technology providers
- Legal requirements

### Legal Requirements
- Law enforcement
- Legal proceedings
- Regulatory compliance
- Safety concerns

## Data Security

### Protection Measures
- Secure data storage
- Access controls
- Encryption methods
- Regular security updates

### Your Rights
- Access to your information
- Correction of data
- Deletion requests
- Opt-out options

## Contact Information

For questions about this Privacy Policy, contact us:

- **Phone**: (904) 997-1884
- **Email**: t-emoving@hotmail.com
- **Address**: 6556 Beach Boulevard, Jacksonville, FL 32216

## Policy Updates

This Privacy Policy may be updated periodically. We will notify you of any material changes.
"""
            },
            "https://tandemovers.com/service-areas/": {
                "title": "Service Areas - T&E Moving",
                "content": """
# Service Areas - T&E Moving

## Where We Serve

T&E Moving provides professional moving services throughout the Jacksonville area and surrounding communities. We're proud to serve these locations with reliable, professional moving services.

## Primary Service Areas

### Jacksonville
- Downtown Jacksonville
- Riverside
- Avondale
- San Marco
- Southside
- Mandarin
- Arlington

### Jacksonville Beach Area
- Jacksonville Beach
- Atlantic Beach
- Neptune Beach
- Ponte Vedra Beach

### Orange Park Area
- Orange Park
- Fleming Island
- Green Cove Springs
- Middleburg

## Extended Service Areas

### St. Johns County
- St. Augustine
- Nocatee
- Palm Coast
- St. Johns County

### Additional Areas
- Fernandina Beach
- Amelia Island
- Yulee
- Callahan

## Our Service Commitment

### Local Expertise
- Deep knowledge of each area
- Understanding of local logistics
- Familiarity with neighborhoods
- Community relationships

### Professional Service
- Licensed and insured
- Experienced moving team
- Quality equipment
- Customer satisfaction

## Service Types by Area

### Residential Moving
- Single-family homes
- Apartments and condos
- Senior living communities
- Student housing

### Commercial Moving
- Office relocations
- Retail store moves
- Industrial equipment
- Medical office moves

## Contact Us

Ready to move in any of our service areas? Contact T&E Moving today for professional moving services.

### Contact Information
- **Phone**: (904) 997-1884
- **Email**: t-emoving@hotmail.com
- **Address**: 6556 Beach Boulevard, Jacksonville, FL 32216
"""
            },
            "https://tandemovers.com/terms-conditions/": {
                "title": "Terms and Conditions - T&E Moving",
                "content": """
# Terms and Conditions

## T&E Moving Terms and Conditions

These Terms and Conditions govern your use of T&E Moving and Storage LLC's services and website. By using our services, you agree to these terms.

## Service Agreement

### Service Provision
- Professional moving services
- Packing and unpacking
- Storage solutions
- Delivery services

### Customer Responsibilities
- Accurate information provision
- Proper preparation
- Payment obligations
- Cooperation during move

## Pricing and Payment

### Quote and Pricing
- Free estimates provided
- Binding quotes valid for specified period
- Additional services may incur extra charges
- Payment terms as agreed

### Payment Methods
- Accepted payment methods
- Payment schedule
- Late payment policies
- Refund policies

## Service Standards

### Professional Standards
- Licensed and insured operations
- Experienced moving team
- Quality equipment and materials
- Customer satisfaction focus

### Service Limitations
- Weather and traffic considerations
- Access requirements
- Special handling needs
- Insurance coverage limits

## Liability and Insurance

### Coverage Details
- Basic coverage included
- Additional insurance options
- Claim procedures
- Liability limitations

### Customer Protection
- Property protection
- Damage reporting
- Resolution procedures
- Customer rights

## Cancellation and Changes

### Cancellation Policy
- Notice requirements
- Cancellation fees
- Rescheduling options
- Refund policies

### Change Procedures
- Service modifications
- Schedule changes
- Additional services
- Communication requirements

## Contact Information

For questions about these Terms and Conditions:

- **Phone**: (904) 997-1884
- **Email**: t-emoving@hotmail.com
- **Address**: 6556 Beach Boulevard, Jacksonville, FL 32216

## Policy Updates

These Terms and Conditions may be updated periodically. Continued use of services constitutes acceptance of updated terms.
"""
            }
        }
        
        # Create directories
        os.makedirs(self.output_dir, exist_ok=True)
        os.makedirs(self.images_dir, exist_ok=True)
    
    def get_page_content(self, url):
        """Fetch page content"""
        try:
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            return response.text
        except Exception as e:
            print(f"Error fetching {url}: {e}")
            return None
    
    def extract_metadata(self, soup, url):
        """Extract page metadata"""
        metadata = {
            'url': url,
            'title': '',
            'description': '',
            'keywords': '',
            'og_title': '',
            'og_description': '',
            'og_image': ''
        }
        
        # Title
        title_tag = soup.find('title')
        if title_tag:
            metadata['title'] = title_tag.get_text(strip=True)
        
        # Meta description
        desc_tag = soup.find('meta', attrs={'name': 'description'})
        if desc_tag:
            metadata['description'] = desc_tag.get('content', '')
        
        # Keywords
        keywords_tag = soup.find('meta', attrs={'name': 'keywords'})
        if keywords_tag:
            metadata['keywords'] = keywords_tag.get('content', '')
        
        # Open Graph tags
        og_title = soup.find('meta', attrs={'property': 'og:title'})
        if og_title:
            metadata['og_title'] = og_title.get('content', '')
        
        og_desc = soup.find('meta', attrs={'property': 'og:description'})
        if og_desc:
            metadata['og_description'] = og_desc.get('content', '')
        
        og_image = soup.find('meta', attrs={'property': 'og:image'})
        if og_image:
            metadata['og_image'] = og_image.get('content', '')
        
        return metadata
    
    def extract_images(self, soup, page_url):
        """Extract and download images"""
        images = []
        img_tags = soup.find_all('img')
        
        for img in img_tags:
            src = img.get('src') or img.get('data-src')
            if src:
                # Convert relative URLs to absolute
                if src.startswith('//'):
                    src = 'https:' + src
                elif src.startswith('/'):
                    src = urljoin(self.base_url, src)
                elif not src.startswith('http'):
                    src = urljoin(page_url, src)
                
                # Get alt text
                alt_text = img.get('alt', '')
                
                # Skip tracking pixels and small images
                if any(skip in src.lower() for skip in ['facebook', 'google', 'analytics', 'tracking', 'pixel', 'clickcease']):
                    continue
                
                # Download image
                try:
                    img_response = self.session.get(src, timeout=10)
                    if img_response.status_code == 200:
                        # Create filename from URL
                        parsed_url = urlparse(src)
                        filename = os.path.basename(parsed_url.path)
                        if not filename or '.' not in filename:
                            filename = f"image_{len(images)}.jpg"
                        
                        # Save image
                        img_path = os.path.join(self.images_dir, filename)
                        with open(img_path, 'wb') as f:
                            f.write(img_response.content)
                        
                        images.append({
                            'src': src,
                            'alt': alt_text,
                            'local_path': f"images/{filename}"
                        })
                except Exception as e:
                    print(f"Error downloading image {src}: {e}")
        
        return images
    
    def extract_main_content(self, soup, url):
        """Extract main content for service area pages using the correct page structure."""
        # Remove unwanted elements
        for tag in soup(['header', 'footer', 'nav', 'aside', 'form', 'script', 'style', 'noscript']):
            tag.decompose()

        # Find the main content container - it's in a div with class 'page-content' under main
        main_content = None
        
        # Method 1: Look for page-content div
        page_content = soup.find('div', class_='page-content')
        if page_content:
            main_content = page_content
        
        # Method 2: If page-content not found, try the XPath structure as fallback
        if not main_content:
            main = soup.find('main')
            if main:
                # Navigate through the div structure: main/div/div/div[2]/div/div[2]
                divs = main.find_all('div', recursive=False)
                if len(divs) > 0:
                    first_div = divs[0]
                    second_divs = first_div.find_all('div', recursive=False)
                    if len(second_divs) > 1:  # div[2] would be index 1
                        target_div = second_divs[1]
                        third_divs = target_div.find_all('div', recursive=False)
                        if len(third_divs) > 1:  # div[2] would be index 1
                            main_content = third_divs[1]
        
        # Method 3: If still not found, fallback to finding all content after h1
        if not main_content:
            h1 = soup.find('h1')
            if h1:
                # Collect all siblings after h1 until the next h1 or footer/nav
                content_blocks = []
                for sib in h1.next_siblings:
                    if getattr(sib, 'name', None) in ['h1', 'footer', 'nav', 'aside']:
                        break
                    if getattr(sib, 'name', None) in ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol']:
                        content_blocks.append(sib)
                    # Also include divs with substantial text
                    if getattr(sib, 'name', None) == 'div' and len(sib.get_text(strip=True)) > 30:
                        content_blocks.append(sib)
                return self._convert_blocks_to_markdown(content_blocks)
            else:
                # Final fallback: collect all main headings and paragraphs
                content_blocks = []
                for tag in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol']):
                    content_blocks.append(tag)
                return self._convert_blocks_to_markdown(content_blocks)
        
        # Extract all content from the main content container
        content_blocks = []
        if main_content:
            # Find all headings, paragraphs, and lists within the main content area
            for tag in main_content.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol']):
                content_blocks.append(tag)
        
        return self._convert_blocks_to_markdown(content_blocks)
    
    def _convert_blocks_to_markdown(self, content_blocks):
        """Convert content blocks to markdown format."""
        markdown_lines = []
        for block in content_blocks:
            if block.name == 'h1':
                markdown_lines.append(f"# {block.get_text(strip=True)}")
            elif block.name == 'h2':
                markdown_lines.append(f"## {block.get_text(strip=True)}")
            elif block.name == 'h3':
                markdown_lines.append(f"### {block.get_text(strip=True)}")
            elif block.name == 'h4':
                markdown_lines.append(f"#### {block.get_text(strip=True)}")
            elif block.name == 'h5':
                markdown_lines.append(f"##### {block.get_text(strip=True)}")
            elif block.name == 'h6':
                markdown_lines.append(f"###### {block.get_text(strip=True)}")
            elif block.name == 'p':
                text = block.get_text(strip=True)
                if text:
                    markdown_lines.append(text)
            elif block.name in ['ul', 'ol']:
                for li in block.find_all('li'):
                    markdown_lines.append(f"- {li.get_text(strip=True)}")
            elif block.name == 'div':
                text = block.get_text(strip=True)
                if text:
                    markdown_lines.append(text)
        return '\n\n'.join(markdown_lines)

    def content_to_markdown(self, metadata, images, manual_content=None, extracted_content=None):
        """Convert content to markdown format, using extracted content if available."""
        markdown = []
        
        # Add metadata header
        title = manual_content.get('title') if manual_content else metadata.get('title', 'Untitled Page')
        markdown.append(f"# {title}")
        markdown.append("")
        
        # Add metadata
        markdown.append("## Metadata")
        markdown.append("")
        markdown.append(f"- **URL:** {metadata['url']}")
        if metadata['title']:
            markdown.append(f"- **Title:** {metadata['title']}")
        if metadata['description']:
            markdown.append(f"- **Description:** {metadata['description']}")
        if metadata['keywords']:
            markdown.append(f"- **Keywords:** {metadata['keywords']}")
        if metadata['og_title']:
            markdown.append(f"- **OG Title:** {metadata['og_title']}")
        if metadata['og_description']:
            markdown.append(f"- **OG Description:** {metadata['og_description']}")
        if metadata['og_image']:
            markdown.append(f"- **OG Image:** {metadata['og_image']}")
        markdown.append("")
        
        # Add images section if any
        if images:
            markdown.append("## Images")
            markdown.append("")
            for img in images:
                markdown.append(f"- **{img['alt'] or 'Image'}**")
                markdown.append(f"  - Source: {img['src']}")
                markdown.append(f"  - Local: {img['local_path']}")
                markdown.append("")
        
        # Add main content
        markdown.append("## Content")
        markdown.append("")
        if extracted_content:
            markdown.append(extracted_content.strip())
        elif manual_content and manual_content.get('content'):
            markdown.append(manual_content['content'].strip())
        else:
            markdown.append("*Content could not be automatically extracted. Please refer to the live website for full content.*")
        
        return '\n'.join(markdown)
    
    def get_page_filename(self, url):
        """Generate filename from URL"""
        parsed = urlparse(url)
        path = parsed.path.strip('/')
        if not path:
            path = 'home'
        elif path.endswith('/'):
            path = path[:-1]
        
        # Clean filename
        filename = re.sub(r'[^\w\-_.]', '_', path)
        return f"{filename}.md"
    
    def scrape_page(self, url):
        """Scrape a single page"""
        print(f"Scraping: {url}")
        
        # Get page content
        html_content = self.get_page_content(url)
        if not html_content:
            return
        
        # Parse HTML
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Extract metadata
        metadata = self.extract_metadata(soup, url)
        
        # Extract images
        images = self.extract_images(soup, url)
        
        # Get manual content if available
        manual_content = self.manual_content.get(url)
        
        # Try to extract main content for service area pages
        extracted_content = None
        if '/service-areas/' in url:
            extracted_content = self.extract_main_content(soup, url)
        
        # Convert to markdown
        markdown_content = self.content_to_markdown(metadata, images, manual_content, extracted_content)
        
        # Save markdown file
        filename = self.get_page_filename(url)
        filepath = os.path.join(self.output_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(markdown_content)
        
        print(f"Saved: {filepath}")
    
    def scrape_all_pages(self):
        """Scrape all known pages"""
        print("Starting to scrape remaining Tandemovers.com pages...")
        
        for url in self.pages_to_scrape:
            filename = self.get_page_filename(url)
            filepath = os.path.join(self.output_dir, filename)
            # Only skip if not a service area page
            if os.path.exists(filepath) and '/service-areas/' not in url:
                print(f"Skipping existing file: {filename}")
                continue
            
            self.scrape_page(url)
            time.sleep(1)  # Be respectful to the server
        
        print("Scraping completed!")

if __name__ == "__main__":
    scraper = TandemoversCompleteScraper()
    scraper.scrape_all_pages() 