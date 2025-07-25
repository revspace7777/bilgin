import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

interface ServiceOverviewSectionProps {
  title: string
  subtitle?: string
  services: Service[]
  layout: 'tabs' | 'grid' | 'list'
}

export function ServiceOverviewSection({
  title,
  subtitle,
  services,
  layout
}: ServiceOverviewSectionProps) {
  return (
    <section className="py-20 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 