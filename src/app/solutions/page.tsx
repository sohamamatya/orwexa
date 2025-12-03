"use client";

import Link from "next/link";
import {
  Building2,
  Stethoscope,
  User,
  Briefcase,
  Wrench,
  Globe,
  Languages,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";

export default function SolutionsPage() {

  const solutions = [
    {
      icon: Building2,
      title: "Real Estate",
      description:
        "Turn missed calls into closed deals. Orwexa answers property inquiries, follows up on leads, and schedules viewings automatically.",
      highlights: [
        "Handles buyer, seller, and rental inquiries",
        "Follows up on open-house leads",
        "Schedules inspections and appraisals",
        "Syncs with your CRM and calendar",
      ],
      color: "blue",
    },
    {
      icon: Stethoscope,
      title: "Clinics & Healthcare",
      description:
        "No more missed patient calls or long wait times. Orwexa books, reschedules, and confirms appointments 24/7.",
      highlights: [
        "Intake for new and existing patients",
        "Appointment confirmations and reminders",
        "Supports multilingual callers",
        "HIPAA-compliant call handling",
      ],
      color: "green",
    },
    {
      icon: User,
      title: "Freelancers & Solopreneurs",
      description:
        "Let your AI answer, qualify, and book clients while you work. Perfect for consultants, coaches, and small business owners.",
      highlights: [
        "Handles inquiries and lead capture",
        "Schedules meetings automatically",
        "Sends call summaries and confirmations",
        "Works across any timezone",
      ],
      color: "purple",
    },
    {
      icon: Briefcase,
      title: "Agencies",
      description:
        "For teams that rely on outreach, demos, and follow-ups. Orwexa helps you book more calls, onboard faster, and scale without hiring more staff.",
      highlights: [
        "Outbound lead-gen follow-ups and demo scheduling",
        "Inbound handling for client inquiries and job applicants",
        "CRM and pipeline integration",
        "Call summaries and performance analytics",
      ],
      color: "orange",
      subtitle: "(Marketing, SMMA, Recruitment, Education Consulting)",
    },
    {
      icon: Wrench,
      title: "Service Businesses",
      description:
        "For operations where every call is a sale or service request. Orwexa handles inbound and outbound communication so you can focus on delivery.",
      highlights: [
        "Inbound answering and job qualification",
        "Outbound quote follow-ups",
        "Real-time booking sync",
        "Multi-user and multi-location support",
      ],
      color: "red",
    },
  ];

  const globalFeatures = [
    {
      icon: Languages,
      title: "Multilingual voice support",
      description: "Communicate in your customer's native language",
    },
    {
      icon: Globe,
      title: "Natural accents",
      description: "US, UK, AU, Asian, European voices available",
    },
    {
      icon: Clock,
      title: "Time-zone-aware",
      description: "Smart scheduling across all timezones",
    },
    {
      icon: Shield,
      title: "Global hosting",
      description: "99.9% uptime with worldwide reliability",
    },
  ];

  const stats = [
    { value: "38%", label: "more booked appointments" },
    { value: "60%", label: "faster lead response time" },
    { value: "80%", label: "fewer missed calls" },
  ];


  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Built for every business that <span className="text-gradient">runs on conversations.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
            From real estate and clinics to marketing agencies and recruitment firms — Orwexa makes
            sure every call is answered, every lead followed up, and every opportunity booked.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://app.orwexa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Login</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/pricing"
              className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold text-sm hover:bg-gray-700 border-2 border-gray-600 transition-all duration-200 flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INDUSTRY SOLUTIONS GRID */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Solutions that fit <span className="text-gradient">the way you work.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-primary-500 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {solution.title}
                  </h3>

                  {solution.subtitle && (
                    <p className="text-xs text-gray-400 mb-3">{solution.subtitle}</p>
                  )}

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mt-auto">
                    <p className="text-xs font-semibold text-primary-400 mb-2">
                      Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {solution.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — GLOBAL ADVANTAGE */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Voices that fit <span className="text-gradient">your market.</span>
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Orwexa speaks your customer's language — literally. With multiple voices, accents,
              and time-zone scheduling, your business sounds local anywhere in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-soft rounded-xl p-4 border border-gray-700 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — RESULTS */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              What our <span className="text-gradient">users see.</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-primary rounded-xl p-4 text-center"
              >
                <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <p className="text-white font-medium text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="py-8 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let Orwexa handle the calls. <span className="text-gradient">You handle the results.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            Start your 7-day free trial, get $10 free credit, and let Orwexa answer, follow up,
            and book clients for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://app.orwexa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Login
            </a>
            <Link
              href="/pricing"
              className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold text-sm hover:bg-gray-700 border-2 border-gray-600 transition-all duration-200 flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
