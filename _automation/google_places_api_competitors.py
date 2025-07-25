#!/usr/bin/env python3
"""
Google Places API Competitor Research
Uses Google Places API to find competitors for local movers in Jacksonville
"""

import requests
import json
import time
from typing import List, Dict, Any
import csv
from datetime import datetime

class GooglePlacesCompetitorResearch:
    def __init__(self, api_key: str):
        """
        Initialize with Google Places API credentials.
        
        Args:
            api_key: Google API key with Places API enabled
        """
        self.api_key = api_key
        self.base_url = "https://maps.googleapis.com/maps/api/place"
        self.results = []
        
    def search_places_text(self, query: str, location: str = "Jacksonville, FL") -> List[Dict[str, Any]]:
        """
        Search using Google Places API Text Search.
        """
        url = f"{self.base_url}/textsearch/json"
        params = {
            'query': query,
            'location': location,
            'radius': 50000,  # 50km radius around Jacksonville
            'type': 'establishment',
            'key': self.api_key
        }
        
        try:
            response = requests.get(url, params=params)
            response.raise_for_status()
            data = response.json()
            
            competitors = []
            if data.get('status') == 'OK' and 'results' in data:
                for i, place in enumerate(data['results'], 1):
                    competitors.append({
                        "query": query,
                        "position": i,
                        "name": place.get('name', ''),
                        "place_id": place.get('place_id', ''),
                        "formatted_address": place.get('formatted_address', ''),
                        "rating": place.get('rating', ''),
                        "user_ratings_total": place.get('user_ratings_total', ''),
                        "types": place.get('types', []),
                        "business_status": place.get('business_status', ''),
                        "price_level": place.get('price_level', ''),
                        "website": self.get_place_website(place.get('place_id', '')),
                        "phone": self.get_place_phone(place.get('place_id', '')),
                        "domain": self.extract_domain(self.get_place_website(place.get('place_id', '')))
                    })
            
            return competitors
            
        except Exception as e:
            print(f"Error searching for '{query}': {e}")
            if hasattr(e, 'response') and e.response is not None:
                print(f"Response: {e.response.text}")
            return []
    
    def get_place_details(self, place_id: str) -> Dict[str, Any]:
        """
        Get detailed information about a place.
        """
        url = f"{self.base_url}/details/json"
        params = {
            'place_id': place_id,
            'fields': 'name,formatted_address,website,formatted_phone_number,rating,user_ratings_total,types,business_status,price_level',
            'key': self.api_key
        }
        
        try:
            response = requests.get(url, params=params)
            response.raise_for_status()
            data = response.json()
            
            if data.get('status') == 'OK':
                return data.get('result', {})
            
        except Exception as e:
            print(f"Error getting place details for {place_id}: {e}")
        
        return {}
    
    def get_place_website(self, place_id: str) -> str:
        """Get website URL for a place."""
        if not place_id:
            return ""
        
        details = self.get_place_details(place_id)
        return details.get('website', '')
    
    def get_place_phone(self, place_id: str) -> str:
        """Get phone number for a place."""
        if not place_id:
            return ""
        
        details = self.get_place_details(place_id)
        return details.get('formatted_phone_number', '')
    
    def extract_domain(self, url: str) -> str:
        """Extract domain from URL."""
        if not url:
            return ""
        try:
            from urllib.parse import urlparse
            parsed = urlparse(url)
            return parsed.netloc
        except:
            return url
    
    def generate_jacksonville_local_mover_queries(self) -> List[str]:
        """
        Generate search queries for Places API.
        """
        queries = [
            "local movers Jacksonville FL",
            "local moving companies Jacksonville FL",
            "local moving services Jacksonville FL",
            "local moving company Jacksonville FL",
            "local movers Jacksonville Florida",
            "local moving companies Jacksonville Florida",
            "local moving services Jacksonville Florida",
            "local moving company Jacksonville Florida",
            "Jacksonville local movers",
            "Jacksonville local moving companies",
            "Jacksonville local moving services",
            "Jacksonville local moving company",
            "local movers Jacksonville",
            "local moving companies Jacksonville",
            "local moving services Jacksonville",
            "local moving company Jacksonville",
            "Jacksonville movers",
            "Jacksonville moving companies",
            "Jacksonville moving services",
            "Jacksonville moving company"
        ]
        
        return queries
    
    def search_all_variants(self, max_queries: int = 20) -> List[Dict[str, Any]]:
        """
        Search all semantic variants and collect results.
        """
        queries = self.generate_jacksonville_local_mover_queries()
        
        print(f"Generated {len(queries)} search queries")
        print("Searching top variants...")
        
        all_results = []
        
        for i, query in enumerate(queries[:max_queries], 1):
            print(f"Searching {i}/{min(max_queries, len(queries))}: '{query}'")
            
            try:
                results = self.search_places_text(query)
                all_results.extend(results)
                
                # Add delay to respect rate limits
                time.sleep(2)
                
            except Exception as e:
                print(f"Error searching '{query}': {e}")
        
        return all_results
    
    def analyze_competitors(self, results: List[Dict[str, Any]]):
        """
        Analyze competitor data and generate insights.
        """
        businesses = {}
        for result in results:
            name = result.get('name', '')
            domain = result.get('domain', '')
            place_id = result.get('place_id', '')
            
            if name and place_id:
                if place_id not in businesses:
                    businesses[place_id] = {
                        'name': name,
                        'domain': domain,
                        'count': 0,
                        'positions': [],
                        'queries': set(),
                        'rating': result.get('rating', ''),
                        'user_ratings_total': result.get('user_ratings_total', ''),
                        'address': result.get('formatted_address', ''),
                        'phone': result.get('phone', ''),
                        'website': result.get('website', ''),
                        'types': result.get('types', [])
                    }
                businesses[place_id]['count'] += 1
                businesses[place_id]['positions'].append(result.get('position', 0))
                businesses[place_id]['queries'].add(result.get('query', ''))
        
        # Sort by frequency
        sorted_businesses = sorted(businesses.items(), key=lambda x: x[1]['count'], reverse=True)
        
        print("\n=== COMPETITOR ANALYSIS ===")
        print(f"Total results analyzed: {len(results)}")
        print(f"Unique businesses found: {len(businesses)}")
        print(f"Queries searched: {len(set(r.get('query', '') for r in results))}")
        print("\nTop 20 Competitors:")
        
        for i, (place_id, data) in enumerate(sorted_businesses[:20], 1):
            avg_position = sum(data['positions']) / len(data['positions']) if data['positions'] else 0
            rating = data.get('rating', 'N/A')
            total_ratings = data.get('user_ratings_total', 'N/A')
            
            print(f"\n{i}. {data['name']}")
            print(f"   Domain: {data['domain']}")
            print(f"   Appearances: {data['count']}")
            print(f"   Average position: {avg_position:.1f}")
            print(f"   Rating: {rating} ({total_ratings} reviews)")
            print(f"   Address: {data['address']}")
            print(f"   Phone: {data['phone']}")
            print(f"   Queries found in: {', '.join(list(data['queries'])[:3])}")
        
        return sorted_businesses
    
    def export_results(self, results: List[Dict[str, Any]], filename: str = None):
        """
        Export results to CSV file.
        """
        if not filename:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"jacksonville_local_movers_places_{timestamp}.csv"
        
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['query', 'position', 'name', 'place_id', 'formatted_address', 'rating', 
                         'user_ratings_total', 'types', 'business_status', 'price_level', 
                         'website', 'phone', 'domain']
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
    print("Using Google Places API")
    print()
    
    # Your API credentials
    api_key = "AIzaSyCKj2joDihjTqqzEVkeuibcRkCagNfA3Js"
    
    # Initialize research tool
    researcher = GooglePlacesCompetitorResearch(api_key)
    
    print("\n=== SEARCHING COMPETITORS ===")
    print("Searching for local moving businesses in Jacksonville area...")
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
        print(f"Unique businesses: {len(competitor_analysis)}")
        print(f"Results saved to: {csv_file}")
        
    else:
        print("No results found. Please check your API key and Places API access.")

if __name__ == "__main__":
    main() 