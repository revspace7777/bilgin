# T&E Movers GMB Recovery Gameplan

## Objective
Identify the old T&E Movers Google Business Profile listing and gather all historical data (Place ID, CID, name changes, etc.) to provide to Google support for listing recovery/merge.

## Phase 1: Historical Data Collection

### 1.1 Google Business Profile API
**Purpose:** Access historical listing data directly from Google
**Tools:** Google Business Profile API v1
**Authentication:** OAuth 2.0 with business owner permissions
**Data to Extract:**
- Historical Place IDs
- Customer IDs (CID)
- Listing change history
- Previous names/addresses
- Review history
- Verification history

**Setup Required:**
- Enable Google Business Profile API in Google Cloud Console
- Create OAuth 2.0 credentials
- Generate refresh token with business owner access
- Install `google-business-profile` library

### 1.2 Google Ads API (Historical)
**Purpose:** Find historical location extensions and local campaign data
**Tools:** Google Ads API
**Authentication:** OAuth 2.0 with Ads account access
**Data to Extract:**
- Historical location extensions
- Local campaign Place IDs
- Geographic targeting data
- Historical ad performance by location

**Setup Required:**
- Google Ads API access (developer token)
- OAuth 2.0 credentials
- Customer ID from Ads account

### 1.3 Google Search Console API
**Purpose:** Find historical traffic from Google Maps/My Business
**Tools:** Google Search Console API
**Authentication:** OAuth 2.0 with website ownership
**Data to Extract:**
- Historical clicks from Google Maps
- Search queries that led to Maps listings
- Geographic traffic data
- Historical performance metrics

**Setup Required:**
- Website ownership verification
- OAuth 2.0 credentials
- Search Console API access

## Phase 2: Web Archive & Cached Data

### 2.1 Wayback Machine API
**Purpose:** Find archived versions of old Google Maps listings
**Tools:** Internet Archive API
**Data to Extract:**
- Cached Google Maps URLs
- Historical business information
- Place IDs in URL structures
- Previous business names/addresses

**Setup Required:**
- Internet Archive API key (free)
- Python `internetarchive` library

### 2.2 Google Cache Search
**Purpose:** Find cached versions of current/old listings
**Tools:** Custom search scripts
**Data to Extract:**
- Cached Google Maps pages
- Place IDs in cached URLs
- Historical business data

**Setup Required:**
- Google Custom Search API (already configured)
- Web scraping tools

### 2.3 Third-Party Local SEO Tools
**Purpose:** Access historical local search data
**Tools:** 
- BrightLocal API
- Moz Local API
- SEMrush Local API
- Ahrefs Local API

**Data to Extract:**
- Historical local search rankings
- Previous Place IDs
- Business listing change history
- Review history

**Setup Required:**
- Paid API subscriptions
- API keys for each service

## Phase 3: Manual Research & Documentation

### 3.1 Google Search Operators
**Purpose:** Find any remaining references to old listing
**Tools:** Manual Google searches
**Search Queries:**
```
"T&E Movers" site:google.com/maps
"T&E Movers" Jacksonville filetype:pdf
"T&E Movers" Jacksonville before:2024
"T&E Movers" Jacksonville after:2020
```

### 3.2 Social Media & Review Platforms
**Purpose:** Find historical mentions and reviews
**Tools:** Manual research
**Platforms:**
- Facebook Business Pages
- Yelp Business Pages
- Google Reviews (archived)
- BBB listings
- Local business directories

### 3.3 Email & Communication History
**Purpose:** Find old verification emails and communications
**Search Terms:**
- "Google My Business"
- "Place ID"
- "Customer ID"
- "T&E Movers verification"

## Phase 4: Data Analysis & Documentation

### 4.1 Cross-Reference Analysis
**Purpose:** Match data from multiple sources
**Tools:** Custom Python scripts
**Process:**
- Compare Place IDs across sources
- Match business names and addresses
- Identify listing changes over time
- Document verification history

### 4.2 Timeline Creation
**Purpose:** Create chronological history of listing changes
**Data Points:**
- Original listing creation date
- Name changes
- Address changes
- Verification events
- Review milestones
- Removal date

### 4.3 Evidence Compilation
**Purpose:** Prepare evidence for Google support
**Documentation:**
- Screenshots of old listings
- Archived URLs with Place IDs
- Historical performance data
- Verification emails
- Business registration documents

## Phase 5: Google Support Preparation

### 5.1 Information Package
**Purpose:** Prepare comprehensive evidence for Google support
**Contents:**
- Original Place ID
- Customer ID (CID)
- Business verification history
- Timeline of changes
- Evidence of business ownership
- Historical performance data
- Screenshots and archived URLs

### 5.2 Support Strategy
**Purpose:** Multiple approaches to Google support
**Channels:**
- Google Business Profile support
- Google Ads support (if applicable)
- Google Maps support
- Direct escalation through Google Cloud support

## Implementation Priority

### High Priority (Start Here)
1. **Google Business Profile API** - Direct access to historical data
2. **Wayback Machine API** - Free, comprehensive archive search
3. **Manual Google search operators** - Quick initial findings

### Medium Priority
1. **Google Ads API** - If you had local campaigns
2. **Search Console API** - If website was connected
3. **Third-party tool APIs** - If you have subscriptions

### Low Priority
1. **Social media research** - Manual, time-intensive
2. **Email history search** - Limited data
3. **Direct support contact** - After evidence is gathered

## Expected Outcomes

### Best Case Scenario
- Find original Place ID and CID
- Document complete listing history
- Provide Google support with comprehensive evidence
- Successfully merge or restore old listing

### Realistic Scenario
- Find partial historical data
- Document some listing changes
- Provide enough evidence for Google to investigate
- Partial recovery of historical data

### Worst Case Scenario
- Limited historical data found
- Need to rebuild listing from scratch
- Focus on preserving current reviews and data

## Tools & APIs Summary

### Free Tools
- Internet Archive API
- Google Custom Search API (already configured)
- Manual Google searches
- Wayback Machine

### Paid Tools
- Google Business Profile API (free tier available)
- Third-party local SEO tools (BrightLocal, Moz, etc.)
- Google Ads API (if you have campaigns)

### Manual Research
- Social media platforms
- Review sites
- Email history
- Business directories

## Next Steps

1. **Start with Google Business Profile API** - Most direct access to historical data
2. **Set up Wayback Machine API** - Free comprehensive archive search
3. **Run manual Google searches** - Quick initial findings
4. **Document everything found** - Create timeline and evidence package
5. **Contact Google support** - With comprehensive evidence package

This gameplan provides multiple approaches to find your historical listing data, with the highest probability of success coming from the Google Business Profile API and web archives. 