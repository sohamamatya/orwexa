"use client";

import { useState } from "react";
import {
  Target,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";
import BookDemoModal from "@/components/BookDemoModal";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const values = [
    {
      icon: Target,
      title: "Customer First",
      description:
        "Every decision we make starts with our customers. We're obsessed with delivering value and exceeding expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We push the boundaries of AI technology to create voice agents that sound human and solve real problems.",
    },
    {
      icon: Heart,
      title: "Empathy",
      description:
        "Technology should enhance human connections, not replace them. We build AI that understands and cares.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description:
        "We're committed to the highest standards in everything we do, from code quality to customer support.",
    },
  ];

  const team = [
    {
      name: "Soham Amatya",
      role: "Founder",
      bio: "Built Orwexa from personal experience with cold calling and lead management. Director at Dohoot Technologies.",
      image: "SA",
    },
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute inset-0 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The story behind{" "}
            <span className="text-gradient">Orwexa</span>
          </h1>
        </div>
      </section>


      {/* Founder Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Founder Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border-4 border-gray-700">
                  {/* Placeholder for Soham's image */}
                  <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-6xl">SA</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Soham Amatya</h3>
                  <p className="text-primary-400 font-semibold mb-1">Founder, Orwexa</p>
                  <p className="text-gray-400 text-sm">Director, Dohoot Technologies</p>
                </div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl p-8 md:p-12 shadow-xl bg-gray-800 border border-gray-700">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Orwexa began from a problem I lived every night — staying up past midnight calling leads in the U.S., trying to win clients through sheer persistence.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Before Orwexa, I spent years running cold email campaigns, managing remote callers, and hiring teams in Nepal to work overnight shifts just to keep up with prospects. We'd land clients for digital services through Dohoot Technologies, but it was exhausting. Calls were missed, follow-ups forgotten, and energy wasted repeating the same pitch again and again.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    That's where the idea for Orwexa came from — not theory, but survival. I wanted a way to automate what I was doing manually: the outreach, the follow-ups, the scheduling. So I built it.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Today, Orwexa gives freelancers, solopreneurs, and small businesses what I never had in those early nights — an AI voice agent that can answer calls, make calls, follow up, and book real clients automatically.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    What started as a cold-calling hustle has grown into a voice platform built for anyone who lives by the phone — tradies, agents, service providers, and independent professionals who just want more time and more booked work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 bg-gray-800"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented people who share our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold text-lg hover:bg-primary-600 hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get Started with Orweza
            </button>
            <a
              href="#"
              className="px-8 py-4 bg-transparent text-white border-2 border-gray-600 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-200"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
