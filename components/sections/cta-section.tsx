import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface CTASectionProps {
  title: string
  subtitle: string
  primaryCTA: {
    text: string
    action: string
  }
  secondaryCTA?: {
    text: string
    action: string
  }
  features?: string[]
}

export function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  features
}: CTASectionProps) {
  return (
    <section className="py-20 bg-red-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href={primaryCTA.action}>
              <Button
                size="lg"
                className="bg-white text-red-500 hover:bg-gray-100 px-12 py-6 text-xl font-semibold"
              >
                {primaryCTA.text}
              </Button>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.action}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-500 px-12 py-6 text-xl font-semibold"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>

          {features && features.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 