/**
 * Pricing Section Type 2 (Current Index Page Pricing Section)
 * Archived on: [Current Date]
 * 
 * This was the second pricing section used on the main index page.
 * It included:
 * - How much does a long-distance move typically cost?
 * - What payment methods do you accept and when is payment due?
 * - Are there any hidden fees I should know about?
 * 
 * Replaced by the cross-country pricing section for better brand messaging and simplicity.
 */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const PricingSectionType2 = () => {
  return (
    <div className="bg-gray-100 rounded-2xl p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing & Payment</h3>
      <Accordion type="single" collapsible className="space-y-6">
        <AccordionItem value="pricing-1" className="bg-gray-200 rounded-lg shadow-sm my-4">
          <AccordionTrigger className="px-6 py-4 text-left font-semibold">
            How much does a long-distance move typically cost?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600">
            <p className="mb-4">
              Long-distance moving costs vary significantly based on several factors. Here's a detailed
              breakdown:
            </p>
            <div className="space-y-4">
              <div>
                <strong>Typical Price Ranges:</strong>
                <ul className="mt-2 space-y-1">
                  <li>
                    • <strong>Studio/1BR:</strong> $2,500-$4,500
                  </li>
                  <li>
                    • <strong>2-Bedroom:</strong> $3,500-$6,000
                  </li>
                  <li>
                    • <strong>3-Bedroom:</strong> $4,500-$8,000
                  </li>
                  <li>
                    • <strong>4+ Bedroom:</strong> $6,500-$12,000+
                  </li>
                </ul>
              </div>
              <div>
                <strong>Cost Factors:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Distance (major factor)</li>
                  <li>• Weight/volume of belongings</li>
                  <li>• Services requested (packing, storage, etc.)</li>
                  <li>• Time of year and flexibility</li>
                  <li>• Access challenges at pickup/delivery</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pricing-2" className="bg-gray-200 rounded-lg shadow-sm my-4">
          <AccordionTrigger className="px-6 py-4 text-left font-semibold">
            What payment methods do you accept and when is payment due?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600">
            <p className="mb-4">
              We offer flexible payment options to make your move as convenient as possible:
            </p>
            <div className="space-y-4">
              <div>
                <strong>Accepted Payment Methods:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Cash or certified check</li>
                  <li>• Credit cards (Visa, MasterCard, American Express)</li>
                  <li>• Debit cards</li>
                  <li>• Bank transfers</li>
                  <li>• Corporate accounts available</li>
                </ul>
              </div>
              <div>
                <strong>Payment Schedule:</strong>
                <ul className="mt-2 space-y-1">
                  <li>
                    • <strong>Booking:</strong> Small deposit to secure your date
                  </li>
                  <li>
                    • <strong>Pickup:</strong> 50% of total cost
                  </li>
                  <li>
                    • <strong>Delivery:</strong> Remaining balance upon delivery
                  </li>
                  <li>
                    • <strong>Corporate moves:</strong> Net 30 terms available
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pricing-3" className="bg-gray-200 rounded-lg shadow-sm my-4">
          <AccordionTrigger className="px-6 py-4 text-left font-semibold">
            Are there any hidden fees I should know about?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600">
            <p className="mb-4">
              Absolutely not! We believe in complete transparency. Here's what IS and ISN'T included:
            </p>
            <div className="space-y-4">
              <div>
                <strong className="text-green-600">Always Included:</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Basic moving equipment (dollies, straps, blankets)</li>
                  <li>• Standard liability coverage</li>
                  <li>• Fuel costs</li>
                  <li>• Tolls and permits</li>
                  <li>• Basic assembly/disassembly</li>
                </ul>
              </div>
              <div>
                <strong className="text-orange-600">Potential Additional Costs (Always Disclosed):</strong>
                <ul className="mt-2 space-y-1">
                  <li>• Long carry fees (over 100 feet)</li>
                  <li>• Stair fees (over 2 flights)</li>
                  <li>• Elevator fees in some buildings</li>
                  <li>• Storage fees if requested</li>
                  <li>• Additional insurance coverage</li>
                  <li>• Packing materials if you choose full-service packing</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
