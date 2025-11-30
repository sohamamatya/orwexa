"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (err: any) {
      console.error("Error sending email:", err);
      setError(err.message || "Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "What is Orwexa?",
      answer:
        "Orwexa is an AI-powered voice platform that automates inbound and outbound calls. It answers calls, books appointments, follows up with leads, and integrates with your tools — helping businesses convert more calls into customers.",
    },
    {
      question: "Do I need to install anything?",
      answer:
        "No. Orwexa is 100% cloud-based. You can access it securely from any device through your web browser.",
    },
    {
      question: "Can I use Orwexa for Sales Calls?",
      answer:
        "Absolutely. Orwexa is designed to enhance sales efficiency by providing AI agents that engage leads, answer questions, qualify prospects, and book appointments.",
    },
    {
      question: "Can I use Orwexa for my local business?",
      answer:
        "Yes! Orwexa fits any local business that depends on calls, appointments, or leads. From real estate to clinics, salons, and trades, our AI agents handle your calls, bookings, and follow-ups automatically.",
    },
    {
      question: "What are AI Voice Assistants?",
      answer:
        "AI Voice Assistants are smart, natural-sounding agents that answer calls, schedule appointments, follow up with leads, and handle repetitive customer interactions — just like a real receptionist would.",
    },
    {
      question: "Can Orwexa book appointments?",
      answer:
        "Yes. Orwexa integrates with Google Calendar to check availability, schedule meetings, and send confirmations automatically.",
    },
    {
      question: "What's included in the monthly fee?",
      answer:
        "Your subscription covers AI agents, user accounts, features listed in your plan, and all software updates. Call minutes are billed separately at your plan's per-minute rate.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. Every plan includes a 7-day free trial and $10 call credit. You'll get full access to all features during this time.",
    },
    {
      question: "How does call billing work?",
      answer:
        "Orwexa bills calls per 60 seconds based on your plan's rate. On the Starter plan, calls cost $0.39 per minute; on the Pro plan, they cost $0.29 per minute; and on the Enterprise plan, the rate is $0.19 per minute.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes. You can upgrade or downgrade anytime. Changes take effect immediately, and adjustments are prorated automatically.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. There are no long-term contracts (unless you're on a custom enterprise plan). You can cancel your subscription directly from your account dashboard.",
    },
    {
      question: "What is Orwexa's refund policy?",
      answer:
        "Orwexa offers clear and transparent subscription terms:\n\n• No Refund Policy: Orwexa subscriptions are non-refundable. We offer free trials and transparent billing to help you evaluate the platform fully before committing.\n\n• Free Trial & Commitment: Both the Starter and Pro plans include a risk-free 7-day trial. You won't be charged if you cancel your subscription anytime during the trial period.\n\n• Subscription Changes: You can upgrade, downgrade, or cancel your subscription at any time. Changes take immediate effect with prorated adjustments. However, refunds for partial subscription periods are not available.\n\nWe recommend carefully evaluating the platform during your trial to ensure it meets your needs before proceeding with payment.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and ACH transfers for Enterprise customers.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl p-6 md:p-8 shadow-xl border border-gray-700 bg-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Send Us a Message
            </h2>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-300 text-sm">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-700 text-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-700 text-white"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-700 text-white"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-700 text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-gray-700 text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none bg-gray-700 text-white"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Frequently asked
              <span className="block text-gradient mt-1">questions</span>
            </h2>
            <p className="text-base text-gray-400">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 bg-gray-800 border border-gray-700"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <HelpCircle className="w-5 h-5 text-primary-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
