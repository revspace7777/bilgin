"use client"

import Image from "next/image"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background Banner Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/highwaybanner.jpg"
          alt="Moving trucks banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Logo - Positioned as in mobile view */}
        <div className="mb-8">
          <Image
            src="/TE-logo.png.webp"
            alt="T&E Moving and Storage"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        {/* Thank You Message Frame with Frosted Glass Effect */}
        <div className="backdrop-blur-md bg-white/20 rounded-2xl p-8 max-w-md mx-auto text-center border border-white/30 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thank you!
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Your contact form has been received! A member of our team will get back to you as quickly as possible!
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Floating Call Button with Animations */}
      <div className="fixed bottom-8 right-8 z-20">
        <a
          href="tel:+1-904-997-1884"
          className="group relative flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-2xl hover:bg-blue-600 transition-all duration-300 animate-pulse"
        >
          {/* Phone Icon */}
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
            />
          </svg>

          {/* Pulsating Ring Animation */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping animation-delay-1000 opacity-50"></div>
        </a>
      </div>
    </div>
  )
}
