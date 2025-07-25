#!/usr/bin/env python3
"""
Competitor Research Script for T&E Moving
This script helps identify competitors in Google SERP results for moving services in Jacksonville and surrounding areas.
"""

import requests
import json
import time
from typing import List, Dict, Any
import csv
from datetime import datetime
import os

class CompetitorResearch:
    def __init__(self, google_api_key: str = None):
        """
        Initialize the competitor research tool.
        
        Args:
            google_api_key: Google API key for various services
        """
        self.google_api_key = google_api_key
        self.results = []
        
    def search_google_manual(self, query: str) -> Dict[str, Any]:
        """
        Manual search method - returns instructions for manual search.
        """
        return {
            "query": query,
            "search_url": f"https://www.google.com/search?q={query.replace(' ', '+')}",
            "instructions": f"Search for: '{query}' and document the top 10 organic results"
        }
    
    def search_with_serpapi(self, query: str, serpapi_key: str) -> List[Dict[str, Any]]:
        """
        Search using SerpAPI (requires separate API key).
        """
        url = "https://serpapi.com/search"
        params = {
            "q": query,
            "api_key": serpapi_key,
            "engine": "google",
            "num": 10,
            "gl": "us",  # United States
            "hl": "en"   # English
        }
        
        try:
            response = requests.get(url, params=params)
            response.raise_for_status()
            data = response.json()
            
            competitors = []
            if "organic_results" in data:
                for result in data["organic_results"]:
                    competitors.append({
                        "query": query,
                        "position": result.get("position", 0),
                        "title": result.get("title", ""),
                        "link": result.get("link", ""),
                        "snippet": result.get("snippet", ""),
                        "domain": self.extract_domain(result.get("link", ""))
                    })
            
            return competitors
            
        except Exception as e:
            print(f"Error searching for '{query}': {e}")
            return []
    
    def search_with_google_custom_search(self, query: str) -> List[Dict[str, Any]]:
        """
        Search using Google Custom Search API (requires different setup).
        """
        if not self.google_api_key:
            print("Google Custom Search requires a different API key setup")
            return []
            
        # Note: This would require Google Custom Search API setup
        # which is different from the general Google API key
        print("Google Custom Search API requires separate setup")
        return []
    
    def extract_domain(self, url: str) -> str:
        """Extract domain from URL."""
        try:
            from urllib.parse import urlparse
            parsed = urlparse(url)
            return parsed.netloc
        except:
            return url
    
    def generate_search_queries(self) -> List[str]:
        """
        Generate all search queries for competitor research.
        """
        service_areas = [
            "Jacksonville FL", "St Augustine FL", "St Johns County", 
            "Ponte Vedra Beach", "Palm Coast FL", "Orange Park FL",
            "Fernandina Beach", "Amelia Island", "Atlantic Beach FL"
        ]
        
        service_types = [
            "commercial moving companies",
            "office moving services", 
            "warehouse relocation",
            "business moving companies",
            "local moving companies",
            "local movers",
            "long distance moving companies",
            "long distance movers",
            "full service moving companies",
            "packing and moving services",
            "piano movers",
            "specialty moving services",
            "junk removal",
            "junk removal companies",
            "hot tub removal",
            "hot tub removal companies"
        ]
        
        queries = []
        
        # Generate location-specific queries
        for area in service_areas:
            for service in service_types:
                queries.append(f"{service} {area}")
        
        # Add some general queries
        general_queries = [
            "best moving companies Jacksonville FL",
            "top movers Jacksonville Florida",
            "moving companies near me Jacksonville",
            "moving and storage Jacksonville FL",
            "senior moving services Jacksonville FL"
        ]
        
        queries.extend(general_queries)
        return queries
    
    def export_results(self, filename: str = None):
        """
        Export results to CSV file.
        """
        if not filename:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"competitor_research_{timestamp}.csv"
        
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['query', 'position', 'title', 'link', 'snippet', 'domain']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for result in self.results:
                writer.writerow(result)
        
        print(f"Results exported to {filename}")
    
    def analyze_competitors(self):
        """
        Analyze competitor data and generate insights.
        """
        domains = {}
        for result in self.results:
            domain = result.get('domain', '')
            if domain:
                if domain not in domains:
                    domains[domain] = {
                        'count': 0,
                        'positions': [],
                        'queries': set()
                    }
                domains[domain]['count'] += 1
                domains[domain]['positions'].append(result.get('position', 0))
                domains[domain]['queries'].add(result.get('query', ''))
        
        # Sort by frequency
        sorted_domains = sorted(domains.items(), key=lambda x: x[1]['count'], reverse=True)
        
        print("\n=== COMPETITOR ANALYSIS ===")
        print(f"Total results analyzed: {len(self.results)}")
        print(f"Unique competitors found: {len(domains)}")
        print("\nTop Competitors:")
        
        for domain, data in sorted_domains[:10]:
            avg_position = sum(data['positions']) / len(data['positions'])
            print(f"{domain}: {data['count']} appearances, avg position: {avg_position:.1f}")
            print(f"  Queries: {', '.join(list(data['queries'])[:3])}...")
            print()
    
    def create_manual_search_template(self):
        """
        Create a template for manual competitor research.
        """
        queries = self.generate_search_queries()
        
        template = f"""
# T&E Moving Competitor Research Template
Generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

## Instructions
1. Search each query in Google
2. Document the top 10 organic results (skip ads)
3. Note: Company name, URL, position, brief description
4. Focus on local competitors in Jacksonville and surrounding areas

## Search Queries to Research
"""
        
        for i, query in enumerate(queries, 1):
            search_url = f"https://www.google.com/search?q={query.replace(' ', '+')}"
            template += f"""
### {i}. {query}
**Search URL:** {search_url}
**Results to document:**
- Position 1: 
- Position 2: 
- Position 3: 
- Position 4: 
- Position 5: 
- Position 6: 
- Position 7: 
- Position 8: 
- Position 9: 
- Position 10: 

"""
        
        # Save template
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"manual_search_template_{timestamp}.md"
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(template)
        
        print(f"Manual search template created: {filename}")
        return filename

def main():
    """
    Main function to run competitor research.
    """
    print("=== T&E Moving Competitor Research Tool ===")
    print()
    
    # Initialize research tool with Google API key
    google_api_key = "AIzaSyCKj2joDihjTqqzEVkeuibcRkCagNfA3Js"
    researcher = CompetitorResearch(google_api_key)
    
    # Generate queries
    queries = researcher.generate_search_queries()
    print(f"Generated {len(queries)} search queries")
    print()
    
    # Ask user for method
    print("Choose research method:")
    print("1. Manual search (recommended - most reliable)")
    print("2. Automated search with SerpAPI (requires separate API key)")
    print("3. Create manual search template")
    
    choice = input("Enter choice (1, 2, or 3): ").strip()
    
    if choice == "1":
        print("\n=== MANUAL SEARCH INSTRUCTIONS ===")
        print("Search each of the following URLs in Google and document the top 10 organic results:")
        print()
        
        for i, query in enumerate(queries[:20], 1):  # Limit to first 20 for manual search
            search_url = f"https://www.google.com/search?q={query.replace(' ', '+')}"
            print(f"{i}. Query: '{query}'")
            print(f"   URL: {search_url}")
            print()
        
        print("For each search, document:")
        print("- Company name")
        print("- Website URL")
        print("- Position in results")
        print("- Brief description")
        print()
        
    elif choice == "2":
        serpapi_key = input("Enter your SerpAPI key (get from serpapi.com): ").strip()
        if not serpapi_key:
            print("SerpAPI key required for automated search")
            print("You can get a free API key from: https://serpapi.com/")
            return
        
        researcher.api_key = serpapi_key
        
        print("\n=== PERFORMING AUTOMATED SEARCHES ===")
        print("This may take several minutes...")
        print()
        
        for i, query in enumerate(queries[:10], 1):  # Limit to first 10 for demo
            print(f"Searching {i}/{min(10, len(queries))}: {query}")
            
            try:
                results = researcher.search_with_serpapi(query, serpapi_key)
                researcher.results.extend(results)
                
                # Add delay to avoid rate limiting
                time.sleep(1)
                
            except Exception as e:
                print(f"Error searching '{query}': {e}")
        
        # Export results
        researcher.export_results()
        
        # Analyze competitors
        researcher.analyze_competitors()
    
    elif choice == "3":
        print("\n=== CREATING MANUAL SEARCH TEMPLATE ===")
        template_file = researcher.create_manual_search_template()
        print(f"Template created: {template_file}")
        print("Use this template to systematically research competitors")
    
    else:
        print("Invalid choice")

if __name__ == "__main__":
    main() 