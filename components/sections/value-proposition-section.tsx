import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Benefit {
  icon: string
  title: string
  description: string
}

interface ValuePropositionSectionProps {
  title: string
  subtitle?: string
  benefits: Benefit[]
  layout: 'grid' | 'list' | 'cards'
  columns: 2 | 3 | 4
}

export function ValuePropositionSection({
  title,
  subtitle,
  benefits,
  layout,
  columns
}: ValuePropositionSectionProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid gap-8 ${gridCols[columns]}`}>
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <CardTitle className="text-xl text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 