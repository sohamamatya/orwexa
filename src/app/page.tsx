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
      <section className="relative pt-24 pb-10 md:pt-24 md:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 pattern-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-4 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium text-primary-300">AI-Powered Voice Agent</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Never miss a
                <span className="block text-gradient mt-1">booking again.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                Your AI receptionist answers calls 24/7, follows up with leads, and books appointments automatically.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  href="/pricing"
                  className="group px-8 py-4 bg-gradient-primary text-white rounded-2xl font-bold text-base hover:shadow-glow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a
                  href="https://app.orwexa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-2xl font-bold text-base hover:bg-gray-700/50 border-2 border-gray-600/50 transition-all duration-300 flex items-center justify-center"
                >
                  Login
                </a>
              </div>

            </div>

            {/* Right Column - Video & Stats */}
            <div className="relative space-y-3 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              {/* Video */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-orweza-lg border border-gray-700/50 bg-gray-800">
                <iframe
                  src="https://www.youtube.com/embed/fWmm3KgiA-w"
                  title="Orwexa Live Demo"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-2 text-center">
                  <div className="text-xl font-bold text-green-400">96%</div>
                  <div className="text-xs text-gray-400 mt-0.5">Answer Rate</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-2 text-center">
                  <div className="text-xl font-bold text-primary-400">24/7</div>
                  <div className="text-xs text-gray-400 mt-0.5">Always On</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-2 text-center">
                  <div className="text-xl font-bold text-accent-400">&lt;30s</div>
                  <div className="text-xs text-gray-400 mt-0.5">Response Time</div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 rounded-xl shadow-glow-md p-3 animate-float border border-primary-500/30 bg-gray-900/90 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-semibold text-white">Live & Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - Compact Modern Design */}
      <section className="py-8 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          {/* Compact Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Everything you need to
              <span className="block text-gradient mt-1">close more deals</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Your AI agent handles the entire customer journey from first call to booked appointment
            </p>
          </div>

          {/* Dense Grid Layout - No Wasted Space */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Feature 1 - Inbound Reception */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary-500/10 to-gray-800 rounded-xl p-5 border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 hover:shadow-orweza group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-primary-500/30">
                  <PhoneIncoming className="w-6 h-6 text-primary-400" />
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5">
                  <span className="text-xs font-semibold text-green-400">Popular</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Inbound Reception</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Never miss another call. Your AI receptionist answers instantly, qualifies leads, and books appointments.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">Instant pickup</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">Lead qualification</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">Smart booking</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">Call recording</span>
                </div>
              </div>
            </div>

            {/* Feature 2 - Outbound Follow-Up */}
            <div className="bg-gradient-to-br from-accent-500/10 to-gray-800 rounded-xl p-5 border border-accent-500/20 hover:border-accent-500/50 transition-all duration-300 hover:shadow-glow-md group">
              <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-accent-500/30">
                <PhoneOutgoing className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Outbound Follow-Up</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-3">
                Automatically call back missed leads and re-engage dormant customers.
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                  <span className="text-gray-300 text-xs">Auto callbacks</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                  <span className="text-gray-300 text-xs">Quote follow-ups</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                  <span className="text-gray-300 text-xs">Re-activation</span>
                </div>
              </div>
            </div>

            {/* Feature 3 - Smart Scheduling */}
            <div className="bg-gradient-to-br from-blue-500/10 to-gray-800 rounded-xl p-5 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-md group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-blue-500/30">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Scheduling</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-3">
                Sync with your calendar and let AI handle all booking logistics.
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300 text-xs">Calendar sync</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300 text-xs">Auto confirmations</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300 text-xs">Smart reminders</span>
                </div>
              </div>
            </div>

            {/* Feature 4 - Analytics & Insights */}
            <div className="lg:col-span-2 bg-gradient-to-br from-indigo-500/10 to-gray-800 rounded-xl p-5 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-orweza group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-indigo-500/30">
                  <BarChart3 className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">87%</div>
                  <div className="text-xs text-gray-500">Conversion</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Analytics & Insights</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Track every call, measure conversion rates, and optimize your sales process.
              </p>
              <div className="grid grid-cols-3 gap-2 bg-gray-900/50 rounded-lg p-3 border border-gray-700/50">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-0.5">87%</div>
                  <div className="text-xs text-gray-400">Conversion</div>
                </div>
                <div className="text-center border-x border-gray-700/50">
                  <div className="text-lg font-bold text-primary-400 mb-0.5">3:42</div>
                  <div className="text-xs text-gray-400">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent-400 mb-0.5">247</div>
                  <div className="text-xs text-gray-400">Bookings</div>
                </div>
              </div>
            </div>

            {/* Feature 5 - Easy Setup */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-gray-800 rounded-xl p-5 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-glow-md group">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border border-yellow-500/30">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Easy Setup</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-3">
                Go live in under 15 minutes. No coding required.
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">Quick config</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">Templates</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-xs">Live support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Visual Workflow */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Go live in
              <span className="block text-gradient mt-1">under 15 minutes</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Simple setup. No coding required. Start taking bookings today.
            </p>
          </div>

          {/* Steps with Connecting Lines */}
          <div className="relative">
            {/* Connecting Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-accent-500 opacity-20" style={{top: '120px'}}></div>

            <div className="grid md:grid-cols-3 gap-4 relative">
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border-2 border-gray-700 hover:border-primary-500/50 transition-all duration-500 h-full hover:shadow-orweza">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-5 w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-glow-md">
                    1
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary-500/20 rounded-lg flex items-center justify-center mb-3 mt-5 group-hover:scale-110 transition-transform">
                    <Settings className="w-7 h-7 text-primary-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">Configure</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Set up your AI agent with custom greetings, FAQs, and booking rules using our simple dashboard.
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5">
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
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border-2 border-gray-700 hover:border-indigo-500/50 transition-all duration-500 h-full hover:shadow-orweza">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-5 w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-glow-md">
                    2
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-3 mt-5 group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-indigo-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Link your phone number and calendar. Use your existing number or get a new one from us.
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5">
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
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border-2 border-gray-700 hover:border-accent-500/50 transition-all duration-500 h-full hover:shadow-orweza">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-5 w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-glow-md">
                    3
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-accent-500/20 rounded-lg flex items-center justify-center mb-3 mt-5 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-7 h-7 text-accent-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Your AI goes live immediately. Monitor calls, track bookings, and watch your business grow.
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5">
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
          <div className="mt-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 shadow-orweza">
            <h3 className="text-lg font-bold text-white mb-4 text-center">Real-time Dashboard</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                <div className="text-xs text-gray-400 mb-1">Total Calls</div>
                <div className="text-2xl font-bold text-white">1,247</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                <div className="text-xs text-gray-400 mb-1">Avg Duration</div>
                <div className="text-2xl font-bold text-primary-400">3:42</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                <div className="text-xs text-gray-400 mb-1">Total Cost</div>
                <div className="text-2xl font-bold text-indigo-400">$84</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                <div className="text-xs text-gray-400 mb-1">Success Rate</div>
                <div className="text-2xl font-bold text-green-400">94%</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                <div className="text-xs text-gray-400 mb-1">Answered</div>
                <div className="text-2xl font-bold text-green-400">1,198</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                <div className="text-xs text-gray-400 mb-1">Bookings</div>
                <div className="text-2xl font-bold text-accent-400">247</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF & TESTIMONIALS */}
      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Trusted by businesses
              <span className="block text-gradient mt-1">just like yours</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Join hundreds of businesses already using Orwexa to grow faster
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-3 mb-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 text-center hover:border-green-500/50 transition-all duration-300 hover:shadow-glow-md">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <p className="text-gray-400 text-xs">Always Available</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-md">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">&lt;30s</div>
              <p className="text-gray-400 text-xs">Response Time</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 text-center hover:border-accent-500/50 transition-all duration-300 hover:shadow-glow-md">
              <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-6 h-6 text-accent-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <p className="text-gray-400 text-xs">Calendar Synced</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 text-center hover:border-primary-500/50 transition-all duration-300 hover:shadow-glow-md">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">10+</div>
              <p className="text-gray-400 text-xs">Happy Clients</p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-primary-500/50 transition-all duration-500 hover:shadow-orweza group">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                "We stopped missing customer calls completely. The AI books jobs before I even check my phone."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                  M
                </div>
                <div>
                  <div className="text-white font-bold text-base">Marcus</div>
                  <div className="text-xs text-gray-400">Electrician</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Featured */}
            <div className="bg-gradient-to-br from-primary-900/20 to-gray-900 rounded-xl p-5 border-2 border-primary-500/50 shadow-orweza group relative overflow-hidden">
              {/* Featured Badge */}
              <div className="absolute top-3 right-3 bg-primary-500/20 border border-primary-500/30 rounded-full px-2 py-0.5">
                <span className="text-xs font-semibold text-primary-300">Featured</span>
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 text-sm mb-4 leading-relaxed font-medium">
                "Our AI receptionist now handles 80% of our real estate inquiries. Game changer."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                  T
                </div>
                <div>
                  <div className="text-white font-bold text-base">Tahlia</div>
                  <div className="text-xs text-gray-400">Property Agent</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-accent-500/50 transition-all duration-500 hover:shadow-orweza group">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                "Orwexa feels more reliable than most humans I've hired. Never takes a day off."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                  R
                </div>
                <div>
                  <div className="text-white font-bold text-base">Ravi</div>
                  <div className="text-xs text-gray-400">Marketing Agency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-primary-400" />
              <span className="text-gray-300 text-xs">Join 500+ businesses growing with Orwexa</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Modern & Compelling */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>

        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border-2 border-gray-700 shadow-orweza-lg overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl opacity-10 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full filter blur-3xl opacity-10 -z-10"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-400">Get started in 15 minutes</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to stop missing
                <span className="block text-gradient mt-1">bookings forever?</span>
              </h2>

              {/* Subheading */}
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Join 500+ businesses using AI to answer every call, follow up with every lead, and book more appointments on autopilot.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <Link
                  href="/pricing"
                  className="group px-10 py-4 bg-gradient-primary text-white rounded-2xl font-bold text-lg hover:shadow-glow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a
                  href="https://app.orwexa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-gray-800/50 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-gray-700/50 border-2 border-gray-600/50 transition-all duration-300 flex items-center justify-center"
                >
                  Sign In
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm">14 days Free trial</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Free $10 credit</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Setup in 15 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-3 mt-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 text-center">
              <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Zap className="w-4 h-4 text-primary-400" />
              </div>
              <h3 className="text-white font-bold mb-1 text-xs">Instant Setup</h3>
              <p className="text-xs text-gray-400">Go live in minutes, not weeks</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 text-center">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-4 h-4 text-green-400" />
              </div>
              <h3 className="text-white font-bold mb-1 text-xs">Secure & Reliable</h3>
              <p className="text-xs text-gray-400">Enterprise-grade security</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 text-center">
              <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <MessageSquare className="w-4 h-4 text-accent-400" />
              </div>
              <h3 className="text-white font-bold mb-1 text-xs">24/7 Support</h3>
              <p className="text-xs text-gray-400">We're here to help</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
