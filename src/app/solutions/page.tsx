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

  const testimonials = [
    {
      quote: "Every lead gets a call back — day or night.",
      author: "Sofia",
      role: "Recruiter",
      initial: "S",
    },
    {
      quote: "Our agency's demo bookings doubled in two weeks.",
      author: "Ben",
      role: "Marketing Director",
      initial: "B",
    },
    {
      quote: "My education consultancy finally runs follow-ups automatically.",
      author: "Priya",
      role: "EduConsult Founder",
      initial: "P",
    },
  ];

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute inset-0 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Built for every business that <span className="text-gradient">runs on conversations.</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            From real estate and clinics to marketing agencies and recruitment firms — Orwexa makes
            sure every call is answered, every lead followed up, and every opportunity booked.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.orwexa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Login</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 border-2 border-gray-600 transition-all duration-200 flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INDUSTRY SOLUTIONS GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solutions that fit <span className="text-gradient">the way you work.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {solution.title}
                  </h3>

                  {solution.subtitle && (
                    <p className="text-sm text-gray-400 mb-4">{solution.subtitle}</p>
                  )}

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-primary-400 mb-3">
                      Highlights:
                    </p>
                    <ul className="space-y-2">
                      {solution.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{highlight}</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Voices that fit <span className="text-gradient">your market.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Orwexa speaks your customer's language — literally. With multiple voices, accents,
              and time-zone scheduling, your business sounds local anywhere in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-soft rounded-2xl p-6 border border-gray-700 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — RESULTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What our <span className="text-gradient">users see.</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-primary rounded-2xl p-8 text-center"
              >
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                  <div className="text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <p className="text-white font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let Orwexa handle the calls. <span className="text-gradient">You handle the results.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your 7-day free trial, get $10 free credit, and let Orwexa answer, follow up,
            and book clients for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.orwexa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Login
            </a>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 border-2 border-gray-600 transition-all duration-200 flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
