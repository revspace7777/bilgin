#!/usr/bin/env python3
"""
Google Custom Search API Competitor Research
Uses Google Custom Search API to find competitors for local movers in Jacksonville
"""

import requests
import json
import time
from typing import List, Dict, Any
import csv
from datetime import datetime

class GoogleSearchCompetitorResearch:
    def __init__(self, api_key: str, search_engine_id: str):
        """
        Initialize with Google Custom Search API credentials.
        
        Args:
            api_key: Google API key with Custom Search enabled
            search_engine_id: Custom Search Engine ID
        """
        self.api_key = api_key
        self.search_engine_id = search_engine_id
        self.base_url = "https://www.googleapis.com/customsearch/v1"
        self.results = []
        
    def search_google_custom(self, query: str, num_results: int = 10) -> List[Dict[str, Any]]:
        """
        Search using Google Custom Search API.
        """
        params = {
            'key': self.api_key,
            'cx': self.search_engine_id,
            'q': query,
            'num': min(num_results, 10),  # Google CSE max is 10 per request
            'gl': 'us',  # United States
            'hl': 'en'   # English
        }
        
        try:
            response = requests.get(self.base_url, params=params)
            response.raise_for_status()
            data = response.json()
            
            competitors = []
            if 'items' in data:
                for i, item in enumerate(data['items'], 1):
                    competitors.append({
                        "query": query,
                        "position": i,
                        "title": item.get('title', ''),
                        "link": item.get('link', ''),
                        "snippet": item.get('snippet', ''),
                        "domain": self.extract_domain(item.get('link', '')),
                        "display_link": item.get('displayLink', ''),
                        "formatted_url": item.get('formattedUrl', '')
                    })
            
            return competitors
            
        except Exception as e:
            print(f"Error searching for '{query}': {e}")
            if hasattr(e, 'response') and e.response is not None:
                print(f"Response: {e.response.text}")
            return []
    
    def extract_domain(self, url: str) -> str:
        """Extract domain from URL."""
        try:
            from urllib.parse import urlparse
            parsed = urlparse(url)
            return parsed.netloc
        except:
            return url
    
    def generate_jacksonville_local_mover_queries(self) -> List[str]:
        """
        Generate semantic variants for "local movers in jacksonville"
        """
        base_terms = [
            "local movers",
            "local moving companies", 
            "local moving services",
            "local moving company",
            "local movers near me",
            "local moving"
        ]
        
        location_variants = [
            "Jacksonville FL",
            "Jacksonville Florida", 
            "Jacksonville",
            "Jacksonville area",
            "Jacksonville region"
        ]
        
        queries = []
        
        # Generate all combinations
        for base in base_terms:
            for location in location_variants:
                queries.append(f"{base} {location}")
        
        # Add some additional semantic variants
        additional_queries = [
            "Jacksonville local movers",
            "Jacksonville local moving companies",
            "local movers Jacksonville Florida",
            "local moving companies Jacksonville FL",
            "Jacksonville area local movers",
            "local moving services Jacksonville",
            "Jacksonville local moving services",
            "local movers near Jacksonville",
            "local moving company Jacksonville",
            "Jacksonville local moving company"
        ]
        
        queries.extend(additional_queries)
        
        # Remove duplicates while preserving order
        seen = set()
        unique_queries = []
        for query in queries:
            if query not in seen:
                seen.add(query)
                unique_queries.append(query)
        
        return unique_queries
    
    def search_all_variants(self, max_queries: int = 20) -> List[Dict[str, Any]]:
        """
        Search all semantic variants and collect results.
        """
        queries = self.generate_jacksonville_local_mover_queries()
        
        print(f"Generated {len(queries)} semantic variants")
        print("Searching top variants...")
        
        all_results = []
        
        for i, query in enumerate(queries[:max_queries], 1):
            print(f"Searching {i}/{min(max_queries, len(queries))}: '{query}'")
            
            try:
                results = self.search_google_custom(query, num_results=10)
                all_results.extend(results)
                
                # Add delay to respect rate limits
                time.sleep(1)
                
            except Exception as e:
                print(f"Error searching '{query}': {e}")
        
        return all_results
    
    def analyze_competitors(self, results: List[Dict[str, Any]]):
        """
        Analyze competitor data and generate insights.
        """
        domains = {}
        for result in results:
            domain = result.get('domain', '')
            if domain:
                if domain not in domains:
                    domains[domain] = {
                        'count': 0,
                        'positions': [],
                        'queries': set(),
                        'titles': set(),
                        'links': set()
                    }
                domains[domain]['count'] += 1
                domains[domain]['positions'].append(result.get('position', 0))
                domains[domain]['queries'].add(result.get('query', ''))
                domains[domain]['titles'].add(result.get('title', ''))
                domains[domain]['links'].add(result.get('link', ''))
        
        # Sort by frequency
        sorted_domains = sorted(domains.items(), key=lambda x: x[1]['count'], reverse=True)
        
        print("\n=== COMPETITOR ANALYSIS ===")
        print(f"Total results analyzed: {len(results)}")
        print(f"Unique competitors found: {len(domains)}")
        print(f"Queries searched: {len(set(r.get('query', '') for r in results))}")
        print("\nTop 20 Competitors:")
        
        for i, (domain, data) in enumerate(sorted_domains[:20], 1):
            avg_position = sum(data['positions']) / len(data['positions'])
            print(f"\n{i}. {domain}")
            print(f"   Appearances: {data['count']}")
            print(f"   Average position: {avg_position:.1f}")
            print(f"   Queries found in: {', '.join(list(data['queries'])[:3])}")
            print(f"   Sample title: {list(data['titles'])[0][:60]}...")
        
        return sorted_domains
    
    def export_results(self, results: List[Dict[str, Any]], filename: str = None):
        """
        Export results to CSV file.
        """
        if not filename:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"jacksonville_local_movers_competitors_{timestamp}.csv"
        
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['query', 'position', 'title', 'link', 'snippet', 'domain', 'display_link', 'formatted_url']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for result in results:
                writer.writerow(result)
        
        print(f"\nResults exported to {filename}")
        return filename

def main():
    """
    Main function to run competitor research.
    """
    print("=== Jacksonville Local Movers Competitor Research ===")
    print("Using Google Custom Search API")
    print()
    
    # Your API credentials
    api_key = "AIzaSyCKj2joDihjTqqzEVkeuibcRkCagNfA3Js"
    
    # You'll need to create a Custom Search Engine and get the Search Engine ID
    # Go to: https://cse.google.com/cse/
    # Create a new search engine that searches the entire web
    search_engine_id = input("Enter your Custom Search Engine ID (cx): ").strip()
    
    if not search_engine_id:
        print("Custom Search Engine ID required.")
        print("To get one:")
        print("1. Go to https://cse.google.com/cse/")
        print("2. Create a new search engine")
        print("3. Set it to search the entire web")
        print("4. Copy the Search Engine ID (cx)")
        return
    
    # Initialize research tool
    researcher = GoogleSearchCompetitorResearch(api_key, search_engine_id)
    
    print("\n=== SEARCHING COMPETITORS ===")
    print("Searching semantic variants of 'local movers in jacksonville'...")
    print()
    
    # Search all variants
    results = researcher.search_all_variants(max_queries=20)
    
    if results:
        print(f"\nFound {len(results)} total results")
        
        # Export results
        csv_file = researcher.export_results(results)
        
        # Analyze competitors
        competitor_analysis = researcher.analyze_competitors(results)
        
        print(f"\n=== SUMMARY ===")
        print(f"Total results: {len(results)}")
        print(f"Unique competitors: {len(competitor_analysis)}")
        print(f"Results saved to: {csv_file}")
        
    else:
        print("No results found. Please check your API key and Search Engine ID.")

if __name__ == "__main__":
    main() 