import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B39SW1C8VJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B39SW1C8VJ');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
