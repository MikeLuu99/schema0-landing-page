"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  // Calculate prices based on billing period
  const getPrice = (monthly: number) => {
    if (isYearly) {
      return Math.floor(monthly * 0.5); // 25% discount for yearly
    }
    return monthly;
  };

  return (
    <div
      className="min-h-screen bg-[#efe6e0] p-4 md:p-8 font-mono"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5dcd6 1px, transparent 1px),
          linear-gradient(to bottom, #e5dcd6 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <p className="text-gray-600 text-sm">PRICING</p>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-normal">
            Pricing
          </h1>
          <p className="text-gray-600 text-lg">
            Flexible database and AI solutions for projects of all sizes.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex items-center gap-3 self-end">
            <span className="text-sm text-gray-600">Yearly</span>
            {isYearly && (
              <span className="text-sm text-green-600">(Save 50%)</span>
            )}
            <Switch
              checked={!isYearly}
              onCheckedChange={(checked) => setIsYearly(!checked)}
              className="data-[state=checked]:bg-gray-400"
            />
            <span className="text-sm text-gray-600">Monthly</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free Tier */}
          <div className="border border-gray-300 rounded-lg p-6 space-y-6 bg-white shadow-sm">
            <div className="space-y-2">
              <h3 className="text-gray-900 text-xl">Free</h3>
              <p className="text-gray-600 text-sm">
                Perfect for side projects and learning
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-gray-900 text-3xl font-normal">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-900 hover:bg-gray-100"
            >
              Start Free
            </Button>
            <ul className="space-y-4">
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />2 databases included
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                1GB storage per database
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                100 AI credits/month
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Basic analytics
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Community support
              </li>
            </ul>
          </div>

          {/* Professional Tier */}
          <div className="border border-gray-300 rounded-lg p-6 space-y-6 bg-white shadow-sm">
            <div className="space-y-2">
              <h3 className="text-gray-900 text-xl">Professional</h3>
              <p className="text-gray-600 text-sm">
                For growing teams and businesses that scale
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-gray-900 text-3xl font-normal">
                ${getPrice(59)}
              </span>
              <span className="text-gray-600">/month</span>
            </div>
            <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
              Start free trial
            </Button>
            <ul className="space-y-4">
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                10 databases included
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                10GB storage per database
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                1,000 AI credits/month
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Advanced analytics
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Priority support
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Database backups
              </li>
            </ul>
          </div>

          {/* Enterprise Tier */}
          <div className="border border-gray-300 rounded-lg p-6 space-y-6 bg-white shadow-sm">
            <div className="space-y-2">
              <h3 className="text-gray-900 text-xl">Enterprise</h3>
              <p className="text-gray-600 text-sm">
                Custom solutions for large organizations
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-gray-900 text-3xl font-normal">Custom</span>
            </div>
            <Button
              variant="outline"
              className="w-full border-gray-300 text-gray-900 hover:bg-gray-100"
            >
              Contact us
            </Button>
            <ul className="space-y-4">
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Unlimited databases
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Custom storage limits
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Custom AI credits allocation
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Enterprise analytics
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                24/7 dedicated support
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Custom SLA
              </li>
              <li className="flex gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-900" />
                Advanced security features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
