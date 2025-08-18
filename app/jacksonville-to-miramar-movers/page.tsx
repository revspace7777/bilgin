import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  Users,
  ArrowRight,
  Quote,
  Award,
  Calendar,
  Package,
  Home,
  Building,
  Plane,
  Car,
  TreePine,
  Zap,
  Target,
  FileText,
  Wrench,
  AlertTriangle,
  ThumbsUp,
  Globe,
  Lock,
  Clipboard,
  Calculator,
  Timer,
  Boxes,
  PiggyBank,
  Lightbulb,
  Heart,
  Route,
  Weight,
  Settings,
  CalendarDays,
} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"

export default function JacksonvilleToMiramarMovers() {
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
              <p className="text-sm text-gray-600">Your Jacksonville to Miramar Moving Experts</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-red-500" />
              <a href="tel:9049971884" className="font-semibold mobile-lander-click-to-call">(904) 997-1884</a>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 quote-trigger">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image with Filter for Dark Footer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/highwaybanner.jpg)',
            filter: 'grayscale(100%) brightness(40%) contrast(120%) saturate(0%)',
            opacity: '0.85'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0" style={{backgroundColor: '#16212a', opacity: '0.5'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-medium opacity-0 animate-fade-in">
                  🏆 #1 Rated Jacksonville to Miramar Moving Company
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Moving from Jacksonville to Miramar? <span className="text-red-400">T&E Movers</span> Gets You There With Ease.
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Your seamless move from Jacksonville to Miramar starts here. We have decades of experience moving families and businesses to Miramar and throughout Broward County. Join thousands of families who trusted us with their most important possessions.
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
                  <div className="text-3xl font-bold text-red-400">10K+</div>
                  <div className="text-sm text-blue-100">Successful Moves</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">99.8%</div>
                  <div className="text-sm text-blue-100">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/truck-fleet.png"
                alt="T&E Movers Fleet for Jacksonville to Miramar moves"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold">Fully Licensed & Insured</div>
                    <div className="text-sm text-gray-600">$1M+ Coverage Protection</div>
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
              <Globe className="h-12 w-12 mx-auto mb-2 text-purple-500" />
              <p className="text-sm font-medium">Nationwide Service</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-2 text-orange-500" />
              <p className="text-sm font-medium">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why 10,000+ Families Choose T&E Movers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're not just another moving company. We're your neighbors in Jacksonville, and we know the route to Miramar like the back of our hand. Here's what makes us different:
            </p>
          </div>

          {/* ... (Rest of the section remains the same) ... */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-xl text-center">Family-Owned Since 1998</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Three generations of the same family have built T&E Movers on trust, integrity, and genuine care for
                  every customer. When you choose us, you're choosing family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Zero Damage Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We're so confident in our packing and handling that we guarantee zero damage to your belongings. If
                  something breaks, we fix it or replace it - no questions asked.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Same-Day Emergency Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Life happens. Job transfers, family emergencies, sudden opportunities. We offer same-day emergency
                  moving services because we understand that sometimes you can't wait.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The T&E Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Price Lock Guarantee</h4>
                      <p className="text-gray-600">Your quote is your final price. No surprise fees, ever.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">On-Time Delivery Promise</h4>
                      <p className="text-gray-600">We arrive when we say we will, or your move is 50% off.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">White Glove Treatment</h4>
                      <p className="text-gray-600">
                        Every item treated like a family heirloom, every customer like family.
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
              Complete Moving Solutions Under One Roof
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From a single box to an entire estate, from across town to across the country - we handle it all with the
              same level of care and professionalism.
            </p>
          </div>

          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="w-full mb-12 flex overflow-x-auto md:grid md:grid-cols-4">
              <TabsTrigger value="residential" className="text-sm">
                Residential
              </TabsTrigger>
              <TabsTrigger value="commercial" className="text-sm">
                Commercial
              </TabsTrigger>
              <TabsTrigger value="specialty" className="text-sm">
                Specialty
              </TabsTrigger>
              <TabsTrigger value="storage" className="text-sm">
                Storage
              </TabsTrigger>
            </TabsList>

            <TabsContent value="residential" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Home className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>Jacksonville to Miramar Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Direct service from anywhere in the Jacksonville area to your new home in Miramar. No transfers, no delays.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Door-to-door service</li>
                      <li>• Real-time tracking</li>
                      <li>• Guaranteed delivery dates</li>
                      <li>• Full-service packing available</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* ... (Other cards remain the same) ... */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Package className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Packing Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Professional packing with premium materials. We pack it like it's our own.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Custom crating for valuables</li>
                      <li>• Fragile item specialists</li>
                      <li>• Unpacking services</li>
                      <li>• Eco-friendly materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Calendar className="h-12 w-12 text-purple-500 mb-4" />
                    <CardTitle>Flexible Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Move on your timeline with options from same-day to scheduled months ahead.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Same-day emergency moves</li>
                      <li>• Weekend availability</li>
                      <li>• Holiday service</li>
                      <li>• Flexible delivery windows</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* ... (Other TabsContent sections remain the same) ... */}

          </Tabs>
        </div>
      </section>

      {/* ... (Pricing Transparency section remains the same) ... */}
      
      {/* Moving Process Timeline Section remains the same */}

      {/* Customer Success Stories */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50" data-reviews-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Stories from Real Customers</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Don't just take our word for it. Here are detailed stories from families who trusted us with their most
              important possessions and biggest life transitions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 • 2 weeks ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Moving our family to Miramar was a big undertaking, but T&E Movers handled it flawlessly. The crew was professional and friendly, and they took exceptional care of our belongings. They made what could have been a very stressful day feel easy and organized. We are so grateful for their hard work."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    GF
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">The Garcia Family</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → Miramar, FL</div>
                    <div className="text-xs text-gray-500">Family Relocation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 • 1 month ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "I relocated from Jacksonville to Miramar for a new job, and T&E Movers provided outstanding service. They were efficient, punctual, and their communication was excellent throughout the process. My move was completed ahead of schedule, which was a fantastic bonus. I highly recommend them."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    DR
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">David Rodriguez</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → Miramar, FL</div>
                    <div className="text-xs text-gray-500">Job Relocation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 • 3 weeks ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "We were downsizing from our Jacksonville home to be closer to our grandkids in Miramar. The T&E team was incredibly respectful and patient. They carefully packed our fragile antiques and made sure everything was placed perfectly in our new home. Their kindness and professionalism were truly appreciated."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    KM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Karen and Steve Miller</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → Miramar, FL</div>
                    <div className="text-xs text-gray-500">Downsizing Move</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="text-lg font-semibold text-gray-700">Become our next success story!</div>
          </div>
        </div>
      </section>

      {/* ... (FAQ and Checklist sections remain the same) ... */}
      
      {/* Final CTA Section */}
      <section className="py-20 text-white relative overflow-hidden">
        {/* Background Image with Filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/alltrucks.png)',
            filter: 'grayscale(100%) brightness(40%) contrast(120%) saturate(0%)',
            opacity: '0.85'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0" style={{backgroundColor: '#16212a', opacity: '0.5'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Make Your Move?</h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join over 10,000 satisfied customers who chose T&E Movers for their long-distance relocation. Your new
              life is waiting - let's get you there safely, efficiently, and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-white text-red-500 hover:bg-gray-100 px-12 py-6 text-xl font-semibold quote-trigger"
              >
                Get Your Free Quote in 60 Seconds
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <div className="flex items-center space-x-3 text-xl">
                <Phone className="h-6 w-6" />
                <span>
                  Or call <a href="tel:9049971884" className="mobile-lander-click-to-call"><strong>(904) 997-1884</strong></a>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-blue-100 text-sm">Fully licensed and insured for your complete protection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-300" />
                </div>
                <h3 className="font-semibold mb-2">Price Guarantee</h3>
                <p className="text-blue-100 text-sm">No hidden fees, your quote is your final price</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="font-semibold mb-2">5-Star Service</h3>
                <p className="text-blue-100 text-sm">99.8% customer satisfaction rate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="font-semibold mb-2">On-Time Promise</h3>
                <p className="text-blue-100 text-sm">We arrive when promised or your move is 50% off</p>
              </div>
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
                <li className="hover:text-white transition-colors">Jacksonville to Miramar Moving</li>
                <li className="hover:text-white transition-colors">Residential Moving</li>
                <li className="hover:text-white transition-colors">Commercial Moving</li>
                <li className="hover:text-white transition-colors">Packing Services</li>
                <li className="hover:text-white transition-colors">Storage Solutions</li>
                <li className="hover:text-white transition-colors">Specialty Moving</li>
                <li className="hover:text-white transition-colors">Emergency Moving</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Jacksonville, FL</li>
                <li className="hover:text-white transition-colors">Tampa, FL</li>
                <li className="hover:text-white transition-colors">Orlando, FL</li>
                <li className="hover:text-white transition-colors">Miami, FL</li>
                <li className="hover:text-white transition-colors">Nationwide Service</li>
                <li className="hover:text-white transition-colors">Jacksonville to Miramar Moves</li>
                <li className="hover:text-white transition-colors">Cross-Country Moves</li>
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
                    <div className="text-sm">Serving nationwide</div>
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
                  <a href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms-of-service" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Hidden form for Netlify detection */}
      <form name="quote-request" method="POST" data-netlify="true" style={{ display: 'none' }}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="typeOfMove" />
        <input type="text" name="movingFromStreet" />
        <input type="text" name="movingFromCity" />
        <input type="text" name="movingFromState" />
        <input type="text" name="movingFromZip" />
        <input type="text" name="movingFromBedrooms" />
        <input type="text" name="movingFromFloor" />
        <input type="text" name="movingToStreet" />
        <input type="text" name="movingToCity" />
        <input type="text" name="movingToState" />
        <input type="text" name="movingToZip" />
        <input type="text" name="movingToBedrooms" />
        <input type="text" name="movingToFloor" />
        <textarea name="description"></textarea>
        
        {/* Custom subject line field */}
        <input type="text" name="subject" />
        
        {/* Add all tracking fields */}
        <input type="text" name="campaignid" />
        <input type="text" name="adgroupid" />
        <input type="text" name="keyword" />
        <input type="text" name="matchtype" />
        <input type="text" name="targetid" />
        <input type="text" name="creative" />
        <input type="text" name="feeditemid" />
        <input type="text" name="device" />
        <input type="text" name="network" />
        <input type="text" name="loc_physical_ms" />
        <input type="text" name="loc_interest_ms" />
        <input type="text" name="gclid" />
        <input type="text" name="utm_source" />
        <input type="text" name="utm_medium" />
        <input type="text" name="utm_campaign" />
        <input type="text" name="utm_adgroup" />
        <input type="text" name="utm_term" />
        <input type="text" name="utm_content" />
        <input type="text" name="extensionid" />
        <input type="text" name="ip_address" />
        <input type="text" name="page_url" />
        <input type="text" name="form_url" />
        <input type="text" name="referrer" />
        <input type="text" name="user_agent" />
        <input type="text" name="timestamp" />
        <input type="text" name="date" />
        <input type="text" name="time" />
      </form>
    </div>
  )
}
