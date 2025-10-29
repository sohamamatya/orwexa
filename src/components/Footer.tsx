import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Twitter, Linkedin, Github, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Demo", href: "/contact" },
      { label: "API Documentation", href: "#" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
    Resources: [
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Tutorials", href: "#" },
      { label: "Case Studies", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer style={{backgroundColor: '#12141d', borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative w-24 h-12">
                <Image
                  src="/logo.png"
                  alt="Orweza Logo"
                  fill
                  className="object-contain"
                  style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))' }}
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-xs">
              Your AI Voice Agent for Every Customer Call. Automate phone calls and elevate customer experience.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">hello@orweza.ai</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)'}} className="my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Orweza AI. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  style={{backgroundColor: '#524f4f', border: '1px solid rgba(255, 255, 255, 0.1)'}}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
