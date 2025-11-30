import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  callCost?: string;
  billing?: string;
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
  callCost,
  billing,
  description,
  features,
  popular = false,
  cta,
  ctaLink,
}: PricingCardProps) {
  return (
    <div
      className={`relative p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
        popular ? 'scale-105' : ''
      }`}
      style={{
        backgroundColor: '#524f4f',
        border: popular ? '2px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-primary text-white px-3 py-0.5 rounded-full text-xs font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-1.5">{title}</h3>
        <p className="text-gray-400 text-xs mb-3">{description}</p>
        <div className="flex items-baseline justify-center mb-2">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== "Custom" && period && (
            <span className="text-gray-400 ml-1.5 text-sm">{period}</span>
          )}
        </div>
        {callCost && (
          <div className="space-y-0.5">
            <div className="text-primary-400 font-semibold text-sm">{callCost}</div>
            {billing && (
              <div className="text-xs text-gray-500">{billing}</div>
            )}
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-3.5 h-3.5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      {ctaLink.startsWith('http') ? (
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-2.5 px-5 rounded-lg font-semibold text-sm text-center transition-all duration-200 ${
            popular
              ? 'bg-gradient-primary hover:shadow-lg hover:scale-105'
              : 'hover:bg-opacity-80'
          }`}
          style={popular ? {color: '#ffffff'} : {backgroundColor: '#625f5f', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)'}}
        >
          {cta}
        </a>
      ) : (
        <Link
          href={ctaLink}
          className={`block w-full py-2.5 px-5 rounded-lg font-semibold text-sm text-center transition-all duration-200 ${
            popular
              ? 'bg-gradient-primary hover:shadow-lg hover:scale-105'
              : 'hover:bg-opacity-80'
          }`}
          style={popular ? {color: '#ffffff'} : {backgroundColor: '#625f5f', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.1)'}}
        >
          {cta}
        </Link>
      )}
    </div>
  );
}
