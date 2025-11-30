"use client";

import Link from "next/link";
import {
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  Mic,
  CheckCircle2,
  Calendar,
  MessageSquare,
  BarChart3,
  Database,
  Users,
  BookOpen,
  Target,
  Clock,
  Globe,
  Zap,
  ArrowRight,
  Sparkles,
  Shield,
} from "lucide-react";

export default function FeaturesPage() {

  return (
    <>
      {/* HERO SECTION - Modern */}
      <section className="relative min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 pattern-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto w-full text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in-down">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Complete AI Call Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Features built for
            <span className="block text-gradient mt-2">real businesses</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Everything you need to answer calls, follow up leads, and book customers automatically — all in one powerful platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <Link
              href="/pricing"
              className="group px-10 py-5 bg-gradient-primary text-white rounded-2xl font-bold text-lg hover:shadow-glow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <a
              href="https://app.orwexa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gray-800/50 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-gray-700/50 border-2 border-gray-600/50 transition-all duration-300 flex items-center justify-center"
            >
              Sign In
            </a>
          </div>

          {/* Quick Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '600ms'}}>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">24/7 AI Receptionist</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Outbound Campaigns</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Advanced Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI VOICE AGENTS */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center shadow-glow-md">
                <Mic className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                AI that sounds
                <span className="block text-gradient mt-2">human</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Choose from natural voices, accents, and tones powered by ElevenLabs. Set how your AI speaks — calm, confident, or friendly — and let it represent your brand perfectly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 border-2 border-gray-700 hover:border-primary-500/50 transition-all duration-500 hover:shadow-orweza">
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Multiple voice options</h3>
                    <p className="text-gray-400 text-sm">Choose from dozens of accents and tones</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adjustable personality</h3>
                    <p className="text-gray-400 text-sm">Control tone, speed, and politeness</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Brand-specific training</h3>
                    <p className="text-gray-400 text-sm">Learns your phrases, pricing, and terms</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Multilingual support</h3>
                    <p className="text-gray-400 text-sm">Serve customers in their language</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INBOUND RECEPTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 border-2 border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-orweza">
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Custom greeting flows</h3>
                    <p className="text-gray-400 text-sm">Personalized welcome for every caller</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Smart qualification</h3>
                    <p className="text-gray-400 text-sm">Ask the right questions automatically</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Multi-channel confirmations</h3>
                    <p className="text-gray-400 text-sm">SMS, WhatsApp, or email notifications</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Calendar integration</h3>
                    <p className="text-gray-400 text-sm">Syncs with Google Calendar & Outlook</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Human escalation</h3>
                    <p className="text-gray-400 text-sm">Transfer complex calls to your team</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-glow-md">
                <PhoneIncoming className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Answer every call
                <span className="block text-gradient mt-2">instantly</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Orwexa picks up, qualifies, and books appointments — 24/7. Your AI receptionist greets callers naturally and syncs bookings directly to your calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTBOUND FOLLOW-UP */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-glow-md">
                <PhoneOutgoing className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Never forget a lead
                <span className="block text-gradient mt-2">again</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Orwexa automatically calls back missed leads, quote requests, or old contacts — so nothing slips through the cracks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 border-2 border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-orweza">
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Auto callbacks</h3>
                    <p className="text-gray-400 text-sm">Reach missed callers automatically</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Batch campaigns</h3>
                    <p className="text-gray-400 text-sm">Call hundreds of leads at once</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Quote follow-ups</h3>
                    <p className="text-gray-400 text-sm">Check in on pending estimates</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Lead reactivation</h3>
                    <p className="text-gray-400 text-sm">Re-engage dormant contacts</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Booking reminders</h3>
                    <p className="text-gray-400 text-sm">Confirm appointments automatically</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CAMPAIGN MANAGER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Create outbound call sequences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Control schedule, retries, and time zones</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Combine SMS, WhatsApp, and calls</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Track conversion rates per campaign</span>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Run campaigns like a <span className="text-gradient">pro.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Build and launch call campaigns that feel personal. Schedule calls, trigger follow-ups, and monitor results in one clean dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — KNOWLEDGE BASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Teach it your <span className="text-gradient">business.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Upload your FAQs, services, and internal guides. The AI learns from your content and uses it naturally in calls.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Add FAQs, prices, policies, or scripts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Update anytime — changes reflect instantly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Supports multiple languages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Context-aware answers during calls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — ANALYTICS DASHBOARD */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Live KPI dashboard</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Success rate, talk time, cost per call</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Call recordings and transcripts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Export reports to CSV or CRM</span>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-indigo-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                See everything in <span className="text-gradient">one view.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Track every call, transcript, and result. From answer rate to booking percentage, it's all visible in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CRM & INTEGRATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-pink-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Works with your <span className="text-gradient">tools.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Orwexa fits into your existing workflow — not the other way around.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Google Calendar & Outlook</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">HubSpot, Pipedrive, Zoho CRM</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Zapier, Make, and Webhooks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Twilio / Telynx connection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — MESSAGING AUTOMATION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">SMS and WhatsApp confirmations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Reminders and follow-up texts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Thank-you and review requests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Two-way message support</span>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-teal-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay connected across <span className="text-gradient">channels.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                After every call, Orwexa can send messages automatically — so clients always know what's next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — TEAM & ACCESS CONTROL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Manage your team <span className="text-gradient">easily.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Invite teammates, assign agents, and monitor performance. Perfect for growing businesses and multi-location setups.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Role-based access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Team usage tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Agent-level analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Shared calendars and call logs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID - Remaining Features */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Campaign Manager */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-orweza">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Campaign Manager</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Build and launch call campaigns. Schedule calls, trigger follow-ups, and monitor results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Outbound call sequences</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Multi-channel campaigns</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Conversion tracking</span>
                </li>
              </ul>
            </div>

            {/* Knowledge Base */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-orweza">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Knowledge Base</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Upload FAQs, services, and guides. AI learns your content and uses it in calls.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Custom content library</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Instant updates</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Multi-language support</span>
                </li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-orweza">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Track every call, transcript, and result in real time with detailed analytics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Live KPI dashboard</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Call recordings & transcripts</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Export to CSV/CRM</span>
                </li>
              </ul>
            </div>

            {/* Integrations */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-pink-500/50 transition-all duration-500 hover:shadow-orweza">
              <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Integrations</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Connect with your existing tools. Orwexa fits into your workflow seamlessly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Google & Outlook calendars</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>CRM platforms</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Zapier & webhooks</span>
                </li>
              </ul>
            </div>

            {/* Messaging */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-teal-500/50 transition-all duration-500 hover:shadow-orweza">
              <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Messaging Automation</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Send SMS, WhatsApp confirmations, and follow-ups automatically after calls.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>SMS & WhatsApp</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Automated reminders</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Two-way messaging</span>
                </li>
              </ul>
            </div>

            {/* Team Management */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-orange-500/50 transition-all duration-500 hover:shadow-orweza">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Team Management</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Invite teammates, assign agents, and monitor performance across your team.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Role-based access</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Usage tracking</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Agent-level analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-12 md:p-16 border-2 border-gray-700 shadow-orweza-lg">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to transform your
                <span className="block text-gradient mt-2">call handling?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join 500+ businesses using Orwexa to answer every call, follow up every lead, and book more appointments automatically.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  href="/pricing"
                  className="group px-12 py-6 bg-gradient-primary text-white rounded-2xl font-bold text-xl hover:shadow-glow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a
                  href="https://app.orwexa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-gray-800/50 backdrop-blur-sm text-white rounded-2xl font-bold text-xl hover:bg-gray-700/50 border-2 border-gray-600/50 transition-all duration-300 flex items-center justify-center"
                >
                  Sign In
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>14 days Free trial</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Free $10 credit</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Setup in 15 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
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
