import { Badge } from '@/components/ui/badge'

interface AccoladesSectionProps {
  badges: string[]
}

export function AccoladesSection({
  badges
}: AccoladesSectionProps) {
  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                {badge}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 