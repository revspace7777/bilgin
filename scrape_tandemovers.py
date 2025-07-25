#!/usr/bin/env python3
"""
Tandemovers.com Website Scraper
Extracts main content from each page and saves as markdown files
"""

import requests
from bs4 import BeautifulSoup
import os
import re
import time
from urllib.parse import urljoin, urlparse
import json

class TandemoversScraper:
    def __init__(self):
        self.base_url = "https://tandemovers.com"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.visited_urls = set()
        self.output_dir = "_reference/tandemovers"
        self.images_dir = f"{self.output_dir}/images"
        
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
        """Extract main content, excluding headers, footers, navigation, and CTAs"""
        # Remove unwanted elements
        for element in soup.find_all(['header', 'footer', 'nav', 'aside']):
            element.decompose()
        
        # Remove common CTA and form sections
        for element in soup.find_all(['form', 'button']):
            if any(keyword in element.get_text().lower() for keyword in 
                   ['quote', 'contact', 'call', 'get quote', 'free quote', 'book now']):
                element.decompose()
        
        # Remove social media widgets and common advertising elements
        for element in soup.find_all(class_=re.compile(r'social|widget|ad|banner|cta|popup')):
            element.decompose()
        
        # Find main content areas
        main_content = []
        
        # Look for common main content selectors
        main_selectors = [
            'main',
            '.main-content',
            '.content',
            '.entry-content',
            '.post-content',
            '#content',
            '#main',
            '.page-content'
        ]
        
        for selector in main_selectors:
            main_elem = soup.select_one(selector)
            if main_elem:
                main_content.append(main_elem)
                break
        
        # If no main content found, look for large text blocks
        if not main_content:
            # Find paragraphs and headings that might be main content
            content_elements = soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'])
            for elem in content_elements:
                if len(elem.get_text(strip=True)) > 50:  # Only substantial content
                    main_content.append(elem)
        
        return main_content
    
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
            r'javascript|enable javascript'
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
        
        for element in content_elements:
            if element.name == 'h1':
                markdown.append(f"# {self.clean_text(element.get_text())}")
            elif element.name == 'h2':
                markdown.append(f"## {self.clean_text(element.get_text())}")
            elif element.name == 'h3':
                markdown.append(f"### {self.clean_text(element.get_text())}")
            elif element.name == 'h4':
                markdown.append(f"#### {self.clean_text(element.get_text())}")
            elif element.name == 'h5':
                markdown.append(f"##### {self.clean_text(element.get_text())}")
            elif element.name == 'h6':
                markdown.append(f"###### {self.clean_text(element.get_text())}")
            elif element.name == 'p':
                text = self.clean_text(element.get_text())
                if text:
                    markdown.append(text)
                    markdown.append("")
            elif element.name == 'div':
                text = self.clean_text(element.get_text())
                if text and len(text) > 20:  # Only substantial div content
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
    
    def discover_links(self, soup, current_url):
        """Discover all links on the page"""
        links = set()
        
        # Find all anchor tags
        for link in soup.find_all('a', href=True):
            href = link['href']
            
            # Skip anchors, javascript, mailto, tel
            if href.startswith('#') or href.startswith('javascript:') or href.startswith('mailto:') or href.startswith('tel:'):
                continue
            
            # Convert relative URLs to absolute
            if href.startswith('//'):
                href = 'https:' + href
            elif href.startswith('/'):
                href = urljoin(self.base_url, href)
            elif not href.startswith('http'):
                href = urljoin(current_url, href)
            
            # Only include links to the same domain
            if href.startswith(self.base_url):
                # Remove query parameters and fragments
                clean_url = href.split('?')[0].split('#')[0]
                links.add(clean_url)
        
        return links
    
    def scrape_page(self, url):
        """Scrape a single page"""
        if url in self.visited_urls:
            return
        
        print(f"Scraping: {url}")
        self.visited_urls.add(url)
        
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
        
        # Discover links for next iteration
        return self.discover_links(soup, url)
    
    def scrape_site(self):
        """Scrape the entire site"""
        print("Starting to scrape Tandemovers.com...")
        
        # Start with the home page
        urls_to_scrape = {self.base_url}
        discovered_urls = set()
        
        while urls_to_scrape:
            current_url = urls_to_scrape.pop()
            
            # Scrape the page and get new links
            new_links = self.scrape_page(current_url)
            if new_links:
                discovered_urls.update(new_links)
            
            # Add newly discovered URLs to the queue
            new_urls = discovered_urls - self.visited_urls
            urls_to_scrape.update(new_urls)
            
            # Small delay to be respectful
            time.sleep(1)
        
        print(f"Scraping completed! Found {len(self.visited_urls)} pages.")

if __name__ == "__main__":
    scraper = TandemoversScraper()
    scraper.scrape_site() 