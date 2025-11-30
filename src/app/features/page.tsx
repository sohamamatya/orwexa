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
  Sparkles,
  Shield,
  Settings,
  Bell,
  FileText,
} from "lucide-react";

export default function FeaturesPage() {

  const mainFeatures = [
    {
      icon: PhoneIncoming,
      title: "24/7 Inbound Reception",
      description: "Never miss another call. Your AI receptionist answers instantly, qualifies leads, and books appointments automatically.",
      color: "primary",
      features: [
        "Instant pickup under 2 seconds",
        "Smart lead qualification",
        "Direct calendar booking",
        "Call recording & transcripts",
        "Multi-channel confirmations",
      ],
    },
    {
      icon: PhoneOutgoing,
      title: "Outbound Follow-Up",
      description: "Automatically call back missed leads, follow up on quotes, and re-engage dormant customers.",
      color: "accent",
      features: [
        "Auto callbacks for missed calls",
        "Batch campaign management",
        "Quote follow-up automation",
        "Lead reactivation campaigns",
        "Booking reminder calls",
      ],
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Sync with your calendar, set availability rules, and let AI handle all the booking logistics.",
      color: "blue",
      features: [
        "Google Calendar & Outlook sync",
        "Real-time availability checking",
        "Auto-confirmations",
        "Smart reminders",
        "Multi-calendar support",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track every call, measure conversion rates, and optimize your sales process with detailed analytics.",
      color: "indigo",
      features: [
        "Live KPI dashboard",
        "Call recordings & transcripts",
        "Conversion rate tracking",
        "Export to CSV/CRM",
        "Agent-level analytics",
      ],
    },
    {
      icon: Mic,
      title: "AI Voice Agents",
      description: "Choose from natural voices, accents, and tones powered by ElevenLabs. Set how your AI speaks.",
      color: "purple",
      features: [
        "Multiple voice options",
        "Adjustable personality",
        "Brand-specific training",
        "Multilingual support",
        "Natural accents",
      ],
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Upload your FAQs, services, and internal guides. The AI learns from your content and uses it naturally.",
      color: "yellow",
      features: [
        "Custom content library",
        "Instant updates",
        "Multi-language support",
        "Context-aware answers",
        "FAQ management",
      ],
    },
    {
      icon: Target,
      title: "Campaign Manager",
      description: "Build and launch call campaigns that feel personal. Schedule calls, trigger follow-ups, and monitor results.",
      color: "pink",
      features: [
        "Outbound call sequences",
        "Multi-channel campaigns",
        "Conversion tracking",
        "Schedule & retry control",
        "Time zone awareness",
      ],
    },
    {
      icon: MessageSquare,
      title: "Messaging Automation",
      description: "Send SMS, WhatsApp confirmations, and follow-ups automatically after calls.",
      color: "teal",
      features: [
        "SMS & WhatsApp support",
        "Automated reminders",
        "Thank-you messages",
        "Two-way messaging",
        "Review requests",
      ],
    },
    {
      icon: Database,
      title: "Integrations",
      description: "Connect with your existing tools. Orwexa fits into your workflow seamlessly.",
      color: "orange",
      features: [
        "Google & Outlook calendars",
        "CRM platforms (HubSpot, Pipedrive)",
        "Zapier & webhooks",
        "Twilio / Telynx connection",
        "API access",
      ],
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Invite teammates, assign agents, and monitor performance across your team.",
      color: "green",
      features: [
        "Role-based access control",
        "Team usage tracking",
        "Agent-level analytics",
        "Shared calendars",
        "Call log sharing",
      ],
    },
  ];

  const quickStats = [
    { label: "Answer Rate", value: "96%", icon: Phone },
    { label: "Always On", value: "24/7", icon: Clock },
    { label: "Response Time", value: "<30s", icon: Zap },
    { label: "Calendar Synced", value: "100%", icon: Calendar },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[40vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto w-full text-center py-8">
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-3 py-1 mb-4">
            <Sparkles className="w-3 h-3 text-primary-400" />
            <span className="text-xs font-medium text-primary-300">Complete AI Call Platform</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Features built for
            <span className="block text-gradient mt-1">real businesses</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Everything you need to answer calls, follow up leads, and book customers automatically — all in one powerful platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link
              href="/pricing"
              className="group px-6 py-3 bg-gradient-primary text-white rounded-xl font-bold text-sm hover:shadow-glow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
            <a
              href="https://app.orwexa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl font-bold text-sm hover:bg-gray-700/50 border-2 border-gray-600/50 transition-all duration-300 flex items-center justify-center"
            >
              Sign In
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 text-center">
                  <Icon className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN FEATURES GRID */}
      <section className="py-8 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Everything you need to <span className="text-gradient">grow your business</span>
              </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to automate your call handling and boost conversions
              </p>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses: Record<string, string> = {
                primary: "from-primary-500/10 to-primary-500/5 border-primary-500/20 hover:border-primary-500/50",
                accent: "from-accent-500/10 to-accent-500/5 border-accent-500/20 hover:border-accent-500/50",
                blue: "from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:border-blue-500/50",
                indigo: "from-indigo-500/10 to-indigo-500/5 border-indigo-500/20 hover:border-indigo-500/50",
                purple: "from-purple-500/10 to-purple-500/5 border-purple-500/20 hover:border-purple-500/50",
                yellow: "from-yellow-500/10 to-yellow-500/5 border-yellow-500/20 hover:border-yellow-500/50",
                pink: "from-pink-500/10 to-pink-500/5 border-pink-500/20 hover:border-pink-500/50",
                teal: "from-teal-500/10 to-teal-500/5 border-teal-500/20 hover:border-teal-500/50",
                orange: "from-orange-500/10 to-orange-500/5 border-orange-500/20 hover:border-orange-500/50",
                green: "from-green-500/10 to-green-500/5 border-green-500/20 hover:border-green-500/50",
              };

              const iconColorClasses: Record<string, string> = {
                primary: "bg-primary-500/20 text-primary-400",
                accent: "bg-accent-500/20 text-accent-400",
                blue: "bg-blue-500/20 text-blue-400",
                indigo: "bg-indigo-500/20 text-indigo-400",
                purple: "bg-purple-500/20 text-purple-400",
                yellow: "bg-yellow-500/20 text-yellow-400",
                pink: "bg-pink-500/20 text-pink-400",
                teal: "bg-teal-500/20 text-teal-400",
                orange: "bg-orange-500/20 text-orange-400",
                green: "bg-green-500/20 text-green-400",
              };

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses[feature.color]} rounded-xl p-5 border transition-all duration-300 hover:shadow-orweza group`}
                >
                  <div className={`w-12 h-12 ${iconColorClasses[feature.color]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
            </div>

                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-xs">{item}</span>
                </li>
                    ))}
              </ul>
            </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="py-8 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Bank-level encryption, HIPAA compliance, and secure data handling for your peace of mind.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-accent-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Answer calls in under 2 seconds. No delays, no missed opportunities, just instant responses.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Support multiple languages, time zones, and regions. Your AI speaks your customer's language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 border border-gray-700 shadow-orweza-lg">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to transform your
                <span className="block text-gradient mt-1">call handling?</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Join 10+ businesses using Orwexa to answer every call, follow up every lead, and book more appointments automatically.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <Link
                  href="/pricing"
                  className="group px-8 py-3 bg-gradient-primary text-white rounded-xl font-bold text-sm hover:shadow-glow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
                <a
                  href="https://app.orwexa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-xl font-bold text-sm hover:bg-gray-700/50 border-2 border-gray-600/50 transition-all duration-300 flex items-center justify-center"
                >
                  Sign In
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-1.5 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-xs">14 days Free trial</span>
                </div>
                <div className="flex items-center space-x-1.5 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-xs">Free $10 credit</span>
                </div>
                <div className="flex items-center space-x-1.5 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-xs">Setup in 15 minutes</span>
                </div>
                <div className="flex items-center space-x-1.5 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-xs">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
