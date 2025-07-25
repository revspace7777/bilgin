#!/usr/bin/env python3
"""
Direct Tandemovers.com Website Scraper
Extracts content more aggressively by looking at all text content
"""

import requests
from bs4 import BeautifulSoup
import os
import re
import time
from urllib.parse import urljoin, urlparse
import json

class TandemoversDirectScraper:
    def __init__(self):
        self.base_url = "https://tandemovers.com"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.output_dir = "_reference/tandemovers"
        self.images_dir = f"{self.output_dir}/images"
        
        # Known pages to scrape
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
    
    def extract_main_content(self, soup):
        """Extract main content more aggressively"""
        # Remove unwanted elements first
        for element in soup.find_all(['script', 'style', 'noscript']):
            element.decompose()
        
        # Remove headers, footers, navigation
        for element in soup.find_all(['header', 'footer', 'nav', 'aside']):
            element.decompose()
        
        # Remove common CTA and form sections
        for element in soup.find_all(['form', 'button']):
            if any(keyword in element.get_text().lower() for keyword in 
                   ['quote', 'contact', 'call', 'get quote', 'free quote', 'book now']):
                element.decompose()
        
        # Remove social media widgets and common advertising elements
        for element in soup.find_all(class_=re.compile(r'social|widget|ad|banner|cta|popup|tracking')):
            element.decompose()
        
        # Find all text content
        content_elements = []
        
        # Look for all headings and paragraphs
        for element in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span']):
            text = element.get_text(strip=True)
            if text and len(text) > 10:
                # Skip unwanted content
                if any(skip in text.lower() for skip in [
                    'cookie', 'privacy', 'copyright', 'powered by', 'loading',
                    'clickcease', 'tracking', 'analytics', 'facebook', 'google'
                ]):
                    continue
                
                # Skip very short or very long text
                if 10 < len(text) < 2000:
                    content_elements.append(element)
        
        return content_elements
    
    def clean_text(self, text):
        """Clean and format text"""
        if not text:
            return ""
        
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text.strip())
        
        # Remove common unwanted text
        unwanted_patterns = [
            r'cookie|privacy|terms|conditions',
            r'©|copyright|all rights reserved',
            r'powered by|built with',
            r'loading|please wait',
            r'javascript|enable javascript',
            r'clickcease|tracking|analytics'
        ]
        
        for pattern in unwanted_patterns:
            text = re.sub(pattern, '', text, flags=re.IGNORECASE)
        
        return text.strip()
    
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
    
    def content_to_markdown(self, content_elements, metadata, images):
        """Convert content to markdown format"""
        markdown = []
        
        # Add metadata header
        markdown.append("# " + (metadata.get('title') or 'Untitled Page'))
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
        
        # Track processed text to avoid duplicates
        processed_text = set()
        
        for element in content_elements:
            text = self.clean_text(element.get_text())
            if not text or text in processed_text:
                continue
            
            processed_text.add(text)
            
            if element.name == 'h1':
                markdown.append(f"# {text}")
            elif element.name == 'h2':
                markdown.append(f"## {text}")
            elif element.name == 'h3':
                markdown.append(f"### {text}")
            elif element.name == 'h4':
                markdown.append(f"#### {text}")
            elif element.name == 'h5':
                markdown.append(f"##### {text}")
            elif element.name == 'h6':
                markdown.append(f"###### {text}")
            elif element.name == 'p':
                markdown.append(text)
                markdown.append("")
            elif element.name in ['div', 'span']:
                # Only add substantial content
                if len(text) > 20:
                    markdown.append(text)
                    markdown.append("")
        
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
        
        # Extract main content
        content_elements = self.extract_main_content(soup)
        
        # Extract images
        images = self.extract_images(soup, url)
        
        # Convert to markdown
        markdown_content = self.content_to_markdown(content_elements, metadata, images)
        
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
    scraper = TandemoversDirectScraper()
    scraper.scrape_all_pages() 