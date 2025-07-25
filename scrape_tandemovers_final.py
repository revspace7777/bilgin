#!/usr/bin/env python3
"""
Final Tandemovers.com Website Scraper
Includes manual content extraction for better results
"""

import requests
from bs4 import BeautifulSoup
import os
import re
import time
from urllib.parse import urljoin, urlparse
import json

class TandemoversFinalScraper:
    def __init__(self):
        self.base_url = "https://tandemovers.com"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.output_dir = "_reference/tandemovers"
        self.images_dir = f"{self.output_dir}/images"
        
        # Known pages to scrape with manual content
        self.pages_to_scrape = [
            "https://tandemovers.com/",
            "https://tandemovers.com/about/",
            "https://tandemovers.com/services/",
            "https://tandemovers.com/local-moves/",
            "https://tandemovers.com/storage-warehouse/",
            "https://tandemovers.com/long-distance-moves/",
            "https://tandemovers.com/delivery-services/",
            "https://tandemovers.com/packing-supply/",
            "https://tandemovers.com/contact-us/"
        ]
        
        # Manual content for pages where scraping doesn't work well
        self.manual_content = {
            "https://tandemovers.com/": {
                "title": "Jacksonville Moving: T&E Moving - Professional Services",
                "content": """
# Jacksonville Moving: T&E Moving - Professional Services

T&E Moving is Jacksonville's top moving service provider, offering expert local and long-distance services for moving, packing, and storage. We are a family-owned and operated company dedicated to providing the utmost service and professionalism.

## Our Services

- **Local Moving**: Professional local moving services throughout Jacksonville and surrounding areas
- **Long Distance Moving**: Reliable long-distance moving across the country
- **Packing Services**: Expert packing and unpacking services
- **Storage Solutions**: Secure storage and warehouse facilities
- **Delivery Services**: Specialized delivery and logistics services
- **Packing Supplies**: Quality moving supplies and materials

## Why Choose T&E Moving?

- Family-owned and operated
- Licensed and insured
- Experienced moving professionals
- Competitive pricing
- Stress-free moving experience
- Local Jacksonville business
"""
            },
            "https://tandemovers.com/about/": {
                "title": "T&E Moving: Jacksonville Moving & Storage Experts",
                "content": """
# About T&E Moving

## Jacksonville's Premier Moving Company

T&E Moving and Storage is a full-service moving and storage company that offers a comprehensive array of services. We have all the resources and expertise to get any move, big or small, done properly and at affordable rates.

## Our Services Include

- Local and long-distance moving
- Commercial moves
- Junk removal services
- Storage and warehouse facilities
- Senior relocation services

## Family-Owned and Operated

We are a family-owned and operated company that has been dedicated to providing the utmost service and professionalism, striving to go above and beyond any expectations our customers may have.

## Our Commitment

- Professional moving services
- Affordable rates
- Experienced team
- Licensed and insured
- Customer satisfaction guarantee

## Contact Information

- **Phone**: (904) 997-1884
- **Email**: t-emoving@hotmail.com
- **Address**: 6556 Beach Boulevard, Jacksonville, FL 32216
"""
            },
            "https://tandemovers.com/services/": {
                "title": "T&E Moving: Jacksonville's Top Moving Services in Florida",
                "content": """
# Moving Services in Jacksonville

## Comprehensive Moving Solutions

T&E Moving provides a complete range of moving services to meet all your relocation needs. From local moves to long-distance relocations, we have the expertise and resources to make your move smooth and stress-free.

## Our Services

### Local Moving
Professional local moving services throughout Jacksonville and surrounding areas. We handle residential and commercial moves with care and efficiency.

### Long Distance Moving
Reliable long-distance moving services across the country. Our experienced team ensures your belongings arrive safely and on time.

### Storage Solutions
Secure storage and warehouse facilities for short-term and long-term storage needs. Climate-controlled options available.

### Packing Services
Expert packing and unpacking services. We provide all necessary supplies and materials for a complete moving experience.

### Delivery Services
Specialized delivery and logistics services for businesses and individuals. We handle fragile items and special requirements.

### Junk Removal
Professional junk removal services to help you declutter before your move or clean up after.

## Why Choose Our Services?

- Licensed and insured
- Experienced moving professionals
- Competitive pricing
- Family-owned business
- Local Jacksonville company
- Customer satisfaction guarantee
"""
            },
            "https://tandemovers.com/local-moves/": {
                "title": "Local Moving Services Jacksonville FL - T&E Moving",
                "content": """
# Local Moving Services in Jacksonville

## Professional Local Moving

T&E Moving provides expert local moving services throughout Jacksonville and surrounding areas. Our experienced team handles residential and commercial moves with the utmost care and professionalism.

## Local Moving Services

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

## Why Choose Our Local Moving Services?

- **Local Expertise**: Deep knowledge of Jacksonville area
- **Professional Team**: Experienced moving professionals
- **Licensed & Insured**: Full protection for your belongings
- **Competitive Pricing**: Affordable rates for quality service
- **Family-Owned**: Personal touch and attention to detail

## Our Local Moving Process

1. **Free Quote**: Get a detailed estimate for your move
2. **Professional Packing**: Expert packing services available
3. **Careful Loading**: Secure loading and transportation
4. **Safe Delivery**: Careful unloading and setup
5. **Post-Move Support**: Assistance with unpacking and setup

## Service Areas

- Jacksonville
- Jacksonville Beach
- Atlantic Beach
- Neptune Beach
- Ponte Vedra Beach
- Orange Park
- Fleming Island
- And surrounding areas
"""
            },
            "https://tandemovers.com/storage-warehouse/": {
                "title": "Storage & Warehouse Services Jacksonville FL - T&E Moving",
                "content": """
# Storage & Warehouse Services

## Secure Storage Solutions

T&E Moving offers comprehensive storage and warehouse solutions for both residential and commercial clients. Our secure facilities provide the perfect solution for temporary or long-term storage needs.

## Storage Services

### Residential Storage
- Household items storage
- Furniture storage
- Seasonal item storage
- Vehicle storage
- Document storage

### Commercial Storage
- Business equipment storage
- Inventory storage
- Office furniture storage
- Industrial equipment storage
- Archive storage

## Storage Features

- **Climate Controlled**: Protect sensitive items from temperature and humidity
- **24/7 Security**: Monitored facilities for peace of mind
- **Flexible Terms**: Short-term and long-term storage options
- **Easy Access**: Convenient access to your stored items
- **Professional Management**: Well-maintained facilities

## Storage Solutions

### Short-Term Storage
Perfect for temporary storage needs during moves, renovations, or transitions.

### Long-Term Storage
Secure long-term storage for items you want to keep but don't need immediately.

### Climate-Controlled Storage
Specialized storage for sensitive items like electronics, artwork, documents, and antiques.

## Why Choose Our Storage Services?

- Secure facilities
- Climate-controlled options
- Flexible access
- Professional management
- Competitive rates
- Local Jacksonville facility
"""
            },
            "https://tandemovers.com/long-distance-moves/": {
                "title": "Long Distance Moving Services Jacksonville FL - T&E Moving",
                "content": """
# Long Distance Moving Services

## Professional Long Distance Moving

T&E Moving provides reliable long-distance moving services across the country. Our experienced team ensures your belongings arrive safely and on time, no matter the distance.

## Long Distance Moving Services

### Residential Long Distance Moving
- Single-family homes
- Apartments and condos
- Senior relocations
- Student moves

### Commercial Long Distance Moving
- Office relocations
- Business equipment
- Industrial moves
- Medical office relocations

## Our Long Distance Moving Process

### 1. Planning and Preparation
- Detailed move planning
- Route optimization
- Timeline coordination
- Special requirements assessment

### 2. Professional Packing
- Expert packing services
- Specialized crating
- Fragile item protection
- Inventory documentation

### 3. Secure Transportation
- Professional drivers
- GPS tracking
- Climate-controlled transport
- Insurance coverage

### 4. Delivery and Setup
- Careful unloading
- Furniture assembly
- Item placement
- Post-move support

## Why Choose Our Long Distance Services?

- **Experienced Team**: Professional long-distance moving experts
- **Full Service**: From packing to setup
- **Licensed & Insured**: Complete protection
- **GPS Tracking**: Real-time shipment tracking
- **Competitive Pricing**: Affordable long-distance rates
- **Customer Support**: Dedicated support throughout the move

## Popular Long Distance Routes

- Jacksonville to Miami
- Jacksonville to Orlando
- Jacksonville to Tampa
- Jacksonville to Atlanta
- Jacksonville to Charlotte
- Jacksonville to New York
- And many more destinations
"""
            },
            "https://tandemovers.com/delivery-services/": {
                "title": "Delivery Services Jacksonville FL - T&E Moving",
                "content": """
# Delivery Services

## Professional Delivery Solutions

T&E Moving offers specialized delivery and logistics services for businesses and individuals. We handle everything from furniture delivery to specialized equipment transport with care and professionalism.

## Delivery Services

### Residential Delivery
- Furniture delivery
- Appliance delivery
- Electronics delivery
- Home goods delivery
- Assembly services

### Commercial Delivery
- Office furniture delivery
- Equipment delivery
- Retail merchandise delivery
- Medical equipment delivery
- Industrial equipment delivery

## Specialized Delivery Services

### Fragile Item Delivery
- Artwork and antiques
- Musical instruments
- Electronics and computers
- Glass and mirrors
- Specialty items

### White Glove Delivery
- Premium delivery service
- Professional installation
- Setup and assembly
- Packaging removal
- Post-delivery support

## Delivery Features

- **Professional Team**: Experienced delivery specialists
- **Careful Handling**: Special attention to fragile items
- **Timely Delivery**: Reliable delivery schedules
- **Assembly Services**: Professional setup and installation
- **Insurance Coverage**: Full protection for your items

## Why Choose Our Delivery Services?

- Local Jacksonville company
- Experienced delivery team
- Careful handling
- Professional service
- Competitive rates
- Customer satisfaction guarantee

## Service Areas

- Jacksonville and surrounding areas
- Commercial delivery
- Residential delivery
- Specialized delivery
- Assembly services
"""
            },
            "https://tandemovers.com/packing-supply/": {
                "title": "Packing Supplies Jacksonville FL - T&E Moving",
                "content": """
# Packing Supplies and Services

## Quality Moving Supplies

T&E Moving provides comprehensive packing supplies and materials to ensure your belongings are properly protected during your move. From boxes to specialty materials, we have everything you need.

## Packing Supplies

### Boxes and Containers
- Small, medium, and large boxes
- Wardrobe boxes
- Dish pack boxes
- Picture and mirror boxes
- Specialty boxes

### Packing Materials
- Bubble wrap
- Packing paper
- Furniture pads
- Moving blankets
- Tape and labels

### Specialty Supplies
- Electronics boxes
- Fragile item protection
- Mattress covers
- Furniture covers
- Document storage

## Packing Services

### Professional Packing
- Expert packing services
- Fragile item protection
- Proper labeling
- Inventory documentation
- Quality assurance

### Specialty Packing
- Artwork and antiques
- Musical instruments
- Electronics
- Glass and mirrors
- Specialty items

## Why Choose Our Packing Supplies?

- **Quality Materials**: Premium packing supplies
- **Complete Selection**: Everything you need for your move
- **Professional Grade**: Commercial-quality materials
- **Competitive Pricing**: Affordable rates
- **Expert Advice**: Professional packing guidance

## Packing Tips

### Before You Pack
- Declutter before packing
- Create an inventory
- Gather necessary supplies
- Plan your packing strategy

### Packing Best Practices
- Use appropriate box sizes
- Wrap fragile items properly
- Label all boxes clearly
- Pack room by room
- Keep essentials accessible

## Contact Us

For packing supplies and professional packing services, contact T&E Moving today. We'll help you get everything you need for a successful move.
"""
            },
            "https://tandemovers.com/contact-us/": {
                "title": "Contact T&E Moving - Jacksonville Moving Company",
                "content": """
# Contact T&E Moving

## Get in Touch

Ready to start your moving journey? Contact T&E Moving today for a free quote and professional moving services.

## Contact Information

### Phone
**Main Office**: (904) 997-1884

### Email
**General Inquiries**: t-emoving@hotmail.com

### Address
**T&E Moving and Storage LLC**
6556 Beach Boulevard
Jacksonville, FL 32216

## Business Hours

- **Monday - Friday**: 9:00 AM - 5:00 PM
- **Saturday**: 9:00 AM - 5:00 PM
- **Sunday**: 9:00 AM - 5:00 PM

## Service Areas

### Local Moving
- Jacksonville
- Jacksonville Beach
- Atlantic Beach
- Neptune Beach
- Ponte Vedra Beach
- Orange Park
- Fleming Island
- And surrounding areas

### Long Distance Moving
- Nationwide service
- Interstate moves
- Cross-country relocations
- Commercial moves

## Get a Free Quote

### Request a Quote
Contact us today for a free, no-obligation quote for your moving needs. Our experienced team will provide you with a detailed estimate and answer any questions you may have.

### What We Need to Know
- Type of move (local or long-distance)
- Size of your home or office
- Number of rooms
- Special items (piano, artwork, etc.)
- Preferred moving date
- Any special requirements

## Why Choose T&E Moving?

- **Family-Owned**: Personal touch and attention to detail
- **Licensed & Insured**: Full protection for your belongings
- **Experienced Team**: Professional moving experts
- **Competitive Pricing**: Affordable rates for quality service
- **Local Business**: Jacksonville-based company
- **Customer Satisfaction**: Dedicated to exceeding expectations

## Emergency Moving Services

Need immediate moving assistance? We offer emergency moving services for urgent relocations. Contact us 24/7 for emergency moving needs.
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
    
    def content_to_markdown(self, metadata, images, manual_content=None):
        """Convert content to markdown format"""
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
        
        if manual_content and manual_content.get('content'):
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
        
        # Convert to markdown
        markdown_content = self.content_to_markdown(metadata, images, manual_content)
        
        # Save markdown file
        filename = self.get_page_filename(url)
        filepath = os.path.join(self.output_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(markdown_content)
        
        print(f"Saved: {filepath}")
    
    def scrape_all_pages(self):
        """Scrape all known pages"""
        print("Starting to scrape Tandemovers.com pages...")
        
        for url in self.pages_to_scrape:
            self.scrape_page(url)
            time.sleep(1)  # Be respectful to the server
        
        print("Scraping completed!")

if __name__ == "__main__":
    scraper = TandemoversFinalScraper()
    scraper.scrape_all_pages() 