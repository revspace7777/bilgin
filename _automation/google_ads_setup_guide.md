# Google Ads API Setup Guide

## Prerequisites

1. **Google Ads Account** with admin access
2. **Google Cloud Project** with Google Ads API enabled
3. **OAuth 2.0 credentials** for authentication

## Step 1: Enable Google Ads API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Enable the Google Ads API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Ads API"
   - Click "Enable"

## Step 2: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Desktop application" or "Web application"
4. Download the JSON credentials file

## Step 3: Install Google Ads API Library

```bash
pip install google-ads
```

## Step 4: Configure Authentication

### Option A: Using google-ads.yaml file

Create a `google-ads.yaml` file in your project:

```yaml
developer_token: "YOUR_DEVELOPER_TOKEN"
client_id: "YOUR_CLIENT_ID"
client_secret: "YOUR_CLIENT_SECRET"
refresh_token: "YOUR_REFRESH_TOKEN"
use_proto_plus: True
```

### Option B: Using Environment Variables

Set these environment variables:

```bash
export GOOGLE_ADS_DEVELOPER_TOKEN="YOUR_DEVELOPER_TOKEN"
export GOOGLE_ADS_CLIENT_ID="YOUR_CLIENT_ID"
export GOOGLE_ADS_CLIENT_SECRET="YOUR_CLIENT_SECRET"
export GOOGLE_ADS_REFRESH_TOKEN="YOUR_REFRESH_TOKEN"
```

## Step 5: Get Your Developer Token

1. Go to [Google Ads](https://ads.google.com/)
2. Navigate to Tools & Settings > Setup > API Center
3. Request access to the Google Ads API
4. Copy your developer token

## Step 6: Get Your Customer ID

1. In Google Ads, go to Tools & Settings > Setup > Account Access
2. Your Customer ID is displayed (format: XXX-XXX-XXXX)
3. Remove dashes when using in the script

## Step 7: Generate Refresh Token

Run this script to generate your refresh token:

```python
#!/usr/bin/env python3
"""
Generate Google Ads API refresh token
"""

from google_auth_oauthlib.flow import InstalledAppFlow
from google.ads.googleads.client import GoogleAdsClient

# OAuth 2.0 scopes
SCOPES = ['https://www.googleapis.com/auth/adwords']

def generate_refresh_token():
    """Generate refresh token for Google Ads API."""
    
    # Load client secrets
    flow = InstalledAppFlow.from_client_secrets_file(
        'path/to/your/credentials.json',  # Your OAuth credentials file
        SCOPES
    )
    
    # Run the OAuth flow
    credentials = flow.run_local_server(port=0)
    
    print("Refresh Token:", credentials.refresh_token)
    print("Access Token:", credentials.token)
    print("Token URI:", credentials.token_uri)
    print("Client ID:", credentials.client_id)
    print("Client Secret:", credentials.client_secret)

if __name__ == "__main__":
    generate_refresh_token()
```

## Step 8: Test the Setup

Run the search queries script:

```bash
python3 google_ads_search_queries.py
```

## Troubleshooting

### Common Issues:

1. **"Developer token not found"**
   - Make sure you've requested API access in Google Ads
   - Check that your developer token is correct

2. **"Invalid client"**
   - Verify your OAuth credentials are correct
   - Make sure you're using the right client ID/secret

3. **"Access denied"**
   - Ensure your Google Ads account has API access enabled
   - Check that your customer ID is correct

4. **"No data found"**
   - Verify your campaigns have search term data
   - Check the date range you're querying

### Data Availability:

- Search term data is available for campaigns with search network ads
- Data retention varies by account type
- Some metrics may require specific permissions

## API Limits

- **Queries per day**: Varies by account
- **Rate limits**: 10,000 requests per day per developer token
- **Data retention**: Up to 2 years for search term data

## Output Files

The script generates three files:

1. **`*_detailed.csv`** - All search queries with geographic data
2. **`*_regional_summary.csv`** - Summary by geographic region
3. **`*_summary.json`** - Complete data in JSON format

## Data Fields

### Search Query Data:
- `search_term` - The actual search query
- `impressions` - Number of times the ad was shown
- `clicks` - Number of clicks
- `cost_micros` - Cost in micros (divide by 1,000,000 for dollars)
- `ctr` - Click-through rate
- `date` - Date of the data
- `device` - Device type (mobile, desktop, tablet)
- `country`, `region`, `city`, `metro` - Geographic data
- `campaign_name`, `ad_group_name` - Campaign information

### Regional Summary:
- `total_impressions` - Total impressions for the region
- `total_clicks` - Total clicks for the region
- `total_cost` - Total cost for the region
- `unique_query_count` - Number of unique search terms
- `avg_ctr` - Average click-through rate 