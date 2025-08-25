/**
 * Pricing Section Type 3 (Cross-Country Pricing Section)
 * Created on: [Current Date]
 * 
 * This is the new pricing section for the main index page.
 * It includes:
 * - Transparent pricing breakdown
 * - How We Calculate Your Quote (4-step process)
 * - Ways to Save Money (5 tips)
 * - Sample Pricing Guide with "Starting at $1,000"
 * 
 * This section more accurately reflects reality and is simpler to understand.
 * It conveys the brand messaging better than previous versions.
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, PiggyBank, CheckCircle, ArrowRight } from "lucide-react";

export const PricingSectionType3 = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Transparent Pricing, No Surprises</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We believe in honest, upfront pricing. Here's exactly how we calculate your moving costs and what factors
            influence your final price.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Calculator className="h-6 w-6 text-blue-500" />
                  <span>How We Calculate Your Quote</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Distance & Route</h4>
                      <p className="text-gray-600 text-sm">
                        Mileage between pickup and delivery locations, including any special routing requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Weight & Volume</h4>
                      <p className="text-gray-600 text-sm">
                        Total weight of your belongings and space required in our truck.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Services Requested</h4>
                      <p className="text-gray-600 text-sm">
                        Packing, unpacking, storage, special handling, and additional services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Timing & Flexibility</h4>
                      <p className="text-gray-600 text-sm">
                        Peak season, specific dates, and delivery window preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <PiggyBank className="h-6 w-6 text-green-500" />
                  <span>Ways to Save Money</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Book during off-peak seasons (fall/winter)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Choose flexible delivery windows</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Declutter before moving</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Pack non-fragile items yourself</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Book 6+ weeks in advance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-red-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Starting at $1,000</CardTitle>
                <p className="text-blue-100">Get your exact quote in 60 seconds!</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">1-Bedroom Apartment</span>
                      <span className="text-xl font-bold">$2,500-$4,000</span>
                    </div>
                    <p className="text-sm text-blue-100">500-1000 miles • Basic packing included</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">3-Bedroom House</span>
                      <span className="text-xl font-bold">$4,500-$7,500</span>
                    </div>
                    <p className="text-sm text-blue-100">500-1000 miles • Full-service packing</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">5-Bedroom House</span>
                      <span className="text-xl font-bold">$7,500-$12,000</span>
                    </div>
                    <p className="text-sm text-blue-100">Cross-country • Premium services</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-center text-blue-100">
                    *Prices vary based on specific requirements. Contact us for a personalized quote.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Button size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-lg quote-trigger">
              Get My Exact Quote Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
