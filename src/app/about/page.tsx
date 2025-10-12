"use client";

import { useState } from "react";
import {
  Target,
  Lightbulb,
  Heart,
  Award,
  Users,
  Globe,
  TrendingUp,
  Zap,
} from "lucide-react";
import BookDemoModal from "@/components/BookDemoModal";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: TrendingUp, value: "5M+", label: "Calls Handled" },
    { icon: Award, value: "99.9%", label: "Uptime" },
  ];

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
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former VP of AI at Google. PhD in Machine Learning from Stanford.",
      image: "SC",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-founder",
      bio: "Ex-Amazon Alexa team. 15+ years in voice technology and NLP.",
      image: "MR",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      bio: "Previously led product at Twilio. Passionate about customer experience.",
      image: "EW",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Built voice systems at Apple. MIT Computer Science graduate.",
      image: "DK",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: "Founded",
      description: "Orweza was born from a vision to make AI voice technology accessible to everyone.",
    },
    {
      year: "2022",
      title: "Series A",
      description: "Raised $15M to build the best AI voice platform on the market.",
    },
    {
      year: "2023",
      title: "10K Customers",
      description: "Reached a major milestone serving businesses across 50+ countries.",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Named #1 AI Voice Platform by G2 and TrustRadius.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the Future of{" "}
            <span className="text-gradient">Voice AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're on a mission to make every customer conversation exceptional through
            intelligent, empathetic AI voice technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-soft rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Orweza was founded in 2021 by a team of AI researchers and entrepreneurs who
                saw a fundamental problem: businesses were struggling to handle growing
                call volumes while maintaining quality customer service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believed AI could help, but existing solutions felt robotic and
                frustrating. So we set out to build something different—voice agents that
                sound natural, understand context, and actually solve problems.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Today, Orweza powers millions of conversations for thousands of businesses
                worldwide. From small startups to Fortune 500 companies, our AI voice
                agents help organizations deliver exceptional customer experiences at scale.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're just getting started. Our vision is a world where every business can
                provide instant, intelligent, and empathetic service to every customer,
                every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders passionate about AI and customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-6">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-shadow">
                    <span className="text-white font-bold text-3xl">
                      {member.image}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-primary-600 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
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
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get Started with Orweza
            </button>
            <a
              href="#"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
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
