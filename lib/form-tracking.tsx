import React from 'react'

export const FORM_TRACKING_FIELDS = {
  // Google Ads Campaign & Ad Group Information
  campaignid: '',
  adgroupid: '',
  
  // Keyword & Targeting Information
  keyword: '',
  matchtype: '',
  targetid: '',
  
  // Ad Creative & Extension Information
  creative: '',
  feeditemid: '',
  
  // Device & Network Information
  device: '',
  network: '',
  
  // Location Information
  loc_physical_ms: '',
  loc_interest_ms: '',
  
  // Click & Conversion Tracking
  gclid: '',
  
  // UTM Parameters
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_adgroup: '',
  utm_term: '',
  utm_content: '',
  
  // Additional Tracking
  extensionid: '',
  
  // Form Submission Context
  ip_address: '',
  page_url: '',
  form_url: '',
  referrer: '',
  user_agent: '',
  timestamp: '',
  date: '',
  time: ''
} as const

export type TrackingFieldKey = keyof typeof FORM_TRACKING_FIELDS

export interface TrackingData {
  [key: string]: string
}

/**
 * Extract tracking parameters from URL, browser, and form context
 */
export const getTrackingFields = (): TrackingData => {
  if (typeof window === 'undefined') {
    return {}
  }

  const urlParams = new URLSearchParams(window.location.search)
  const currentUrl = window.location.href
  const referrer = document.referrer || ''
  const userAgent = navigator.userAgent || ''
  
  // Get current timestamp
  const now = new Date()
  const timestamp = now.toISOString()
  const date = now.toLocaleDateString('en-US')
  const time = now.toLocaleTimeString('en-US')

  return {
    // Google Ads ValueTrack Parameters
    campaignid: urlParams.get('utm_campaign') || urlParams.get('campaignid') || '',
    adgroupid: urlParams.get('utm_adgroup') || urlParams.get('adgroupid') || '',
    keyword: urlParams.get('utm_term') || urlParams.get('keyword') || '',
    matchtype: urlParams.get('matchtype') || '',
    targetid: urlParams.get('targetid') || '',
    creative: urlParams.get('utm_content') || urlParams.get('creative') || '',
    feeditemid: urlParams.get('feeditemid') || '',
    device: urlParams.get('device') || getDeviceType(),
    network: urlParams.get('network') || '',
    loc_physical_ms: urlParams.get('loc_physical_ms') || '',
    loc_interest_ms: urlParams.get('loc_interest_ms') || '',
    gclid: urlParams.get('gclid') || '',
    
    // UTM Parameters
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_adgroup: urlParams.get('utm_adgroup') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || '',
    
    // Additional Tracking
    extensionid: urlParams.get('extensionid') || '',
    
    // Form Context
    page_url: currentUrl,
    form_url: currentUrl,
    referrer: referrer,
    user_agent: userAgent,
    timestamp: timestamp,
    date: date,
    time: time,
    
    // Note: IP address will be captured server-side by Netlify
    ip_address: ''
  }
}

/**
 * Detect device type based on user agent
 */
const getDeviceType = (): string => {
  if (typeof window === 'undefined') return ''
  
  const userAgent = navigator.userAgent.toLowerCase()
  
  if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
    return 'm' // mobile
  } else if (/tablet|ipad/i.test(userAgent)) {
    return 't' // tablet
  } else {
    return 'c' // computer
  }
}

/**
 * Get all tracking fields as hidden form inputs
 */
export const getTrackingInputs = () => {
  const trackingData = getTrackingFields()
  
  return Object.entries(trackingData).map(([key, value]) => (
    <input
      key={key}
      type="hidden"
      name={key}
      value={value}
    />
  ))
}

/**
 * Get tracking data as a plain object for form submission
 */
export const getTrackingDataForSubmission = (): Record<string, string> => {
  const trackingData = getTrackingFields()
  
  // Filter out empty values to keep form data clean
  return Object.fromEntries(
    Object.entries(trackingData).filter(([_, value]) => value !== '')
  )
}
