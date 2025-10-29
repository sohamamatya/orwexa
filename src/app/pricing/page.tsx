"use client";

import { useState } from "react";
import { Check, HelpCircle, Sparkles } from "lucide-react";
import PricingCard from "@/components/PricingCard";
import BookDemoModal from "@/components/BookDemoModal";

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricingPlans = [
    {
      title: "Starter",
      price: "$29",
      period: "/month",
      callCost: "$0.39 / min",
      billing: "Billed per 60 seconds",
      description: "Perfect for small businesses getting started with AI voice",
      features: [
        "1 AI Voice Agent",
        "1 User",
        "Calendar booking",
        "Real-time scheduling",
        "Unlimited SMS & WhatsApp",
        "Campaign Manager",
        "Knowledge Base",
        "Standard voices & accents (ElevenLabs)",
        "Call recording & transcripts",
        "Basic analytics",
        "Email support",
      ],
      popular: false,
      cta: "Start Free Trial",
      ctaLink: "/contact",
    },
    {
      title: "Pro",
      price: "$99",
      period: "/month",
      callCost: "$0.29 / min",
      billing: "Billed per 60 seconds",
      description: "For growing businesses that need more power and flexibility",
      features: [
        "5 AI Agents",
        "5 Users",
        "Multi-calendar integration",
        "Advanced campaigns",
        "CRM & API integrations",
        "Custom voices & accents",
        "Batch outbound calls",
        "Analytics & reports",
        "Connect Twilio / Telynx",
        "Unlimited SMS & WhatsApp",
        "24/7 email + chat support",
      ],
      popular: true,
      cta: "Start Free Trial",
      ctaLink: "/contact",
    },
    {
      title: "Enterprise / Custom",
      price: "$499",
      period: "/month",
      callCost: "$0.19 / min",
      billing: "Billed per 60 seconds",
      description: "Tailored solutions for large organizations with unique needs",
      features: [
        "Unlimited AI Agents",
        "Unlimited Users",
        "Dedicated account manager",
        "Multi-language voice options",
        "Full onboarding & setup",
        "Custom integrations (CRM, ERP, tools)",
        "Priority routing & support",
        "SLA 99.9% uptime",
        "Advanced analytics & reports",
        "Private hosting & compliance",
        "Custom AI training & voice tuning",
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
      question: "How does call billing work?",
      answer:
        "Calls are billed per 60 seconds based on your plan's per-minute rate. For example, on the Starter plan at $0.39/min, a 2-minute call would cost $0.78.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 7-day free trial with $10 credit on all plans. No credit card required to start. You'll get full access to all features during the trial period.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and ACH transfers for Enterprise customers.",
    },
    {
      question: "What's included in the monthly fee?",
      answer:
        "The monthly fee covers platform access, your AI agents, users, and all features listed in your plan. Call costs are billed separately based on usage.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. There are no long-term contracts (except for custom Enterprise agreements). You can cancel your subscription at any time from your account settings.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute inset-0 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple, Transparent Pricing</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose the <span className="text-gradient">Perfect Plan</span> for Your
            Business
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with a 7-day free trial + $10 credit. No credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pricing <span className="text-gradient">Summary</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-2xl border border-gray-700">
              <thead>
                <tr className="border-b-2 border-gray-600">
                  <th className="text-left py-4 px-6 font-semibold text-white">Plan</th>
                  <th className="text-center py-4 px-6 font-semibold text-white">Monthly Fee</th>
                  <th className="text-center py-4 px-6 font-semibold text-white">Call Cost</th>
                  <th className="text-center py-4 px-6 font-semibold text-white">Billing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-4 px-6 text-white font-medium">Starter</td>
                  <td className="py-4 px-6 text-center text-gray-300">$29 / month</td>
                  <td className="py-4 px-6 text-center text-gray-300">$0.39 / min</td>
                  <td className="py-4 px-6 text-center text-gray-300">Billed per 60 seconds</td>
                </tr>
                <tr className="border-b border-gray-700 bg-primary-500/10">
                  <td className="py-4 px-6 text-white font-medium">Pro</td>
                  <td className="py-4 px-6 text-center text-gray-300">$99 / month</td>
                  <td className="py-4 px-6 text-center text-gray-300">$0.29 / min</td>
                  <td className="py-4 px-6 text-center text-gray-300">Billed per 60 seconds</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-white font-medium">Enterprise</td>
                  <td className="py-4 px-6 text-center text-gray-300">$499 / month</td>
                  <td className="py-4 px-6 text-center text-gray-300">$0.19 / min</td>
                  <td className="py-4 px-6 text-center text-gray-300">Billed per 60 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Compare <span className="text-gradient">All Features</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-600">
                  <th className="text-left py-4 px-4 font-semibold text-white">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-white">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-white">
                    Pro
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-white">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "AI Voice Agents", starter: "1", pro: "5", enterprise: "Unlimited" },
                  { feature: "Users", starter: "1", pro: "5", enterprise: "Unlimited" },
                  { feature: "Calendar Integration", starter: "Calendar booking", pro: "Multi-calendar", enterprise: "Multi-calendar & routing" },
                  { feature: "Scheduling", starter: "Real-time scheduling", pro: "Real-time scheduling", enterprise: "Full onboarding & scheduling setup" },
                  { feature: "Campaigns", starter: "Campaign Manager", pro: "Advanced Campaigns", enterprise: "Advanced Campaigns + Automation" },
                  { feature: "CRM & Integrations", starter: "Basic CRM integration", pro: "CRM & API integrations", enterprise: "Custom integrations (CRM, ERP, tools)" },
                  { feature: "Voice & Accents", starter: "Standard voices (ElevenLabs)", pro: "Custom voices & accents", enterprise: "Multi-language voice options" },
                  { feature: "Analytics & Reporting", starter: "Basic analytics", pro: "Analytics & reports", enterprise: "Advanced analytics suite" },
                  { feature: "Messaging", starter: "Unlimited SMS & WhatsApp", pro: "Unlimited SMS & WhatsApp", enterprise: "Unlimited SMS & WhatsApp" },
                  { feature: "Support", starter: "Email support", pro: "24/7 email + chat support", enterprise: "Dedicated manager + priority support" },
                  { feature: "Extras / Infrastructure", starter: "Call recording & transcripts", pro: "Connect Twilio / Telynx", enterprise: "SLA 99.9% uptime · Private hosting · Compliance" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-4 px-4 text-gray-200">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-gray-200">{row.starter}</span>
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
                        <span className="text-gray-200">{row.pro}</span>
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
                        <span className="text-gray-200">{row.enterprise}</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 bg-gray-800 border border-gray-700"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <HelpCircle className="w-5 h-5 text-primary-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your 7-day free trial + $10 credit today. No credit card required.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold text-lg hover:bg-primary-600 hover:shadow-xl hover:scale-105 transition-all duration-200"
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
