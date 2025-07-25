import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Phone,
  Star,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  Users,
  ArrowRight,
  Award,
  Globe,
  Heart,
  Target,
  Zap,
  Home,
  Package,
  Calendar,
  Building,
  Wrench,
  Boxes,
  MapPin,
  Navigation,
  Mail,
} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"

export default function InTownMoversPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Floating Quote Button */}
      <FloatingQuoteButton />

      {/* Quote Form Slideout */}
      <QuoteFormSlideout />

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo-main.png" alt="T&E Movers" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">T&E Movers</h1>
              <p className="text-sm text-gray-600">In-Town Moving Experts</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-red-500" />
              <a href="tel:9049971884" className="font-semibold mobile-lander-click-to-call">(904) 997-1884</a>
            </div>
            <Button className="bg-red-500 hover:bg-red-600" id="header-quote-btn">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-medium opacity-0 animate-fade-in">
                  🏆 #1 Rated In-Town Moving Company
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Fast & Reliable <span className="text-red-400">In-Town Movers</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  When you need to move within the same city, trust the local experts who know the area best. We provide fast, efficient in-town moving services with the same level of care as long-distance moves.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg quote-trigger">
                  Get Your Free Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <a href="tel:9049971884" className="mobile-lander-click-to-call">Call (904) 997-1884</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">25+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">8K+</div>
                  <div className="text-sm text-blue-100">In-Town Moves</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">Same Day</div>
                  <div className="text-sm text-blue-100">Service Available</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/truck-fleet.png"
                alt="T&E Movers Fleet"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold">Local Experts</div>
                    <div className="text-sm text-gray-600">Licensed & Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b" data-accolades-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm font-medium">BBB A+ Rated</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-2 text-green-500" />
              <p className="text-sm font-medium">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm font-medium">5-Star Reviews</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-2 text-blue-500" />
              <p className="text-sm font-medium">Family Owned</p>
            </div>
            <div className="text-center">
              <Navigation className="h-12 w-12 mx-auto mb-2 text-purple-500" />
              <p className="text-sm font-medium">Local Experts</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-2 text-orange-500" />
              <p className="text-sm font-medium">Quick Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why 8,000+ Customers Choose T&E for In-Town Moves
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're not just another moving company. We're local in-town moving specialists who understand the unique advantages of moving within the same city. Here's what makes us different:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Navigation className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-xl text-center">Local Knowledge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We know the local area, traffic patterns, and building requirements. This local expertise makes your in-town move faster and more efficient.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Same-Day Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Need to move quickly? We offer same-day in-town moving services because we understand that local moves often need to happen fast.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Cost Effective</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  In-town moves are typically more affordable than long-distance moves, and we pass those savings on to you with competitive local rates.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The T&E In-Town Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                      <p className="text-gray-600">We know the area, traffic patterns, and local requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quick Service</h4>
                      <p className="text-gray-600">Same-day service available for urgent in-town moves.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Affordable Rates</h4>
                      <p className="text-gray-600">
                        Competitive pricing for local moves with transparent, no-hidden-fee quotes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/facility-aerial.png"
                  alt="T&E Movers Facility"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete In-Town Moving Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From apartments to houses - we handle all your in-town moving needs with the same level of care and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Home className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Apartment to Apartment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Efficient moving services between apartments and condos.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Building coordination</li>
                  <li>• Elevator logistics</li>
                  <li>• Quick turnaround</li>
                  <li>• Same-day service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Building className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle>House to House</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete moving services between houses in the same city.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full-service packing</li>
                  <li>• Furniture disassembly</li>
                  <li>• Appliance moving</li>
                  <li>• Complete setup</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Package className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle>Packing Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional packing and unpacking with quality materials.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Professional packing</li>
                  <li>• Quality materials included</li>
                  <li>• Fragile item protection</li>
                  <li>• Unpacking assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Wrench className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle>Furniture Assembly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional furniture disassembly and reassembly services.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Furniture disassembly</li>
                  <li>• Professional reassembly</li>
                  <li>• Appliance installation</li>
                  <li>• Setup assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Calendar className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle>Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Move on your timeline with options from same-day to scheduled weeks ahead.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Same-day service available</li>
                  <li>• Weekend availability</li>
                  <li>• Flexible delivery windows</li>
                  <li>• Quick response times</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Boxes className="h-12 w-12 text-teal-500 mb-4" />
                <CardTitle>Storage Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Secure storage facilities for items you need to store during your in-town transition.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Climate-controlled storage</li>
                  <li>• Short-term storage</li>
                  <li>• Long-term storage</li>
                  <li>• Easy access</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50" data-reviews-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Stories from Real Customers</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Don't just take our word for it. Here's what our in-town moving customers have to say about their experience
              with T&E Movers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "T&E made my in-town move so fast and efficient! They knew the area well and had everything moved in just a few hours."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    AM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Alex M.</div>
                    <div className="text-sm text-gray-600">Jacksonville Beach</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Same-day service was a lifesaver when our lease ended unexpectedly. T&E handled everything professionally and quickly."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    RK
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Rachel K.</div>
                    <div className="text-sm text-gray-600">Orange Park</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Professional in-town movers who understand local logistics. They made our house-to-house move smooth and affordable."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    DL
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">David L.</div>
                    <div className="text-sm text-gray-600">Ponte Vedra Beach</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Every Question Answered</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We've compiled answers to the most common questions about our in-town moving services. Can't find what you're
              looking for? Contact us directly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How quickly can you complete an in-town move?
                </AccordionTrigger>
                <AccordionContent>
                  Most in-town moves can be completed in a single day, and we offer same-day service for urgent moves. The exact time depends on the size of your move and distance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Do you provide packing materials for in-town moves?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide all necessary packing materials including boxes, tape, bubble wrap, furniture blankets, and specialty containers for fragile items.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How far in advance should I book my in-town move?
                </AccordionTrigger>
                <AccordionContent>
                  For in-town moves, we recommend booking 1-2 weeks in advance, though we can often accommodate same-day or next-day moves when available.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Are in-town moves less expensive than long-distance moves?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, in-town moves are typically more affordable because they require less fuel, fewer hours, and often don't require overnight stays for our crew.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  What if I need to store some items temporarily?
                </AccordionTrigger>
                <AccordionContent>
                  We offer secure, climate-controlled storage facilities for items you need to store during your in-town transition. We can coordinate moving and storage services for your convenience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Are you licensed and insured for in-town moves?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we are fully licensed and insured. Your belongings are protected throughout the entire in-town moving process with comprehensive coverage for your peace of mind.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready for Your In-Town Move?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your free quote today and experience fast, efficient in-town moving with local experts. 
            Join thousands of satisfied customers who chose T&E Movers for their in-town moves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg quote-trigger">
              Get Your Free Quote in 60 Seconds
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:9049971884" className="mobile-lander-click-to-call">Call (904) 997-1884</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">Local Experts</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">5-Star Service</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">BBB A+ Rated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/images/logo-main.png" alt="T&E Movers" width={50} height={50} className="rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold">T&E Movers</h3>
                  <p className="text-sm text-gray-400">Your Moving Experts Since 1998</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Three generations of the same family have built T&E Movers on trust, integrity, and genuine care for
                every customer. We're not just your movers - we're your neighbors.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">y</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">In-Town Moving</li>
                <li className="hover:text-white transition-colors">Local Moving</li>
                <li className="hover:text-white transition-colors">Long Distance Moving</li>
                <li className="hover:text-white transition-colors">Packing Services</li>
                <li className="hover:text-white transition-colors">Storage Solutions</li>
                <li className="hover:text-white transition-colors">Commercial Moving</li>
                <li className="hover:text-white transition-colors">Residential Moving</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Jacksonville, FL</li>
                <li className="hover:text-white transition-colors">Jacksonville Beach</li>
                <li className="hover:text-white transition-colors">Atlantic Beach</li>
                <li className="hover:text-white transition-colors">Ponte Vedra Beach</li>
                <li className="hover:text-white transition-colors">Orange Park</li>
                <li className="hover:text-white transition-colors">Fleming Island</li>
                <li className="hover:text-white transition-colors">Surrounding Areas</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="font-semibold text-white">
                      <a href="tel:9049971884" className="mobile-lander-click-to-call text-white">(904) 997-1884</a>
                    </div>
                    <div className="text-sm">24/7 Customer Service</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-semibold text-white">info@tandemovers.com</div>
                    <div className="text-sm">Email us anytime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-semibold text-white">Jacksonville, FL</div>
                    <div className="text-sm">Serving local areas</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <div>
                    <div className="font-semibold text-white">Mon-Sun: 6AM-10PM</div>
                    <div className="text-sm">Emergency service 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-400">
                <p>&copy; 2025 T&E Movers. All rights reserved.</p>
                <p className="text-sm mt-2">
                  Licensed and Insured Moving Company | DOT License #123456 | MC License #789012
                </p>
              </div>
              <div className="text-right">
                <div className="flex justify-end space-x-6 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 