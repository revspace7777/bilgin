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
} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"
import { PricingSectionType3 } from "@/content-archive/pricing-sections/pricing-section-type-3"

export default function TEMoversLanding() {
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
              <p className="text-sm text-gray-600">Long Distance Moving Experts</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-red-500" />
              <a href="tel:9049971884" className="font-semibold mobile-lander-click-to-call">(904) 997-1884</a>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 quote-trigger" id="header-quote-btn">
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
                  🏆 #1 Rated Long Distance Moving Company in Florida
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  From State to State, <span className="text-red-400">T&E Movers</span> Gets You There With Ease
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Your seamless long-distance move starts here. We've successfully completed over 10,000 moves with a
                  99.8% customer satisfaction rate. Join thousands of families who trusted us with their most important
                  possessions.
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
                alt="T&E Movers Fleet"
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
              We're not just another moving company. We're your neighbors, your partners, and your peace of mind during
              one of life's biggest transitions. Here's what makes us different:
            </p>
          </div>

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
                    <CardTitle>Long Distance Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      State-to-state moves with direct service to any location in the US. No transfers, no delays.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Door-to-door service</li>
                      <li>• Real-time tracking</li>
                      <li>• Guaranteed delivery dates</li>
                      <li>• Full-service packing available</li>
                    </ul>
                  </CardContent>
                </Card>

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

            <TabsContent value="commercial" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Building className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>Office Relocations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Minimize downtime with our efficient office moving services.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• After-hours moving</li>
                      <li>• IT equipment handling</li>
                      <li>• Furniture disassembly/assembly</li>
                      <li>• Minimal business disruption</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Wrench className="h-12 w-12 text-orange-500 mb-4" />
                    <CardTitle>Industrial Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Heavy machinery and industrial equipment moving specialists.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Crane services</li>
                      <li>• Rigging specialists</li>
                      <li>• Custom equipment handling</li>
                      <li>• Safety certified team</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Records Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Secure handling of sensitive documents and records.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Chain of custody protocols</li>
                      <li>• Secure transportation</li>
                      <li>• Document scanning services</li>
                      <li>• Compliance certified</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specialty" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Car className="h-12 w-12 text-red-500 mb-4" />
                    <CardTitle>Vehicle Transport</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Cars, motorcycles, boats, and RVs transported safely nationwide.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Enclosed transport available</li>
                      <li>• Classic car specialists</li>
                      <li>• Motorcycle transport</li>
                      <li>• Full insurance coverage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <TreePine className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Piano & Fine Art</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Specialized handling for pianos, artwork, and precious collectibles.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Climate-controlled transport</li>
                      <li>• Custom crating</li>
                      <li>• Fine art insurance</li>
                      <li>• White glove service</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Plane className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>International Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Global relocations with customs clearance and international partnerships.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Customs documentation</li>
                      <li>• International partnerships</li>
                      <li>• Ocean and air freight</li>
                      <li>• Destination services</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="storage" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Lock className="h-12 w-12 text-purple-500 mb-4" />
                    <CardTitle>Secure Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Climate-controlled, 24/7 monitored storage facilities.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Climate controlled</li>
                      <li>• 24/7 security monitoring</li>
                      <li>• Individual unit access</li>
                      <li>• Inventory management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Boxes className="h-12 w-12 text-orange-500 mb-4" />
                    <CardTitle>Warehouse Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Full-service warehousing with inventory management and distribution.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Inventory tracking</li>
                      <li>• Pick and pack services</li>
                      <li>• Distribution services</li>
                      <li>• Flexible terms</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Timer className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Temporary Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Short-term storage solutions for timing mismatches in your move.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Flexible duration</li>
                      <li>• Easy access</li>
                      <li>• Competitive rates</li>
                      <li>• Seamless integration</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSectionType3 />

      {/* Moving Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your Move Timeline: What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We've perfected our process over 25 years and 10,000+ moves. Here's exactly what happens from your first
              call to settling into your new home.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-blue-500 rounded-full"></div>

            <div className="space-y-16">
              {/* Timeline Item 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">Initial Consultation (Day 1)</CardTitle>
                      <Badge className="w-fit bg-red-100 text-red-700">Free Service</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Our moving consultant conducts a detailed assessment of your needs, either virtually or
                        in-person.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Inventory assessment</li>
                        <li>• Custom quote preparation</li>
                        <li>• Service recommendations</li>
                        <li>• Timeline planning</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  1
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  2
                </div>
                <div className="flex-1 pl-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">Booking & Planning (Days 2-7)</CardTitle>
                      <Badge className="w-fit bg-blue-100 text-blue-700">Contract Phase</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Once you approve the quote, we begin detailed planning and preparation for your move.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Contract signing</li>
                        <li>• Move coordination</li>
                        <li>• Team assignment</li>
                        <li>• Pre-move checklist</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">Pre-Move Preparation (1-2 Weeks Before)</CardTitle>
                      <Badge className="w-fit bg-green-100 text-green-700">Preparation Phase</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        We help you prepare for moving day with detailed guidance and support.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Packing supplies delivery</li>
                        <li>• Moving checklist review</li>
                        <li>• Special items assessment</li>
                        <li>• Final details confirmation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  3
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  4
                </div>
                <div className="flex-1 pl-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">Moving Day (The Big Day!)</CardTitle>
                      <Badge className="w-fit bg-purple-100 text-purple-700">Execution Phase</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Our professional team arrives on time and handles every aspect of your move with care.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Professional packing</li>
                        <li>• Careful loading</li>
                        <li>• Inventory documentation</li>
                        <li>• Real-time updates</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">Delivery & Setup (Arrival Day)</CardTitle>
                      <Badge className="w-fit bg-orange-100 text-orange-700">Delivery Phase</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        We deliver your belongings on schedule and help you settle into your new home.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• On-time delivery</li>
                        <li>• Careful unloading</li>
                        <li>• Furniture placement</li>
                        <li>• Unpacking services</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  5
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Timeline Item 6 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  6
                </div>
                <div className="flex-1 pl-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">Post-Move Follow-up (Days After)</CardTitle>
                      <Badge className="w-fit bg-teal-100 text-teal-700">Support Phase</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Our relationship doesn't end at delivery. We follow up to ensure your complete satisfaction.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Satisfaction survey</li>
                        <li>• Issue resolution</li>
                        <li>• Settling-in support</li>
                        <li>• Future move planning</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  "We had to move from Jacksonville to Seattle with just 3 days notice due to a job transfer. T&E Movers
                  not only accommodated our emergency timeline but handled our entire 4-bedroom house with incredible
                  care. They even stored our belongings for 2 weeks while we found a new home. The team went above and
                  beyond - they're not just movers, they're life savers!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah & Mike Thompson</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → Seattle, WA</div>
                    <div className="text-xs text-gray-500">Emergency Corporate Relocation</div>
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
                  "As a military family, we've moved 8 times in 12 years. T&E Movers provided the best experience we've
                  ever had. They understood our unique needs, handled our military shipment paperwork, and even helped
                  coordinate with base housing. Our kids' toys arrived exactly as packed, and nothing was damaged.
                  Finally, a moving company that gets military families!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JR
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Jennifer & Robert Martinez</div>
                    <div className="text-sm text-gray-600">Mayport, FL → Norfolk, VA</div>
                    <div className="text-xs text-gray-500">Military PCS Move</div>
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
                  "Moving my elderly mother from her home of 40 years was emotionally overwhelming. The T&E team was
                  incredibly patient and gentle, treating her antiques and memories with the utmost respect. They even
                  helped her unpack and arrange furniture in her new assisted living apartment. Their compassion made an
                  impossible situation manageable. We're forever grateful."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    LC
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Linda Chen</div>
                    <div className="text-sm text-gray-600">Tampa, FL → Orlando, FL</div>
                    <div className="text-xs text-gray-500">Senior Relocation</div>
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

      {/* Comprehensive FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Every Question Answered</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We've been in business for 25 years and have heard every question imaginable. Here are the answers to
              everything you need to know about long-distance moving.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Planning & Preparation */}
            <div className="bg-gray-100 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Planning & Preparation</h3>
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="planning-1" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    How far in advance should I book my long-distance move?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      We recommend booking 6-8 weeks in advance for optimal scheduling and pricing. However, we
                      understand life doesn't always allow for perfect planning:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        • <strong>6-8 weeks ahead:</strong> Best rates and full availability
                      </li>
                      <li>
                        • <strong>4-6 weeks ahead:</strong> Good availability, standard rates
                      </li>
                      <li>
                        • <strong>2-4 weeks ahead:</strong> Limited availability, possible rush fees
                      </li>
                      <li>
                        • <strong>Less than 2 weeks:</strong> Emergency service available with premium pricing
                      </li>
                    </ul>
                    <p className="mt-4">
                      Peak season (May-September) requires earlier booking, while off-season moves offer more
                      flexibility.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="planning-2" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    What's the best time of year to move long-distance?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">The best time depends on your priorities - cost savings vs. convenience:</p>
                    <div className="space-y-4">
                      <div>
                        <strong className="text-green-600">Best for Savings (October-April):</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• 20-30% lower rates</li>
                          <li>• Better availability</li>
                          <li>• More flexible scheduling</li>
                          <li>• Dedicated crew attention</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-orange-600">Peak Season (May-September):</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Higher demand and prices</li>
                          <li>• School vacation alignment</li>
                          <li>• Better weather conditions</li>
                          <li>• Requires early booking</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="planning-3" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    How do I prepare for the moving estimate?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      A thorough preparation ensures an accurate estimate and smooth moving process:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <strong>Before the Estimate:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Declutter and decide what's moving</li>
                          <li>• Make a list of valuable/fragile items</li>
                          <li>• Note any access challenges (stairs, elevators, narrow doors)</li>
                          <li>• Gather questions about services and timeline</li>
                        </ul>
                      </div>
                      <div>
                        <strong>During the Estimate:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Show all items being moved (including garage, attic, basement)</li>
                          <li>• Discuss special handling needs</li>
                          <li>• Ask about insurance options</li>
                          <li>• Clarify what's included in the quote</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing & Payment */}
            <div className="bg-gray-100 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Insurance & Protection</h3>
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="insurance-1" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    What insurance options do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      We offer comprehensive protection options to give you complete peace of mind:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <strong>Basic Coverage (Included):</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• $0.60 per pound per item</li>
                          <li>• Required by federal law</li>
                          <li>• Covers basic liability</li>
                          <li>• No additional cost</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-blue-600">Full Value Protection (Recommended):</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Full replacement value coverage</li>
                          <li>• Repair, replace, or cash settlement options</li>
                          <li>• Covers mysterious disappearance</li>
                          <li>• Small additional premium (typically $6-8 per $1,000 of value)</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-purple-600">High-Value Item Coverage:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Special coverage for items over $100/lb</li>
                          <li>• Antiques, artwork, jewelry protection</li>
                          <li>• Professional appraisal may be required</li>
                          <li>• Custom coverage limits available</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="insurance-2" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    What happens if something gets damaged during the move?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      We take damage claims very seriously and have a streamlined process to resolve issues quickly:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <strong>Immediate Steps:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Note damage on delivery receipt</li>
                          <li>• Take photos of damaged items</li>
                          <li>• Contact us within 24 hours</li>
                          <li>• Keep damaged items for inspection</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Our Response Process:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Acknowledge claim within 24 hours</li>
                          <li>• Investigate within 48 hours</li>
                          <li>• Provide resolution options within 7 days</li>
                          <li>• Settlement within 30 days of agreement</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Resolution Options:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Professional repair (preferred option)</li>
                          <li>• Replacement with like item</li>
                          <li>• Cash settlement at depreciated value</li>
                          <li>• Full replacement value (with Full Value Protection)</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Moving Day & Logistics */}
            <div className="bg-gray-100 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Moving Day & Logistics</h3>
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="logistics-1" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    How long does a long-distance move take?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      Timeline depends on distance, services, and logistics. Here's what to expect:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <strong>Pickup Day:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• 1-bedroom: 2-4 hours</li>
                          <li>• 2-3 bedroom: 4-6 hours</li>
                          <li>• 4+ bedroom: 6-8 hours</li>
                          <li>• Add time for full-service packing</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Transit Time:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Under 500 miles: 1-2 days</li>
                          <li>• 500-1,000 miles: 2-4 days</li>
                          <li>• 1,000-2,000 miles: 4-7 days</li>
                          <li>• Cross-country: 7-14 days</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Delivery Day:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Unloading: 2-4 hours typically</li>
                          <li>• Furniture placement included</li>
                          <li>• Unpacking services available</li>
                          <li>• Final walkthrough and paperwork</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="logistics-2" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    Can I track my belongings during the move?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">We provide multiple ways to stay informed about your move:</p>
                    <div className="space-y-4">
                      <div>
                        <strong>Real-Time Tracking:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• GPS tracking on all trucks</li>
                          <li>• Online portal with live updates</li>
                          <li>• Mobile app notifications</li>
                          <li>• Estimated arrival times</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Communication Schedule:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Daily check-in calls</li>
                          <li>• Text updates at major milestones</li>
                          <li>• 24-hour advance delivery notice</li>
                          <li>• Morning-of-delivery confirmation</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Emergency Contact:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• 24/7 customer service hotline</li>
                          <li>• Direct driver contact information</li>
                          <li>• Move coordinator availability</li>
                          <li>• Management escalation if needed</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Special Situations & Services */}
            <div className="bg-gray-100 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Special Situations & Services</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <Accordion type="single" collapsible className="space-y-6">
                  <AccordionItem value="special-1" className="bg-gray-200 rounded-lg shadow-sm my-4">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                      Do you handle specialty items like pianos, artwork, or antiques?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      <p className="mb-4">Yes! We're specialists in handling high-value and delicate items:</p>
                      <div className="space-y-4">
                        <div>
                          <strong>Pianos:</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Certified piano moving specialists</li>
                            <li>• Custom equipment for all piano types</li>
                            <li>• Climate-controlled transport</li>
                            <li>• Tuning service referrals</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Fine Art & Antiques:</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Museum-quality packing materials</li>
                            <li>• Custom crating services</li>
                            <li>• White glove handling</li>
                            <li>• Fine arts insurance available</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Other Specialty Items:</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Gun safes and heavy machinery</li>
                            <li>• Wine collections (temperature controlled)</li>
                            <li>• Medical equipment</li>
                            <li>• Electronics and computers</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="special-2" className="bg-gray-200 rounded-lg shadow-sm my-4">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                      Can you help with international moves?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      <p className="mb-4">Yes, we partner with certified international moving specialists:</p>
                      <div className="space-y-4">
                        <div>
                          <strong>Services Included:</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Customs documentation assistance</li>
                            <li>• Ocean and air freight options</li>
                            <li>• Destination country partnerships</li>
                            <li>• Door-to-door international service</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Popular Destinations:</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Canada and Mexico</li>
                            <li>• United Kingdom and Europe</li>
                            <li>• Australia and New Zealand</li>
                            <li>• Military overseas assignments</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className="space-y-6">
                  <AccordionItem value="special-3" className="bg-gray-200 rounded-lg shadow-sm my-4">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                      Do you offer storage solutions?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      <p className="mb-4">We offer comprehensive storage solutions for any timeline:</p>
                      <div className="space-y-4">
                        <div>
                          <strong>Short-Term Storage (1-90 days):</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Perfect for timing mismatches</li>
                            <li>• Climate-controlled facilities</li>
                            <li>• Easy access when needed</li>
                            <li>• Competitive daily rates</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Long-Term Storage (3+ months):</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Warehouse-style storage</li>
                            <li>• Inventory management system</li>
                            <li>• Partial delivery options</li>
                            <li>• Monthly billing available</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Specialty Storage:</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Vehicle storage (cars, boats, RVs)</li>
                            <li>• Document storage with retrieval</li>
                            <li>• Wine storage (temperature controlled)</li>
                            <li>• Business inventory storage</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="special-4" className="bg-gray-200 rounded-lg shadow-sm my-4">
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                      What if I need to change my moving date?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      <p className="mb-4">We understand that plans change. Here's our flexible rescheduling policy:</p>
                      <div className="space-y-4">
                        <div>
                          <strong>More than 7 days notice:</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• No rescheduling fees</li>
                            <li>• Subject to availability</li>
                            <li>• Price adjustments if moving to peak season</li>
                          </ul>
                        </div>
                        <div>
                          <strong>3-7 days notice:</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Small rescheduling fee may apply</li>
                            <li>• We'll do our best to accommodate</li>
                            <li>• Alternative dates offered</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Less than 3 days notice:</strong>
                          <ul className="mt-2 space-y-1">
                            <li>• Emergency rescheduling fees apply</li>
                            <li>• Limited availability</li>
                            <li>• May require crew reassignment</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Checklist & Tips */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your Complete Moving Checklist</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              25 years of experience condensed into the ultimate moving checklist. Follow this timeline for a
              stress-free move, or let us handle everything for you.
            </p>
          </div>

          <Tabs defaultValue="8weeks" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-12 gap-2">
              <TabsTrigger value="8weeks" className="text-xs">
                8 Weeks Before
              </TabsTrigger>
              <TabsTrigger value="4weeks" className="text-xs">
                4 Weeks Before
              </TabsTrigger>
              <TabsTrigger value="2weeks" className="text-xs">
                2 Weeks Before
              </TabsTrigger>
              <TabsTrigger value="1week" className="text-xs">
                1 Week Before
              </TabsTrigger>
              <TabsTrigger value="movingday" className="text-xs">
                Moving Day
              </TabsTrigger>
            </TabsList>

            <TabsContent value="8weeks" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Clipboard className="h-6 w-6 text-blue-500" />
                      <span>Research & Planning</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Research moving companies and get quotes</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Set your moving budget</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Choose your moving date</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Book your moving company</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Start decluttering and organizing</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-purple-500" />
                      <span>Documentation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Gather important documents</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Research your new area</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Start school transfer process if needed</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Begin job search in new location</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Create a moving binder/folder</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="4weeks" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Mail className="h-6 w-6 text-green-500" />
                      <span>Address Changes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Submit change of address with postal service</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Notify banks and credit card companies</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Update insurance policies</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Transfer prescriptions</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Notify subscription services</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-orange-500" />
                      <span>Utilities & Services</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Schedule utility disconnection</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Set up utilities at new home</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Transfer internet and cable services</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Arrange security system transfer</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Schedule lawn care/maintenance services</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="2weeks" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Package className="h-6 w-6 text-red-500" />
                      <span>Packing Preparation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Order packing supplies</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Start packing non-essential items</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Label boxes clearly</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Create inventory list</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Pack a "first day" box</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-blue-500" />
                      <span>Final Arrangements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Confirm moving day details</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Arrange childcare/pet care for moving day</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Plan travel to new home</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Book temporary accommodation if needed</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Prepare cash for moving day tips</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="1week" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-500" />
                      <span>Last-Minute Tasks</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Confirm all arrangements</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Pack a survival kit</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Use up perishable food</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Clean out refrigerator</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Defrost freezer if needed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Lightbulb className="h-6 w-6 text-green-500" />
                      <span>Final Preparations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Pack essential items separately</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Charge all electronic devices</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Backup computer files</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Get good night's sleep</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Prepare snacks and drinks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="movingday" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Truck className="h-6 w-6 text-red-500" />
                      <span>Moving Day Essentials</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Be ready when movers arrive</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Do final walkthrough</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Keep important documents with you</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Take photos of valuable items</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Stay hydrated and take breaks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <ThumbsUp className="h-6 w-6 text-blue-500" />
                      <span>At Your New Home</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Check utilities are working</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Direct movers on furniture placement</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Check inventory against delivery</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Tip your moving crew</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Celebrate your successful move!</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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
                <li className="hover:text-white transition-colors">Long Distance Moving</li>
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
                <li className="hover:text-white transition-colors">State-to-State Moves</li>
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
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="/sitemap" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Sitemap
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
