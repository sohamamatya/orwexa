import Link from "next/link";

export default function Footer() {
  const navigationLinks = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <footer style={{backgroundColor: '#12141d', borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-gray-300 text-lg font-medium">
            Orwexa — Smarter conversations. More booked work.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
          {navigationLinks.map((link, index) => (
            <span key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
              {index < navigationLinks.length - 1 && (
                <span className="text-gray-600 mx-3">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Copyright and Email */}
        <div className="text-center space-y-2">
          <p className="text-gray-400 text-sm">
            © 2025 Orwexa. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            <a
              href="mailto:support@orwexa.com"
              className="hover:text-white transition-colors"
            >
              support@orwexa.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
