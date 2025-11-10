"use client";

import { Check, HelpCircle, Sparkles } from "lucide-react";
import PricingCard from "@/components/PricingCard";

export default function PricingPage() {

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
      ctaLink: "https://app.orwexa.com/",
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
      ctaLink: "https://app.orwexa.com/",
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
        "Orwexa bills calls per 60 seconds based on your plan's rate. On the Starter plan, calls cost $0.39 per minute; on the Pro plan, they cost $0.29 per minute; and on the Enterprise plan, the rate is $0.19 per minute.",
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
      {/* Hero Section - Modern */}
      <section className="relative min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 pattern-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto w-full text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-6 py-3 mb-8 animate-fade-in-down">
            <Sparkles className="w-5 h-5 text-primary-400" />
            <span className="text-base font-medium text-primary-300">Simple, Transparent Pricing</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Choose your
            <span className="block text-gradient mt-2">perfect plan</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Start with a 7-day free trial + $10 credit. No credit card required.
          </p>

          {/* Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">7-day free trial</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">$10 free credit</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">No credit card needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary Table */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Pricing
              <span className="block text-gradient mt-2">summary</span>
            </h2>
            <p className="text-xl text-gray-400">Compare our plans at a glance</p>
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
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Compare
              <span className="block text-gradient mt-2">all features</span>
            </h2>
            <p className="text-xl text-gray-400">See what's included in each plan</p>
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
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Frequently asked
              <span className="block text-gradient mt-2">questions</span>
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know</p>
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

      {/* CTA Section - Modern */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-12 md:p-16 border-2 border-gray-700 shadow-orweza-lg">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Start your free trial</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to transform
                <span className="block text-gradient mt-2">your business?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join 500+ businesses using Orwexa. Start your 7-day free trial with $10 credit today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a
                  href="https://app.orwexa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-gradient-primary text-white rounded-2xl font-bold text-xl hover:shadow-glow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>7-day free trial</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>$10 free credit</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
