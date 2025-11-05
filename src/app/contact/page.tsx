"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@orweza.ai",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm PST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Market Street, San Francisco, CA 94103",
      description: "By appointment only",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Get instant support",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute inset-0 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-soft rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-primary-400 font-semibold mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-300">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="rounded-3xl p-8 shadow-xl border border-gray-700 bg-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full bg-gradient-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-gradient-soft rounded-3xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-600 last:border-0"
                    >
                      <span className="font-medium text-white">
                        {schedule.day}
                      </span>
                      <span className="text-gray-300">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-3xl p-8 shadow-xl border border-gray-700 bg-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  <a
                    href="/pricing"
                    className="block p-4 bg-gradient-soft rounded-xl hover:shadow-md transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white mb-1">
                      View Pricing
                    </h4>
                    <p className="text-sm text-gray-300">
                      Explore our plans and pricing
                    </p>
                  </a>
                  <a
                    href="/features"
                    className="block p-4 bg-gradient-soft rounded-xl hover:shadow-md transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white mb-1">
                      Browse Features
                    </h4>
                    <p className="text-sm text-gray-300">
                      See what Orweza can do for you
                    </p>
                  </a>
                  <a
                    href="#"
                    className="block p-4 bg-gradient-soft rounded-xl hover:shadow-md transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white mb-1">
                      Help Center
                    </h4>
                    <p className="text-sm text-gray-300">
                      Find answers to common questions
                    </p>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-800 border border-gray-700 rounded-3xl h-64 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-white font-medium">
                    123 Market Street
                  </p>
                  <p className="text-gray-300">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Right Away?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Check out our help center for instant answers to common questions, or chat
            with our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold text-lg hover:bg-primary-600 hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Visit Help Center
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-transparent text-white border-2 border-gray-600 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-200"
            >
              Start Live Chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
