import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'T&E Movers - Long Distance Moving Experts | Jacksonville, FL',
  description: 'T&E Movers is your trusted long-distance moving company serving Jacksonville, FL and nationwide. 25+ years experience, 10,000+ successful moves, 99.8% satisfaction rate. Get your free quote today!',
  keywords: 'long distance moving, Jacksonville movers, Florida moving company, cross country moving, residential moving, commercial moving, T&E Movers, moving services, packing services, storage solutions',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
