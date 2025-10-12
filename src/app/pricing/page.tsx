"use client";

import { useState } from "react";
import { Check, HelpCircle, Sparkles } from "lucide-react";
import PricingCard from "@/components/PricingCard";
import BookDemoModal from "@/components/BookDemoModal";

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const pricingPlans = [
    {
      title: "Starter",
      price: billingCycle === "monthly" ? "$99" : "$79",
      period: billingCycle === "monthly" ? "/month" : "/month",
      description: "Perfect for small businesses getting started with AI voice",
      features: [
        "Up to 500 calls per month",
        "1 AI voice agent",
        "Basic voice customization",
        "Email support",
        "Call recording & transcription",
        "Basic analytics dashboard",
        "CRM integration (3 platforms)",
      ],
      popular: false,
      cta: "Start Free Trial",
      ctaLink: "/contact",
    },
    {
      title: "Pro",
      price: billingCycle === "monthly" ? "$299" : "$239",
      period: billingCycle === "monthly" ? "/month" : "/month",
      description: "For growing businesses that need more power and flexibility",
      features: [
        "Up to 2,000 calls per month",
        "3 AI voice agents",
        "Advanced voice customization",
        "Priority support (24/7)",
        "Advanced analytics & reporting",
        "Custom conversation flows",
        "All CRM integrations",
        "API access",
        "Multi-language support",
        "Sentiment analysis",
      ],
      popular: true,
      cta: "Start Free Trial",
      ctaLink: "/contact",
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with unique needs",
      features: [
        "Unlimited calls",
        "Unlimited AI voice agents",
        "Custom voice cloning",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee (99.9% uptime)",
        "Advanced security features",
        "HIPAA compliance",
        "White-label options",
        "Custom AI training",
        "On-premise deployment available",
      ],
      popular: false,
      cta: "Contact Sales",
      ctaLink: "/contact",
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "What happens if I exceed my call limit?",
      answer:
        "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional call credits at $0.20 per call.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 14-day free trial on all plans. No credit card required to start. You'll get full access to all features during the trial period.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and ACH transfers for Enterprise customers.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes! Annual billing saves you 20% compared to monthly billing. You can switch between monthly and annual billing at any time.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. There are no long-term contracts (except for custom Enterprise agreements). You can cancel your subscription at any time from your account settings.",
    },
  ];

  const addOns = [
    {
      title: "Additional Calls",
      price: "$50",
      description: "1,000 extra calls per month",
    },
    {
      title: "Custom Voice Clone",
      price: "$199",
      description: "One-time fee for voice cloning",
    },
    {
      title: "Premium Support",
      price: "$99",
      description: "Dedicated support channel",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple, Transparent Pricing</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose the <span className="text-gradient">Perfect Plan</span> for Your
            Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span
              className={`text-lg font-medium ${
                billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")
              }
              className="relative w-16 h-8 bg-gradient-primary rounded-full transition-all duration-300"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === "annual" ? "translate-x-8" : ""
                }`}
              ></div>
            </button>
            <span
              className={`text-lg font-medium ${
                billingCycle === "annual" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Annual{" "}
              <span className="text-green-600 text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Optional <span className="text-gradient">Add-ons</span>
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your plan with additional features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all duration-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {addon.title}
                </h3>
                <div className="text-3xl font-bold text-gradient mb-3">
                  {addon.price}
                </div>
                <p className="text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare <span className="text-gradient">All Features</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Pro
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly Calls", starter: "500", pro: "2,000", enterprise: "Unlimited" },
                  { feature: "AI Voice Agents", starter: "1", pro: "3", enterprise: "Unlimited" },
                  { feature: "Voice Customization", starter: true, pro: true, enterprise: true },
                  { feature: "Call Recording", starter: true, pro: true, enterprise: true },
                  { feature: "Analytics Dashboard", starter: true, pro: true, enterprise: true },
                  { feature: "CRM Integration", starter: "3", pro: "All", enterprise: "Custom" },
                  { feature: "API Access", starter: false, pro: true, enterprise: true },
                  { feature: "24/7 Support", starter: false, pro: true, enterprise: true },
                  { feature: "Custom AI Training", starter: false, pro: false, enterprise: true },
                  { feature: "SLA Guarantee", starter: false, pro: false, enterprise: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-gray-700">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-gray-700">{row.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-gray-700">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <HelpCircle className="w-5 h-5 text-primary-600 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
