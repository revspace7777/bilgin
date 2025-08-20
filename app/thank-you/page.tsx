import Image from "next/image"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/thankyoubackground2.webp"
          alt="Thank you background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.webp"
            alt="T&E Moving and Storage"
            width={200}
            height={100}
            className="mx-auto"
          />
        </div>

        {/* Thank You Message */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Thank You!
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          We've received your request and will contact you within 24 hours with your free quote.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
