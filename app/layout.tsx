import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

// Add this line - initialize the font
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'T&E Movers - Long Distance Moving Experts | Jacksonville, FL',
  description: 'T&E Movers is your trusted long-distance moving company serving Jacksonville, FL and nationwide. 25+ years experience, 10,000+ successful moves, 99.8% satisfaction rate. Get your free quote today!',
  keywords: 'long distance moving, Jacksonville movers, Florida moving company, cross country moving, residential moving, commercial moving, T&E Movers, moving services, packing services, storage solutions',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Hidden form for Netlify build detection - applies to ALL pages */}
        <form
          name="quote-request"
          data-netlify="true"
          netlify
          netlify-honeypot="bot-field"
          hidden
        >
          {/* All your form fields */}
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="typeOfMove" />
          <input type="text" name="movingFromStreet" />
          <input type="text" name="movingFromCity" />
          <input type="text" name="movingFromState" />
          <input type="text" name="movingFromZip" />
          <input type="text" name="movingFromBedrooms" />
          <input type="text" name="movingFromFloor" />
          <input type="text" name="movingToStreet" />
          <input type="text" name="movingToCity" />
          <input type="text" name="movingToState" />
          <input type="text" name="movingToZip" />
          <input type="text" name="movingToBedrooms" />
          <input type="text" name="movingToFloor" />
          <textarea name="description"></textarea>
          <input type="text" name="subject" />
          
          {/* Tracking fields */}
          <input type="text" name="campaignid" />
          <input type="text" name="adgroupid" />
          <input type="text" name="keyword" />
          <input type="text" name="matchtype" />
          <input type="text" name="gclid" />
          <input type="text" name="utm_source" />
          <input type="text" name="utm_medium" />
          <input type="text" name="utm_campaign" />
          <input type="text" name="utm_adgroup" />
          <input type="text" name="utm_term" />
          <input type="text" name="utm_content" />
          <input type="text" name="page_url" />
          
          {/* Honeypot */}
          <div style={{ display: 'none' }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>
        </form>

        {children}
      </body>
    </html>
  )
}
