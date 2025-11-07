"use client";

import { FileText, Shield, Mail } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: 'rgb(17 24 39)'}}>
        <div className="absolute inset-0 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            <span>Legal Information</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms & <span className="text-gradient">Conditions</span>
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
              <h2 className="text-3xl font-bold text-white mb-4">1. Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Orwexa ("we," "our," "us"). By accessing or using Orwexa's website,
                software, and services (collectively, the "Platform"), you agree to these Terms and
                Conditions. If you do not agree, please discontinue use of the Platform immediately.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">2. Use of the Platform</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may use Orwexa only for lawful business purposes. You are responsible for
                maintaining the confidentiality of your login credentials and for all activities
                under your account. Any misuse, such as spam, fraudulent calling, or violating
                voice compliance regulations, may lead to suspension or termination.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">3. Subscription & Billing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Orwexa operates on a subscription basis. All plans are billed monthly or annually,
                depending on your selection.
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="leading-relaxed">
                  • Calls are billed per 60 seconds based on your plan's rate.
                </li>
                <li className="leading-relaxed">
                  • Subscription fees are non-refundable, as detailed in our Refund Policy.
                </li>
                <li className="leading-relaxed">
                  • Upgrades, downgrades, and cancellations can be managed directly from your account dashboard.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                You authorize Orwexa to charge your payment method for recurring fees and any
                additional call usage. You can cancel anytime before the next billing cycle to
                avoid renewal.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">4. Free Trials</h2>
              <p className="text-gray-300 leading-relaxed">
                We offer a 7-day free trial with $10 call credit. You will not be charged during
                the trial period. If you continue using the Platform after the trial ends, regular
                subscription billing begins automatically.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">5. Fair Use Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                To maintain platform quality, we may impose limits on excessive usage or abuse
                (e.g., automated testing, spam calls, or fraudulent behavior). Accounts violating
                these limits may be reviewed or restricted without prior notice.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All Orwexa trademarks, software, content, and AI voice technology remain the
                exclusive property of Orwexa Pty Ltd. You may not copy, modify, or redistribute
                any part of the service without written consent.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">7. Integrations & Third-Party Tools</h2>
              <p className="text-gray-300 leading-relaxed">
                Orwexa may integrate with third-party providers (e.g., Twilio, Telynx, SendGrid,
                Zapier). By enabling these integrations, you agree to their respective terms.
                Orwexa is not responsible for downtime or errors caused by external providers.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                Orwexa provides its services "as is" and makes no warranty of uninterrupted
                operation. In no event shall Orwexa or its affiliates be liable for indirect,
                incidental, or consequential damages arising from the use of the Platform.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">9. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                You may cancel your account at any time. Orwexa reserves the right to suspend or
                terminate accounts that breach these Terms or violate any applicable laws.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">10. Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. Continued use of the Platform after
                changes constitutes acceptance of the revised Terms.
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
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions or concerns about these Terms & Conditions,
              please don't hesitate to contact us.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
