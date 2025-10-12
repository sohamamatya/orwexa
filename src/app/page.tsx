"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Sparkles,
  Zap,
  Shield,
  HeadphonesIcon,
  Users,
  BarChart3,
  Settings,
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import BookDemoModal from "@/components/BookDemoModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: HeadphonesIcon,
      title: "Smart Call Handling",
      description:
        "AI-powered voice agents that understand context, handle complex queries, and provide natural conversations 24/7.",
    },
    {
      icon: Sparkles,
      title: "Custom Voices",
      description:
        "Choose from premium AI voices or clone your own. Create a consistent brand experience across all customer interactions.",
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description:
        "Seamlessly integrate with your existing tools. Sync call data, updates, and insights with Salesforce, HubSpot, and more.",
    },
  ];

  const steps = [
    {
      icon: Settings,
      title: "Configure Your Agent",
      description:
        "Set up your AI voice agent in minutes. Customize responses, voice, and workflows to match your business needs.",
    },
    {
      icon: Phone,
      title: "Connect Your Phone",
      description:
        "Integrate with your existing phone system or get a new number. Our platform supports all major providers.",
    },
    {
      icon: BarChart3,
      title: "Monitor & Optimize",
      description:
        "Track performance in real-time. Use insights and analytics to continuously improve your customer experience.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "50K+", label: "Calls/Month" },
    { value: "3x", label: "Faster Response" },
    { value: "85%", label: "Cost Savings" },
  ];

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would play an actual audio file
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Voice Intelligence</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Your AI Voice Agent for{" "}
                <span className="text-gradient">Every Customer Call</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automate phone calls, answer inquiries, and schedule appointments with
                intelligent voice AI that sounds human and scales effortlessly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-50 border-2 border-gray-200 transition-all duration-200 flex items-center justify-center"
                >
                  View Pricing
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Mock Phone UI */}
            <div className="relative animate-slide-up animate-delay-200">
              <div className="relative bg-gradient-primary rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Orweza AI Agent</div>
                      <div className="text-sm text-gray-500">Ready to assist</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Customer</div>
                      <div className="text-gray-900">
                        "I'd like to schedule an appointment"
                      </div>
                    </div>
                    <div className="bg-gradient-soft rounded-lg p-4">
                      <div className="text-sm text-primary-600 mb-1">Orweza AI</div>
                      <div className="text-gray-900">
                        "I'd be happy to help! What day works best for you?"
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Customer</div>
                      <div className="text-gray-900">"Next Tuesday afternoon"</div>
                    </div>
                    <div className="bg-gradient-soft rounded-lg p-4">
                      <div className="text-sm text-primary-600 mb-1">Orweza AI</div>
                      <div className="text-gray-900">
                        "Perfect! I have 2:00 PM available. I'll book that for you."
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-green-600 text-sm font-medium pt-4">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Appointment Scheduled Successfully</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold">100% Secure</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float animate-delay-200">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-semibold">10K+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for{" "}
              <span className="text-gradient">Modern Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to deliver exceptional customer experiences through
              AI-powered voice conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`animate-slide-up animate-delay-${index * 100}`}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold text-lg group"
            >
              <span>Explore all features</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Started in{" "}
              <span className="text-gradient">Three Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Launch your AI voice agent in minutes, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Audio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hear Orweza in <span className="text-gradient">Action</span>
            </h2>
            <p className="text-xl text-gray-600">
              Listen to how natural and intelligent our AI voice agents sound.
            </p>
          </div>

          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="bg-white rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Sample Call Recording
                  </h3>
                  <p className="text-gray-600">
                    Restaurant reservation handled by Orweza AI
                  </p>
                </div>

                <button
                  onClick={handlePlayDemo}
                  className="group w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Play
                    className={`w-8 h-8 text-white ${
                      isPlaying ? "animate-pulse" : ""
                    }`}
                    fill={isPlaying ? "currentColor" : "none"}
                  />
                </button>

                <div className="flex-1 text-center md:text-right">
                  <div className="text-sm text-gray-500 mb-2">Duration</div>
                  <div className="text-2xl font-bold text-gray-900">1:24</div>
                </div>
              </div>

              {/* Audio Waveform Placeholder */}
              {isPlaying && (
                <div className="mt-6 flex items-center justify-center space-x-1">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-primary rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 40 + 20}px`,
                        animationDelay: `${i * 50}ms`,
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Customer Calls?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using Orweza to deliver exceptional phone experiences.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
