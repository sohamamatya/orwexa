"use client";

import { useState } from "react";
import {
  Phone,
  Mic,
  Brain,
  Zap,
  Globe,
  Shield,
  HeadphonesIcon,
  BarChart3,
  Calendar,
  MessageSquare,
  Database,
  Lock,
  Clock,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import BookDemoModal from "@/components/BookDemoModal";

export default function FeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coreFeatures = [
    {
      icon: Brain,
      title: "Advanced AI Understanding",
      description:
        "Natural language processing that understands context, intent, and sentiment for truly intelligent conversations.",
    },
    {
      icon: Mic,
      title: "Premium Voice Quality",
      description:
        "Crystal-clear, natural-sounding voices with multiple accents and languages. Clone your own voice for brand consistency.",
    },
    {
      icon: Zap,
      title: "Instant Response",
      description:
        "Sub-second response times ensure smooth, natural conversations that keep customers engaged.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Availability",
      description:
        "Never miss a call. Your AI agent works around the clock, handling unlimited simultaneous conversations.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Automated appointment booking with calendar integration. Syncs with Google Calendar, Outlook, and more.",
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Support",
      description:
        "Handle phone calls, SMS, and web chat from a single platform. Consistent experience across all channels.",
    },
  ];

  const integrationFeatures = [
    {
      icon: Database,
      title: "CRM Sync",
      description:
        "Real-time data sync with Salesforce, HubSpot, Zoho, and 50+ other platforms.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Deep insights into call metrics, customer satisfaction, and AI performance.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share call recordings, notes, and insights with your team. Built-in escalation workflows.",
    },
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Enterprise Security",
      description:
        "SOC 2 Type II certified. End-to-end encryption for all voice data and customer information.",
    },
    {
      icon: Shield,
      title: "GDPR & HIPAA Compliant",
      description:
        "Full compliance with data protection regulations. Secure data storage and processing.",
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description:
        "99.9% uptime guarantee with servers across 6 continents for low-latency worldwide coverage.",
    },
  ];

  const advancedCapabilities = [
    "Custom conversation flows and decision trees",
    "Sentiment analysis and emotion detection",
    "Automatic call summaries and transcription",
    "Multi-language support (30+ languages)",
    "Voice biometrics for caller identification",
    "Smart call routing and escalation",
    "API access for custom integrations",
    "Webhooks for real-time event notifications",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Everything You Need to Succeed</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="text-gradient">Modern Customer Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Orweza combines cutting-edge AI technology with enterprise-grade reliability to
            deliver exceptional voice experiences at scale.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built from the ground up to handle real-world customer conversations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless <span className="text-gradient">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect Orweza with your existing tools and workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} gradient={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade <span className="text-gradient">Security</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your data and your customers' privacy are our top priority
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Unlock powerful features designed for sophisticated use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advancedCapabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-200"
              >
                <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-lg">{capability}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
