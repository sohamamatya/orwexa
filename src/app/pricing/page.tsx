"use client";

import { useState } from "react";
import { Check, HelpCircle, Sparkles } from "lucide-react";
import PricingCard from "@/components/PricingCard";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const pricingPlans = [
    {
      title: "Starter",
      price: "$49 AUD",
      period: "/month",
      callCost: "$0.59 AUD / min",
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
      ctaLink: "https://app.orwexa.com/",
    },
    {
      title: "Pro",
      price: "$249 AUD",
      period: "/month",
      callCost: "$0.49 AUD / min",
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
      ctaLink: "https://app.orwexa.com/",
    },
    {
      title: "Enterprise / Custom",
      price: "$999 AUD",
      period: "/month",
      callCost: "$0.29 AUD / min",
      billing: "Billed per 60 seconds",
      description: "Tailored solutions for large organizations with unique needs",
      features: [
        "Unlimited AI Agents",
        "Unlimited Users",
        "Dedicated account manager",
        "AI voice cloning",
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
      question: "What is Orwexa?",
      answer:
        "Orwexa is an AI-powered voice platform that automates inbound and outbound calls. It answers calls, books appointments, follows up with leads, and integrates with your tools — helping businesses convert more calls into customers.",
    },
    {
      question: "Do I need to install anything?",
      answer:
        "No. Orwexa is 100% cloud-based. You can access it securely from any device through your web browser.",
    },
    {
      question: "Can I use Orwexa for Sales Calls?",
      answer:
        "Absolutely. Orwexa is designed to enhance sales efficiency by providing AI agents that engage leads, answer questions, qualify prospects, and book appointments.",
    },
    {
      question: "Can I use Orwexa for my local business?",
      answer:
        "Yes! Orwexa fits any local business that depends on calls, appointments, or leads. From real estate to clinics, salons, and trades, our AI agents handle your calls, bookings, and follow-ups automatically.",
    },
    {
      question: "What are AI Voice Assistants?",
      answer:
        "AI Voice Assistants are smart, natural-sounding agents that answer calls, schedule appointments, follow up with leads, and handle repetitive customer interactions — just like a real receptionist would.",
    },
    {
      question: "Can Orwexa book appointments?",
      answer:
        "Yes. Orwexa integrates with Google Calendar to check availability, schedule meetings, and send confirmations automatically.",
    },
    {
      question: "What's included in the monthly fee?",
      answer:
        "Your subscription covers AI agents, user accounts, features listed in your plan, and all software updates. Call minutes are billed separately at your plan's per-minute rate.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. Every plan includes a 7-day free trial and $10 call credit. You'll get full access to all features during this time.",
    },
    {
      question: "How does call billing work?",
      answer:
        "Orwexa bills calls per 60 seconds based on your plan's rate. On the Starter plan, calls cost $0.59 AUD per minute; on the Pro plan, they cost $0.49 AUD per minute; and on the Enterprise plan, the rate is $0.29 AUD per minute.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes. You can upgrade or downgrade anytime. Changes take effect immediately, and adjustments are prorated automatically.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. There are no long-term contracts (unless you're on a custom enterprise plan). You can cancel your subscription directly from your account dashboard.",
    },
    {
      question: "What is Orwexa's refund policy?",
      answer:
        "Orwexa offers clear and transparent subscription terms:\n\n• No Refund Policy: Orwexa subscriptions are non-refundable. We offer free trials and transparent billing to help you evaluate the platform fully before committing.\n\n• Free Trial & Commitment: Both the Starter and Pro plans include a risk-free 7-day trial. You won't be charged if you cancel your subscription anytime during the trial period.\n\n• Subscription Changes: You can upgrade, downgrade, or cancel your subscription at any time. Changes take immediate effect with prorated adjustments. However, refunds for partial subscription periods are not available.\n\nWe recommend carefully evaluating the platform during your trial to ensure it meets your needs before proceeding with payment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and ACH transfers for Enterprise customers.",
    },
  ];

  return (
    <>
      {/* Hero Section - Compact */}
      <section className="relative min-h-[40vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto w-full text-center py-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1 mb-4">
            <Sparkles className="w-3 h-3 text-primary-400" />
            <span className="text-xs font-medium text-primary-300">Simple, Transparent Pricing</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Choose your
            <span className="block text-gradient mt-1">perfect plan</span>
          </h1>

          {/* Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center space-x-1.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-1.5">
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-gray-300 text-xs">7-day free trial</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-1.5">
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-gray-300 text-xs">$10 free credit</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-1.5">
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-gray-300 text-xs">No credit card needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {pricingPlans.map((plan, index) => (
              <PricingCard 
                key={index} 
                {...plan} 
                selected={selectedPlan === index}
                onClick={() => setSelectedPlan(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary Table */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Pricing
              <span className="block text-gradient mt-1">summary</span>
            </h2>
            <p className="text-base text-gray-400">Compare our plans at a glance</p>
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
                  <td className="py-4 px-6 text-center text-gray-300">$49 AUD / month</td>
                  <td className="py-4 px-6 text-center text-gray-300">$0.59 AUD / min</td>
                  <td className="py-4 px-6 text-center text-gray-300">Billed per 60 seconds</td>
                </tr>
                <tr className="border-b border-gray-700 bg-primary-500/10">
                  <td className="py-4 px-6 text-white font-medium">Pro</td>
                  <td className="py-4 px-6 text-center text-gray-300">$249 AUD / month</td>
                  <td className="py-4 px-6 text-center text-gray-300">$0.49 AUD / min</td>
                  <td className="py-4 px-6 text-center text-gray-300">Billed per 60 seconds</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-white font-medium">Enterprise</td>
                  <td className="py-4 px-6 text-center text-gray-300">$999 AUD / month</td>
                  <td className="py-4 px-6 text-center text-gray-300">$0.29 AUD / min</td>
                  <td className="py-4 px-6 text-center text-gray-300">Billed per 60 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Frequently asked
              <span className="block text-gradient mt-1">questions</span>
            </h2>
            <p className="text-base text-gray-400">Everything you need to know</p>
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

      {/* CTA Section - Compact */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 border border-gray-700 shadow-orweza-lg">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-400">Start your free trial</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to transform
                <span className="block text-gradient mt-1">your business?</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Join 10+ businesses using Orwexa. Start your 7-day free trial with $10 credit today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <a
                  href="https://app.orwexa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-primary text-white rounded-xl font-bold text-sm hover:shadow-glow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-1.5 text-gray-400">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-xs">7-day free trial</span>
                </div>
                <div className="flex items-center space-x-1.5 text-gray-400">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-xs">$10 free credit</span>
                </div>
                <div className="flex items-center space-x-1.5 text-gray-400">
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-xs">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
