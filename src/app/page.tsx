"use client";

import Link from "next/link";
import {
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  Settings,
  Sparkles,
  Shield,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Home() {

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute inset-0 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Stop missing calls. <span className="text-gradient">Start booking jobs automatically.</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Orwexa answers inbound calls, calls leads back, and books appointments for you using natural-sounding AI. One platform for reception, follow-up, and sales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://app.orwexa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Login</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 border-2 border-gray-600 transition-all duration-200 flex items-center justify-center"
                >
                  Get Started
                </Link>
              </div>

              {/* Embedded Video */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.youtube.com/embed/fWmm3KgiA-w"
                  title="Orwexa Live Demo"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Trust line */}
              <p className="text-sm text-gray-400 leading-relaxed">
                24/7 AI voice agent + outbound follow-up + live booking for real estate, clinics, freelancers, solopreneurs, agency owners, and service businesses worldwide.
              </p>
            </div>

            {/* Right Column - Dashboard Mock */}
            <div className="relative animate-slide-up animate-delay-200">
              <div className="relative bg-gradient-primary rounded-3xl p-8 shadow-2xl">
                <div className="rounded-2xl p-6 space-y-4 border border-gray-700" style={{backgroundColor: 'rgb(17 24 39)'}}>
                  <h3 className="text-xl font-bold text-white mb-4">Dashboard Overview</h3>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="text-sm text-gray-400 mb-1">Answered calls</div>
                      <div className="text-3xl font-bold text-green-400">96%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="text-sm text-gray-400 mb-1">Bookings this week</div>
                      <div className="text-3xl font-bold text-primary-400">42</div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Follow-ups done</div>
                    <div className="text-3xl font-bold text-gradient">318</div>
                  </div>

                  <div className="bg-gradient-soft rounded-lg p-4 border border-gray-600">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-primary-400 mb-1">Next appointment</div>
                        <div className="text-white font-semibold">Thu 2:30 PM</div>
                      </div>
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-xs text-gray-300 mt-2">Confirmed</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 rounded-2xl shadow-xl p-4 animate-float border border-gray-700" style={{backgroundColor: 'rgb(17 24 39)'}}>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-white">24/7 Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PAIN & PROMISE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your phone is <span className="text-gradient">bleeding money.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Column 1 */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300">
              <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Missed calls</h3>
              <p className="text-gray-300 leading-relaxed">
                Your AI receptionist picks up instantly, qualifies the caller, and books them in. You don't lose the client because you were busy or offline.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No follow-up</h3>
              <p className="text-gray-300 leading-relaxed">
                Orwexa automatically calls back missed leads, chases quotes, and reactivates old inquiries — no manual work required.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Manual booking</h3>
              <p className="text-gray-300 leading-relaxed">
                The AI books directly into your calendar, sends confirmations, and reminds the client. No more "Sorry, what was your address again?"
              </p>
            </div>
          </div>

          <div className="text-center">
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
        </div>
      </section>

      {/* SECTION 3 — INBOUND + OUTBOUND */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One AI that <span className="text-gradient">answers and dials.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Inbound Reception */}
            <div className="bg-gradient-primary rounded-3xl p-8 shadow-2xl">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <PhoneIncoming className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inbound Reception</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Custom greeting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Qualifies callers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Books appointments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Sends confirmations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Outbound Follow-up */}
            <div className="bg-gradient-primary rounded-3xl p-8 shadow-2xl">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <PhoneOutgoing className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Outbound Follow-up</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Calls back missed leads</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Follows up quotes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Re-engages inactive customers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto">
            Your AI sounds like a real teammate, handles objections, and never gets tired or distracted.
          </p>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live in <span className="text-gradient">under 15 minutes.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300 h-full">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6 mt-4">
                  <Settings className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Configure your agent</h3>
                <p className="text-gray-300 leading-relaxed">
                  Add your scripts, FAQs, and booking rules. No coding required.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300 h-full">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6 mt-4">
                  <Phone className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect your number</h3>
                <p className="text-gray-300 leading-relaxed">
                  Use your existing number or get a new one. Route inbound calls or launch outbound campaigns.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300 h-full">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="w-14 h-14 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6 mt-4">
                  <TrendingUp className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Start taking bookings</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your AI answers and calls out immediately. You watch the dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Screenshot Placeholder */}
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
              <div className="p-4">
                <div className="text-sm text-gray-400 mb-2">Total Calls</div>
                <div className="text-2xl font-bold text-white">1,247</div>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-400 mb-2">Avg Duration</div>
                <div className="text-2xl font-bold text-white">3:42</div>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-400 mb-2">Total Cost</div>
                <div className="text-2xl font-bold text-white">$84</div>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-400 mb-2">Success Rate</div>
                <div className="text-2xl font-bold text-green-400">94%</div>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-400 mb-2">Answered</div>
                <div className="text-2xl font-bold text-green-400">1,198</div>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-400 mb-2">Failed</div>
                <div className="text-2xl font-bold text-red-400">49</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROOF / METRICS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              What you get
            </h2>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <p className="text-gray-300">Answered calls 24/7</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-300">Response time under 30 seconds</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <p className="text-gray-300">Booked jobs synced to calendar</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <p className="text-gray-300">Lower cost than a full-time receptionist</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "We stopped missing customer calls completely. The AI books jobs before I even check my phone."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="text-white font-semibold">Marcus</div>
                  <div className="text-sm text-gray-400">Electrician</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Our AI receptionist now handles 80% of our real estate inquiries."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div>
                  <div className="text-white font-semibold">Tahlia</div>
                  <div className="text-sm text-gray-400">Property Agent</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Orwexa feels more reliable than most humans I've hired."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <div className="text-white font-semibold">Ravi</div>
                  <div className="text-sm text-gray-400">Marketing Agency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get your next booking <span className="text-gradient">on autopilot.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No setup stress. No scripts to write from scratch. No awkward cold calls. Just more booked work.
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
