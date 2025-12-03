"use client";

import Link from "next/link";
import Image from "next/image";
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
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                You work with your hands.
                <span className="block text-gradient mt-1">Let Orwexa work the phone.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                Join 10+ businesses using Orwexa to answer, qualify, and book customers automatically — day, night, weekends.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  href="/pricing"
                  className="group px-8 py-4 bg-gradient-primary text-white rounded-2xl font-bold text-base hover:shadow-glow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Trial Info */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>7-Day Free Trial</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>$10 Free Credit</span>
                </div>
              </div>

            </div>

            {/* Right Column - Stats */}
            <div className="relative animate-fade-in-up" style={{animationDelay: '200ms'}}>
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">96%</div>
                  <div className="text-xs text-gray-400 mt-1">Answer Rate</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary-400">24/7</div>
                  <div className="text-xs text-gray-400 mt-1">Always On</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-accent-400">&lt;30s</div>
                  <div className="text-xs text-gray-400 mt-1">Response Time</div>
                </div>
              </div>
            </div>
                </div>
              </div>
      </section>

      {/* PARTNER LOGOS SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 w-full" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {/* OpenAI */}
            <div className="h-10 md:h-12 lg:h-14 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/OPENAI.png"
                alt="OpenAI"
                width={140}
                height={56}
                className="h-full w-auto object-contain"
              />
            </div>
            
            {/* Twilio */}
            <div className="h-10 md:h-12 lg:h-14 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/TWILIO.png"
                alt="Twilio"
                width={140}
                height={56}
                className="h-full w-auto object-contain"
              />
            </div>
            
            {/* Retell AI */}
            <div className="h-10 md:h-12 lg:h-14 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/RETELLAI.svg"
                alt="Retell AI"
                width={140}
                height={56}
                className="h-full w-auto object-contain"
              />
            </div>
            
            {/* Zapier */}
            <div className="h-10 md:h-12 lg:h-14 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/ZAPIER.png"
                alt="Zapier"
                width={140}
                height={56}
                className="h-full w-auto object-contain"
              />
            </div>
            
            {/* Google Calendar */}
            <div className="h-10 md:h-12 lg:h-14 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/GOOGLECALENDER.png"
                alt="Google Calendar"
                width={140}
                height={56}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TWO AI ENGINES SECTION */}
      <section className="py-8 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Two AI Engines. One outcome.
              <span className="block text-gradient mt-1">More Booked Work.</span>
            </h2>
          </div>

          {/* Two AI Engines Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* 1. Inbound AI Reception */}
            <div className="bg-gradient-to-br from-primary-500/10 to-gray-800 rounded-xl p-6 border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 hover:shadow-orweza group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-primary-500/30">
                  <PhoneIncoming className="w-7 h-7 text-primary-400" />
                </div>
                <div className="bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-primary-300">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Inbound AI Reception</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                AI answers every call instantly, qualifies the caller, and books a slot in your calendar.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                  <span className="text-gray-300 text-sm">Instant pickup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                  <span className="text-gray-300 text-sm">Lead qualification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                  <span className="text-gray-300 text-sm">Real-time booking</span>
                </div>
              </div>
            </div>

            {/* 2. Outbound AI Follow-Up */}
            <div className="bg-gradient-to-br from-accent-500/10 to-gray-800 rounded-xl p-6 border border-accent-500/20 hover:border-accent-500/50 transition-all duration-300 hover:shadow-glow-md group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-accent-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-accent-500/30">
                <PhoneOutgoing className="w-7 h-7 text-accent-400" />
                </div>
                <div className="bg-accent-500/10 border border-accent-500/20 rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-accent-300">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Outbound AI Follow-Up</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                AI calls back missed calls and cold leads so you stop leaking revenue.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                  <span className="text-gray-300 text-sm">Auto callbacks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                  <span className="text-gray-300 text-sm">Quote follow-ups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                  <span className="text-gray-300 text-sm">Lead reactivation</span>
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
                  <h3 className="text-xl font-bold text-white mb-3">Connect</h3>

                  {/* Features */}
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      <span className="text-sm">Call forwarding from your existing number</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      <span className="text-sm">Get a dedicated AI number</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      <span className="text-sm">Make inbound/outbound calls from your AI line</span>
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
          <div className="grid md:grid-cols-3 gap-3 mb-6">
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
            {/* Testimonial 1 - Krishna */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-primary-500/50 transition-all duration-500 hover:shadow-orweza group">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                "Orwexa books more cleaning jobs than we ever managed on our own. It answers instantly, follows up every lead, and keeps our schedule full."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                  K
                </div>
                <div>
                  <div className="text-white font-bold text-base">Krishna</div>
                  <div className="text-xs text-gray-400">Bloody Good Cleaners</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Susan (Featured) */}
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
                "Orwexa feels more reliable than most humans I've hired. It never misses a call and never takes a day off."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                  S
                </div>
                <div>
                  <div className="text-white font-bold text-base">Susan</div>
                  <div className="text-xs text-gray-400">Arkoray Digital</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Marcus */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-accent-500/50 transition-all duration-500 hover:shadow-orweza group">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                "We've stopped missing customer calls completely. Orwexa books jobs before I even get a chance to check my phone."
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                  M
                </div>
                <div>
                  <div className="text-white font-bold text-base">Marcus</div>
                  <div className="text-xs text-gray-400">Electrician</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-primary-400" />
              <span className="text-gray-300 text-xs">Join 10+ businesses growing with Orwexa</span>
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
                Join 10+ businesses using AI to answer every call, follow up with every lead, and book more appointments on autopilot.
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
                  <span className="text-sm">7-Day Free Trial</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm">$10 Free Credit</span>
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
