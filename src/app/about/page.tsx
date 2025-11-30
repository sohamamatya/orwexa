"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function AboutPage() {


  return (
    <>
      {/* Hero Section - Compact */}
      <section className="relative min-h-[40vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-12" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto w-full text-center py-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1 mb-4">
            <Sparkles className="w-3 h-3 text-primary-400" />
            <span className="text-xs font-medium text-primary-300">Our Story</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            The story behind
            <span className="block text-gradient mt-1">Orwexa</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From late-night cold calls to building an AI voice platform that helps businesses grow
          </p>
        </div>
      </section>


      {/* Founder Story Section */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Left Column - Founder Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-orweza-lg bg-gray-800 border border-gray-700">
                  {/* Soham's Image */}
                  <Image
                    src="/soham.jpeg"
                    alt="Soham Amatya - Founder of Orwexa"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-1.5">Soham Amatya</h3>
                  <p className="text-primary-400 font-semibold text-sm mb-1">Founder, Orwexa</p>
                  <p className="text-gray-400 text-xs">Director, Dohoot Technologies</p>
                </div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 shadow-orweza border border-gray-700 hover:border-primary-500/50 transition-all duration-500">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                  <span>The Beginning</span>
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-300 text-base leading-relaxed">
                    Orwexa began from a problem I lived every night — staying up past midnight calling leads in the U.S., trying to win clients through sheer persistence.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Before Orwexa, I spent years running cold email campaigns, managing remote callers, and hiring teams in Nepal to work overnight shifts just to keep up with prospects. We'd land clients for digital services through Dohoot Technologies, but it was exhausting. Calls were missed, follow-ups forgotten, and energy wasted repeating the same pitch again and again.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 shadow-orweza border border-gray-700 hover:border-accent-500/50 transition-all duration-500">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-accent-400 rounded-full"></span>
                  <span>The Solution</span>
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    That's where the idea for Orwexa came from — not theory, but survival. I wanted a way to automate what I was doing manually: the outreach, the follow-ups, the scheduling. So I built it.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Today, Orwexa gives freelancers, solopreneurs, and small businesses what I never had in those early nights — an AI voice agent that can answer calls, make calls, follow up, and book real clients automatically.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 shadow-orweza border border-gray-700 hover:border-green-500/50 transition-all duration-500">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Today</span>
                </h2>
                <div className="space-y-3">
                  <p className="text-gray-300 text-base leading-relaxed">
                    What started as a cold-calling hustle has grown into a voice platform built for anyone who lives by the phone — tradies, agents, service providers, and independent professionals who just want more time and more booked work.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">10+</div>
                      <div className="text-xs text-gray-400">Businesses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-accent-400 mb-1">24/7</div>
                      <div className="text-xs text-gray-400">Always On</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">96%</div>
                      <div className="text-xs text-gray-400">Success Rate</div>
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
