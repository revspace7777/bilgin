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
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-563L63XF');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-563L63XF"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
