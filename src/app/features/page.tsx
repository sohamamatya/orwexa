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
} from "lucide-react";

export default function FeaturesPage() {

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute inset-0 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Features that <span className="text-gradient">actually matter.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Everything inside Orwexa is built to answer calls, follow up leads, and book real customers — automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.orwexa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Login
            </a>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 border-2 border-gray-600 transition-all duration-200 flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — AI VOICE AGENTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                AI that sounds <span className="text-gradient">human.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Choose from natural voices, accents, and tones powered by ElevenLabs. Set how your AI speaks — calm, confident, or friendly — and let it represent your brand perfectly.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Multiple voice and accent options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Adjustable tone, speed, and politeness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Learns your phrases, pricing, and service terms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Multilanguage voice options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — INBOUND RECEPTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Custom greeting and welcome flow</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Lead qualification questions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Booking confirmations via SMS or WhatsApp</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Automatic calendar sync (Google / Outlook)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Escalate to a real person when needed</span>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                <PhoneIncoming className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Answer every call <span className="text-gradient">instantly.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Orwexa picks up, qualifies, and books appointments — 24/7. Your AI receptionist greets callers naturally and syncs bookings directly to your calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUTBOUND FOLLOW-UP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <PhoneOutgoing className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Never forget a lead <span className="text-gradient">again.</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Orwexa automatically calls back missed leads, quote requests, or old contacts — so nothing slips through the cracks.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Automatic missed-call callbacks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Batch outbound campaigns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Quote and estimate follow-ups</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Reactivation for stale leads</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">"Just confirming your booking" reminder calls</span>
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

      {/* SECTION 11 — CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start using Orwexa <span className="text-gradient">today.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            All the power of a 24/7 AI receptionist — none of the overhead. Start your free trial and let Orwexa handle your next call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.orwexa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Login
            </a>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 border-2 border-gray-600 transition-all duration-200 flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
