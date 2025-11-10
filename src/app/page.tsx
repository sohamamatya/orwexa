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
  Zap,
  Users,
  BarChart3,
  MessageSquare,
} from "lucide-react";

export default function Home() {

  return (
    <>
      {/* HERO SECTION - Modern Full-Height */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 pattern-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium text-primary-300">AI-Powered Voice Agent</span>
              </div>

              {/* Headline */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Never miss a
                <span className="block text-gradient mt-2">booking again.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Your AI receptionist answers calls 24/7, follows up with leads, and books appointments automatically.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/pricing"
                  className="group px-10 py-5 bg-gradient-primary text-white rounded-2xl font-bold text-lg hover:shadow-glow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a
                  href="https://app.orwexa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-gray-800/50 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-gray-700/50 border-2 border-gray-600/50 transition-all duration-300 flex items-center justify-center"
                >
                  Login
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">Trusted by 500+ businesses</span>
                </div>
              </div>
            </div>

            {/* Right Column - Video & Stats */}
            <div className="relative space-y-6 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              {/* Video */}
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-orweza-lg border border-gray-700/50 bg-gray-800">
                <iframe
                  src="https://www.youtube.com/embed/fWmm3KgiA-w"
                  title="Orwexa Live Demo"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">96%</div>
                  <div className="text-xs text-gray-400 mt-1">Answer Rate</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary-400">24/7</div>
                  <div className="text-xs text-gray-400 mt-1">Always On</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold text-accent-400">&lt;30s</div>
                  <div className="text-xs text-gray-400 mt-1">Response Time</div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 rounded-2xl shadow-glow-md p-4 animate-float border border-primary-500/30 bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-semibold text-white">Live & Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - Bento Grid Layout */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything you need to
              <span className="block text-gradient mt-2">close more deals</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your AI agent handles the entire customer journey from first call to booked appointment
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Large Feature 1 - Spanning 2 columns */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-500 hover:shadow-orweza group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PhoneIncoming className="w-8 h-8 text-primary-400" />
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1">
                  <span className="text-sm font-semibold text-green-400">Most Popular</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">24/7 Inbound Reception</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Never miss another call. Your AI receptionist answers instantly, qualifies leads, answers FAQs, and books appointments directly into your calendar.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Instant pickup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Lead qualification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Smart booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Call recording</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-accent-500/50 transition-all duration-500 hover:shadow-glow-md group">
              <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PhoneOutgoing className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Outbound Follow-Up</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Automatically call back missed leads, follow up on quotes, and re-engage dormant customers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Auto callbacks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Quote follow-ups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Re-activation campaigns</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-glow-md group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Scheduling</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Sync with your calendar, set availability rules, and let AI handle all the booking logistics.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Calendar integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Auto confirmations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Smart reminders</span>
                </div>
              </div>
            </div>

            {/* Feature 4 - Large spanning 2 columns */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-orweza group">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Analytics & Insights</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Track every call, measure conversion rates, and optimize your sales process with detailed analytics.
                  </p>
                </div>
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Conversion Rate</span>
                      <span className="text-2xl font-bold text-green-400">87%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-400">Avg Call Duration</span>
                      <span className="text-xl font-bold text-primary-400">3m 42s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Monthly Bookings</span>
                      <span className="text-xl font-bold text-accent-400">247</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-glow-md group">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Easy Setup</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Go live in under 15 minutes. No coding, no complex integrations. Just plug and play.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Quick configuration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Pre-built templates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Live support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Visual Workflow */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Go live in
              <span className="block text-gradient mt-2">under 15 minutes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple setup. No coding required. Start taking bookings today.
            </p>
          </div>

          {/* Steps with Connecting Lines */}
          <div className="relative">
            {/* Connecting Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-accent-500 opacity-20" style={{top: '120px'}}></div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-primary-500/50 transition-all duration-500 h-full hover:shadow-orweza">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-glow-md">
                    1
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 mt-8 group-hover:scale-110 transition-transform">
                    <Settings className="w-10 h-10 text-primary-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-white mb-4">Configure</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Set up your AI agent with custom greetings, FAQs, and booking rules using our simple dashboard.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                      <span className="text-sm">Custom scripts</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                      <span className="text-sm">FAQ database</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                      <span className="text-sm">Booking rules</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-indigo-500/50 transition-all duration-500 h-full hover:shadow-orweza">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-glow-md">
                    2
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 mt-8 group-hover:scale-110 transition-transform">
                    <Phone className="w-10 h-10 text-indigo-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-white mb-4">Connect</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Link your phone number and calendar. Use your existing number or get a new one from us.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      <span className="text-sm">Number porting</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      <span className="text-sm">Calendar sync</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      <span className="text-sm">CRM integration</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-accent-500/50 transition-all duration-500 h-full hover:shadow-orweza">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-glow-md">
                    3
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-accent-500/20 rounded-2xl flex items-center justify-center mb-6 mt-8 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-10 h-10 text-accent-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-white mb-4">Launch</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Your AI goes live immediately. Monitor calls, track bookings, and watch your business grow.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                      <span className="text-sm">Live dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                      <span className="text-sm">Call recordings</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                      <span className="text-sm">Analytics & reports</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Dashboard Preview */}
          <div className="mt-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-orweza">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Real-time Dashboard</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Total Calls</div>
                <div className="text-3xl font-bold text-white">1,247</div>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Avg Duration</div>
                <div className="text-3xl font-bold text-primary-400">3:42</div>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Total Cost</div>
                <div className="text-3xl font-bold text-indigo-400">$84</div>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Success Rate</div>
                <div className="text-3xl font-bold text-green-400">94%</div>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Answered</div>
                <div className="text-3xl font-bold text-green-400">1,198</div>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Bookings</div>
                <div className="text-3xl font-bold text-accent-400">247</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF & TESTIMONIALS */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Trusted by businesses
              <span className="block text-gradient mt-2">just like yours</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join hundreds of businesses already using Orwexa to grow faster
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 text-center hover:border-green-500/50 transition-all duration-300 hover:shadow-glow-md">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <p className="text-gray-400">Always Available</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-md">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">&lt;30s</div>
              <p className="text-gray-400">Response Time</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 text-center hover:border-accent-500/50 transition-all duration-300 hover:shadow-glow-md">
              <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-400">Calendar Synced</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 text-center hover:border-primary-500/50 transition-all duration-300 hover:shadow-glow-md">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-500 hover:shadow-orweza group">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                "We stopped missing customer calls completely. The AI books jobs before I even check my phone."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-700">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                  M
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Marcus</div>
                  <div className="text-sm text-gray-400">Electrician</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Featured */}
            <div className="bg-gradient-to-br from-primary-900/20 to-gray-900 rounded-3xl p-8 border-2 border-primary-500/50 shadow-orweza group relative overflow-hidden">
              {/* Featured Badge */}
              <div className="absolute top-6 right-6 bg-primary-500/20 border border-primary-500/30 rounded-full px-3 py-1">
                <span className="text-xs font-semibold text-primary-300">Featured</span>
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 text-lg mb-8 leading-relaxed font-medium">
                "Our AI receptionist now handles 80% of our real estate inquiries. Game changer."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-700">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                  T
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Tahlia</div>
                  <div className="text-sm text-gray-400">Property Agent</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-accent-500/50 transition-all duration-500 hover:shadow-orweza group">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                "Orwexa feels more reliable than most humans I've hired. Never takes a day off."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-700">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                  R
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Ravi</div>
                  <div className="text-sm text-gray-400">Marketing Agency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicator */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-8 py-4">
              <Users className="w-5 h-5 text-primary-400" />
              <span className="text-gray-300">Join 500+ businesses growing with Orwexa</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Modern & Compelling */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>

        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-12 md:p-16 border-2 border-gray-700 shadow-orweza-lg overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full filter blur-3xl opacity-10 -z-10"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Get started in 15 minutes</span>
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Ready to stop missing
                <span className="block text-gradient mt-2">bookings forever?</span>
              </h2>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join 500+ businesses using AI to answer every call, follow up with every lead, and book more appointments on autopilot.
              </p>

              {/* CTA Buttons */}
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

              {/* Trust Badges */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>No credit card required</span>
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

          {/* Bottom Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-white font-bold mb-2">Instant Setup</h3>
              <p className="text-sm text-gray-400">Go live in minutes, not weeks</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-bold mb-2">Secure & Reliable</h3>
              <p className="text-sm text-gray-400">Enterprise-grade security</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center">
              <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-white font-bold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-400">We're here to help</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
