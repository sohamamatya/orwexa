import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

export default function PricingCard({
  title,
  price,
  period = "/month",
  description,
  features,
  popular = false,
  cta,
  ctaLink,
}: PricingCardProps) {
  return (
    <div
      className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
        popular ? 'scale-105' : ''
      }`}
      style={{
        backgroundColor: '#524f4f',
        border: popular ? '2px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-white">{price}</span>
          {price !== "Custom" && (
            <span className="text-gray-400 ml-2">{period}</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href={ctaLink}
        className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
          popular
            ? 'bg-gradient-primary hover:shadow-lg hover:scale-105'
            : 'hover:bg-opacity-80'
        }`}
        style={popular ? {color: '#ffffff'} : {backgroundColor: '#625f5f', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)'}}
      >
        {cta}
      </Link>
    </div>
  );
}
