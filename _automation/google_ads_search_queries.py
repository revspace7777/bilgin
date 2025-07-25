#!/usr/bin/env python3
"""
Google Ads API - Historical Search Queries by Region
Pulls all historical search queries from Google Ads account, sorted by geographic regions
"""

import os
import sys
import csv
from datetime import datetime, timedelta
from typing import List, Dict, Any
import json

# Google Ads API imports
try:
    from google.ads.googleads.client import GoogleAdsClient
    from google.ads.googleads.errors import GoogleAdsException
    from google.ads.googleads.v14.services.services import GoogleAdsServiceClient
    from google.ads.googleads.v14.services.types import SearchGoogleAdsRequest
    from google.ads.googleads.v14.enums.types import (
        KeywordPlanNetworkEnum,
        DeviceEnum,
        DayOfWeekEnum,
        MonthOfYearEnum,
    )
except ImportError:
    print("Google Ads API library not found. Installing...")
    os.system("pip install google-ads")
    from google.ads.googleads.client import GoogleAdsClient
    from google.ads.googleads.errors import GoogleAdsException
    from google.ads.googleads.v14.services.services import GoogleAdsServiceClient
    from google.ads.googleads.v14.services.types import SearchGoogleAdsRequest

class GoogleAdsSearchQueryAnalyzer:
    def __init__(self, client_config_path: str = None):
        """
        Initialize Google Ads API client.
        
        Args:
            client_config_path: Path to google-ads.yaml config file
        """
        if client_config_path and os.path.exists(client_config_path):
            self.client = GoogleAdsClient.load_from_storage(client_config_path)
        else:
            # Try to use environment variables or default config
            self.client = GoogleAdsClient.load_from_env()
        
        self.service = self.client.get_service("GoogleAdsService")
        self.customer_id = None
        
    def set_customer_id(self, customer_id: str):
        """Set the customer ID to analyze."""
        self.customer_id = customer_id
        
    def get_all_campaigns(self) -> List[Dict[str, Any]]:
        """Get all campaigns in the account."""
        query = """
            SELECT 
                campaign.id,
                campaign.name,
                campaign.status,
                campaign.start_date,
                campaign.end_date,
                campaign.advertising_channel_type
            FROM campaign 
            WHERE campaign.status != 'REMOVED'
        """
        
        try:
            response = self.service.search(
                customer_id=self.customer_id,
                query=query
            )
            
            campaigns = []
            for row in response:
                campaigns.append({
                    'id': row.campaign.id,
                    'name': row.campaign.name,
                    'status': row.campaign.status.name,
                    'start_date': row.campaign.start_date,
                    'end_date': row.campaign.end_date,
                    'channel_type': row.campaign.advertising_channel_type.name
                })
            
            return campaigns
            
        except GoogleAdsException as ex:
            print(f"Error getting campaigns: {ex}")
            return []
    
    def get_search_queries_by_region(self, date_range_days: int = 365) -> List[Dict[str, Any]]:
        """
        Get all search queries with geographic data.
        
        Args:
            date_range_days: Number of days to look back
        """
        # Calculate date range
        end_date = datetime.now()
        start_date = end_date - timedelta(days=date_range_days)
        
        query = f"""
            SELECT 
                search_term_view.search_term,
                search_term_view.status,
                metrics.impressions,
                metrics.clicks,
                metrics.cost_micros,
                metrics.average_cpc,
                metrics.ctr,
                segments.date,
                segments.device,
                segments.geo_target_country,
                segments.geo_target_region,
                segments.geo_target_city,
                segments.geo_target_metro,
                campaign.id,
                campaign.name,
                ad_group.id,
                ad_group.name
            FROM search_term_view 
            WHERE segments.date >= '{start_date.strftime('%Y-%m-%d')}'
            AND segments.date <= '{end_date.strftime('%Y-%m-%d')}'
            AND metrics.impressions > 0
        """
        
        try:
            response = self.service.search(
                customer_id=self.customer_id,
                query=query
            )
            
            search_queries = []
            for row in response:
                search_queries.append({
                    'search_term': row.search_term_view.search_term,
                    'status': row.search_term_view.status.name,
                    'impressions': row.metrics.impressions,
                    'clicks': row.metrics.clicks,
                    'cost_micros': row.metrics.cost_micros,
                    'average_cpc': row.metrics.average_cpc,
                    'ctr': row.metrics.ctr,
                    'date': row.segments.date,
                    'device': row.segments.device.name if row.segments.device else 'UNSPECIFIED',
                    'country': row.segments.geo_target_country,
                    'region': row.segments.geo_target_region,
                    'city': row.segments.geo_target_city,
                    'metro': row.segments.geo_target_metro,
                    'campaign_id': row.campaign.id,
                    'campaign_name': row.campaign.name,
                    'ad_group_id': row.ad_group.id,
                    'ad_group_name': row.ad_group.name
                })
            
            return search_queries
            
        except GoogleAdsException as ex:
            print(f"Error getting search queries: {ex}")
            return []
    
    def get_geographic_performance(self, date_range_days: int = 365) -> List[Dict[str, Any]]:
        """
        Get geographic performance data.
        """
        end_date = datetime.now()
        start_date = end_date - timedelta(days=date_range_days)
        
        query = f"""
            SELECT 
                segments.geo_target_country,
                segments.geo_target_region,
                segments.geo_target_city,
                segments.geo_target_metro,
                metrics.impressions,
                metrics.clicks,
                metrics.cost_micros,
                metrics.average_cpc,
                metrics.ctr,
                metrics.conversions,
                metrics.conversions_value
            FROM customer 
            WHERE segments.date >= '{start_date.strftime('%Y-%m-%d')}'
            AND segments.date <= '{end_date.strftime('%Y-%m-%d')}'
            AND metrics.impressions > 0
        """
        
        try:
            response = self.service.search(
                customer_id=self.customer_id,
                query=query
            )
            
            geo_data = []
            for row in response:
                geo_data.append({
                    'country': row.segments.geo_target_country,
                    'region': row.segments.geo_target_region,
                    'city': row.segments.geo_target_city,
                    'metro': row.segments.geo_target_metro,
                    'impressions': row.metrics.impressions,
                    'clicks': row.metrics.clicks,
                    'cost_micros': row.metrics.cost_micros,
                    'average_cpc': row.metrics.average_cpc,
                    'ctr': row.metrics.ctr,
                    'conversions': row.metrics.conversions,
                    'conversions_value': row.metrics.conversions_value
                })
            
            return geo_data
            
        except GoogleAdsException as ex:
            print(f"Error getting geographic performance: {ex}")
            return []
    
    def analyze_search_queries_by_region(self, search_queries: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Analyze search queries grouped by geographic regions.
        """
        region_data = {}
        
        for query in search_queries:
            # Create region key
            region_key = self._create_region_key(query)
            
            if region_key not in region_data:
                region_data[region_key] = {
                    'region_info': {
                        'country': query.get('country', ''),
                        'region': query.get('region', ''),
                        'city': query.get('city', ''),
                        'metro': query.get('metro', '')
                    },
                    'search_queries': [],
                    'total_impressions': 0,
                    'total_clicks': 0,
                    'total_cost': 0,
                    'unique_queries': set()
                }
            
            # Add query data
            region_data[region_key]['search_queries'].append(query)
            region_data[region_key]['total_impressions'] += query.get('impressions', 0)
            region_data[region_key]['total_clicks'] += query.get('clicks', 0)
            region_data[region_key]['total_cost'] += query.get('cost_micros', 0) / 1000000  # Convert to dollars
            region_data[region_key]['unique_queries'].add(query.get('search_term', ''))
        
        # Convert sets to lists for JSON serialization
        for region in region_data.values():
            region['unique_queries'] = list(region['unique_queries'])
            region['unique_query_count'] = len(region['unique_queries'])
        
        return region_data
    
    def _create_region_key(self, query: Dict[str, Any]) -> str:
        """Create a unique key for a geographic region."""
        parts = []
        
        if query.get('city'):
            parts.append(query['city'])
        if query.get('metro'):
            parts.append(query['metro'])
        if query.get('region'):
            parts.append(query['region'])
        if query.get('country'):
            parts.append(query['country'])
        
        return ' > '.join(parts) if parts else 'Unknown'
    
    def export_results(self, data: Dict[str, Any], filename: str = None):
        """
        Export results to CSV and JSON files.
        """
        if not filename:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"google_ads_search_queries_{timestamp}"
        
        # Export detailed search queries
        csv_filename = f"{filename}_detailed.csv"
        with open(csv_filename, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = [
                'search_term', 'status', 'impressions', 'clicks', 'cost_micros', 
                'average_cpc', 'ctr', 'date', 'device', 'country', 'region', 
                'city', 'metro', 'campaign_id', 'campaign_name', 'ad_group_id', 'ad_group_name'
            ]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for region_data in data.values():
                for query in region_data['search_queries']:
                    writer.writerow(query)
        
        # Export regional summary
        summary_filename = f"{filename}_regional_summary.csv"
        with open(summary_filename, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = [
                'country', 'region', 'city', 'metro', 'total_impressions', 
                'total_clicks', 'total_cost', 'unique_query_count', 'avg_ctr'
            ]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for region_key, region_data in data.items():
                avg_ctr = (region_data['total_clicks'] / region_data['total_impressions'] * 100) if region_data['total_impressions'] > 0 else 0
                writer.writerow({
                    'country': region_data['region_info']['country'],
                    'region': region_data['region_info']['region'],
                    'city': region_data['region_info']['city'],
                    'metro': region_data['region_info']['metro'],
                    'total_impressions': region_data['total_impressions'],
                    'total_clicks': region_data['total_clicks'],
                    'total_cost': region_data['total_cost'],
                    'unique_query_count': region_data['unique_query_count'],
                    'avg_ctr': round(avg_ctr, 2)
                })
        
        # Export JSON summary
        json_filename = f"{filename}_summary.json"
        with open(json_filename, 'w', encoding='utf-8') as jsonfile:
            json.dump(data, jsonfile, indent=2, default=str)
        
        print(f"Results exported to:")
        print(f"  - {csv_filename}")
        print(f"  - {summary_filename}")
        print(f"  - {json_filename}")
        
        return {
            'detailed_csv': csv_filename,
            'summary_csv': summary_filename,
            'json_summary': json_filename
        }

def main():
    """
    Main function to run Google Ads search query analysis.
    """
    print("=== Google Ads Historical Search Queries by Region ===")
    print()
    
    # Initialize analyzer
    analyzer = GoogleAdsSearchQueryAnalyzer()
    
    # Get customer ID
    customer_id = input("Enter your Google Ads Customer ID (without dashes): ").strip()
    if not customer_id:
        print("Customer ID required.")
        return
    
    analyzer.set_customer_id(customer_id)
    
    # Get date range
    days_back = input("Enter number of days to look back (default 365): ").strip()
    days_back = int(days_back) if days_back.isdigit() else 365
    
    print(f"\n=== ANALYZING SEARCH QUERIES ===")
    print(f"Looking back {days_back} days...")
    print()
    
    try:
        # Get campaigns first
        print("Getting campaigns...")
        campaigns = analyzer.get_all_campaigns()
        print(f"Found {len(campaigns)} campaigns")
        
        # Get search queries
        print("Getting search queries...")
        search_queries = analyzer.get_search_queries_by_region(days_back)
        print(f"Found {len(search_queries)} search query records")
        
        if search_queries:
            # Analyze by region
            print("Analyzing by region...")
            regional_analysis = analyzer.analyze_search_queries_by_region(search_queries)
            
            # Export results
            print("Exporting results...")
            files = analyzer.export_results(regional_analysis)
            
            # Print summary
            print(f"\n=== SUMMARY ===")
            print(f"Total search query records: {len(search_queries)}")
            print(f"Unique regions: {len(regional_analysis)}")
            print(f"Total unique search terms: {sum(len(r['unique_queries']) for r in regional_analysis.values())}")
            
            # Show top regions
            print(f"\nTop 10 Regions by Impressions:")
            sorted_regions = sorted(regional_analysis.items(), 
                                  key=lambda x: x[1]['total_impressions'], reverse=True)
            
            for i, (region_key, data) in enumerate(sorted_regions[:10], 1):
                print(f"{i}. {region_key}")
                print(f"   Impressions: {data['total_impressions']:,}")
                print(f"   Clicks: {data['total_clicks']:,}")
                print(f"   Cost: ${data['total_cost']:.2f}")
                print(f"   Unique queries: {data['unique_query_count']}")
                print()
        
        else:
            print("No search query data found.")
            
    except Exception as e:
        print(f"Error: {e}")
        print("Make sure your Google Ads API credentials are properly configured.")

if __name__ == "__main__":
    main() 