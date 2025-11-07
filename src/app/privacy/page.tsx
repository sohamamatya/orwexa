"use client";

import { Shield, Lock, Mail, Eye } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute inset-0 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Your Privacy Matters</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Last updated: November 2024
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 space-y-10">

            {/* Section 1 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                At Orwexa ("we," "our," "us"), we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your data when you use our AI voice
                platform and services (the "Platform"). By using Orwexa, you consent to the
                practices described in this policy.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect several types of information to provide and improve our services:
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Personal Information</h3>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="leading-relaxed">
                  • Account details (name, email address, phone number, company name)
                </li>
                <li className="leading-relaxed">
                  • Billing information (payment method, billing address)
                </li>
                <li className="leading-relaxed">
                  • Login credentials and authentication data
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Call and Communication Data</h3>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="leading-relaxed">
                  • Call recordings and transcripts
                </li>
                <li className="leading-relaxed">
                  • Phone numbers (inbound and outbound)
                </li>
                <li className="leading-relaxed">
                  • Call duration, timestamps, and metadata
                </li>
                <li className="leading-relaxed">
                  • SMS and WhatsApp message content
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Usage Data</h3>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="leading-relaxed">
                  • Platform activity (features used, settings configured)
                </li>
                <li className="leading-relaxed">
                  • Device information (IP address, browser type, operating system)
                </li>
                <li className="leading-relaxed">
                  • Analytics data (usage patterns, performance metrics)
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="leading-relaxed">
                  • To provide and maintain our AI voice services
                </li>
                <li className="leading-relaxed">
                  • To process payments and manage subscriptions
                </li>
                <li className="leading-relaxed">
                  • To improve our AI models and platform performance
                </li>
                <li className="leading-relaxed">
                  • To send service notifications, updates, and support messages
                </li>
                <li className="leading-relaxed">
                  • To analyze usage patterns and optimize features
                </li>
                <li className="leading-relaxed">
                  • To ensure compliance with legal obligations
                </li>
                <li className="leading-relaxed">
                  • To prevent fraud, abuse, and security incidents
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. Data Storage and Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="leading-relaxed">
                  • Encryption in transit (TLS/SSL) and at rest
                </li>
                <li className="leading-relaxed">
                  • Secure cloud infrastructure with regular backups
                </li>
                <li className="leading-relaxed">
                  • Access controls and authentication protocols
                </li>
                <li className="leading-relaxed">
                  • Regular security audits and vulnerability assessments
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission over the
                internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Orwexa integrates with third-party services to deliver our platform. These
                providers may have access to your data as necessary to perform their functions:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="leading-relaxed">
                  • <strong>Telephony providers</strong> (Twilio, Telynx) for call handling
                </li>
                <li className="leading-relaxed">
                  • <strong>Payment processors</strong> (Stripe, PayPal) for billing
                </li>
                <li className="leading-relaxed">
                  • <strong>Email services</strong> (SendGrid) for communications
                </li>
                <li className="leading-relaxed">
                  • <strong>Analytics tools</strong> for usage insights
                </li>
                <li className="leading-relaxed">
                  • <strong>Cloud hosting</strong> (AWS, Google Cloud) for infrastructure
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We ensure that all third-party providers comply with applicable data protection
                regulations and maintain appropriate security standards.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="leading-relaxed">
                  • Maintain your session and remember your preferences
                </li>
                <li className="leading-relaxed">
                  • Analyze platform usage and improve performance
                </li>
                <li className="leading-relaxed">
                  • Provide personalized features and content
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                You can control cookie settings through your browser. However, disabling cookies
                may affect your ability to use certain features of the Platform.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="leading-relaxed">
                  • <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li className="leading-relaxed">
                  • <strong>Correction:</strong> Update inaccurate or incomplete information
                </li>
                <li className="leading-relaxed">
                  • <strong>Deletion:</strong> Request deletion of your personal data
                </li>
                <li className="leading-relaxed">
                  • <strong>Portability:</strong> Receive your data in a structured format
                </li>
                <li className="leading-relaxed">
                  • <strong>Opt-out:</strong> Unsubscribe from marketing communications
                </li>
                <li className="leading-relaxed">
                  • <strong>Restriction:</strong> Limit how we process your data
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:support@orwexa.com" className="text-primary-400 hover:text-primary-300">
                  support@orwexa.com
                </a>
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">8. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your data for as long as necessary to provide our services and comply
                with legal obligations. Call recordings and transcripts are typically stored for
                up to 12 months unless otherwise specified in your plan. You can request earlier
                deletion by contacting support.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">9. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Orwexa operates globally and may transfer your data to countries outside your
                jurisdiction. We ensure that adequate safeguards are in place to protect your
                information in compliance with applicable data protection laws, including GDPR
                and other international standards.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Orwexa is not intended for use by individuals under the age of 18. We do not
                knowingly collect personal information from children. If you believe we have
                inadvertently collected data from a child, please contact us immediately.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or legal requirements. We will notify you of significant changes via
                email or through the Platform. Your continued use after such changes constitutes
                acceptance of the updated policy.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">12. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="bg-gray-700 rounded-lg p-6 mt-4">
                <p className="text-white font-semibold mb-2">Orwexa Pty Ltd</p>
                <p className="text-gray-300">
                  Email:{" "}
                  <a href="mailto:support@orwexa.com" className="text-primary-400 hover:text-primary-300">
                    support@orwexa.com
                  </a>
                </p>
                <p className="text-gray-300 mt-2">
                  For data protection inquiries:{" "}
                  <a href="mailto:privacy@orwexa.com" className="text-primary-400 hover:text-primary-300">
                    privacy@orwexa.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-soft rounded-2xl p-6 text-center border border-gray-700">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Secure by Design</h3>
              <p className="text-sm text-gray-300">
                Enterprise-grade encryption and security protocols
              </p>
            </div>

            <div className="bg-gradient-soft rounded-2xl p-6 text-center border border-gray-700">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GDPR Compliant</h3>
              <p className="text-sm text-gray-300">
                Full compliance with international data protection standards
              </p>
            </div>

            <div className="bg-gradient-soft rounded-2xl p-6 text-center border border-gray-700">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transparent</h3>
              <p className="text-sm text-gray-300">
                Clear policies and full control over your data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-soft rounded-3xl p-8 md:p-12 text-center border border-gray-700">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help. Contact our privacy team for any questions
              or concerns about how we handle your data.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
