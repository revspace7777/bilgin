import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface HeroSectionProps {
  headline: string
  subheadline: string
  primaryCTA: {
    text: string
    action: string
  }
  secondaryCTA?: {
    text: string
    action: string
  }
  background?: {
    type: 'image' | 'video' | 'gradient'
    source: string
  }
  trustBadges?: string[]
}

export function HeroSection({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  background,
  trustBadges
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      {background?.type === 'image' && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${background.source})` }}
        />
      )}
      
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {headline}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              onClick={() => window.location.href = primaryCTA.action}
            >
              {primaryCTA.text}
            </Button>
            
            {secondaryCTA && (
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                onClick={() => window.location.href = secondaryCTA.action}
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
          
          {trustBadges && trustBadges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((badge, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="bg-white/20 text-white border-white/30"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 