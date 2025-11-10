"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function AboutPage() {


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
            <span className="text-base font-medium text-primary-300">Our Story</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            The story behind
            <span className="block text-gradient mt-2">Orwexa</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
            From late-night cold calls to building an AI voice platform that helps businesses grow
          </p>
        </div>
      </section>


      {/* Founder Story Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left Column - Founder Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-orweza-lg bg-gray-800 border-2 border-gray-700">
                  {/* Soham's Image */}
                  <Image
                    src="/soham.jpeg"
                    alt="Soham Amatya - Founder of Orwexa"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">Soham Amatya</h3>
                  <p className="text-primary-400 font-semibold text-lg mb-2">Founder, Orwexa</p>
                  <p className="text-gray-400">Director, Dohoot Technologies</p>
                </div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 md:p-12 shadow-orweza border-2 border-gray-700 hover:border-primary-500/50 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span>The Beginning</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-xl leading-relaxed">
                    Orwexa began from a problem I lived every night — staying up past midnight calling leads in the U.S., trying to win clients through sheer persistence.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Before Orwexa, I spent years running cold email campaigns, managing remote callers, and hiring teams in Nepal to work overnight shifts just to keep up with prospects. We'd land clients for digital services through Dohoot Technologies, but it was exhausting. Calls were missed, follow-ups forgotten, and energy wasted repeating the same pitch again and again.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 md:p-12 shadow-orweza border-2 border-gray-700 hover:border-accent-500/50 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                  <span>The Solution</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    That's where the idea for Orwexa came from — not theory, but survival. I wanted a way to automate what I was doing manually: the outreach, the follow-ups, the scheduling. So I built it.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Today, Orwexa gives freelancers, solopreneurs, and small businesses what I never had in those early nights — an AI voice agent that can answer calls, make calls, follow up, and book real clients automatically.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 md:p-12 shadow-orweza border-2 border-gray-700 hover:border-green-500/50 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Today</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-xl leading-relaxed">
                    What started as a cold-calling hustle has grown into a voice platform built for anyone who lives by the phone — tradies, agents, service providers, and independent professionals who just want more time and more booked work.
                  </p>
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-700">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
                      <div className="text-sm text-gray-400">Businesses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent-400 mb-2">24/7</div>
                      <div className="text-sm text-gray-400">Always On</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">96%</div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
