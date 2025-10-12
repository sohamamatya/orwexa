import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

export default function FeatureCard({ icon: Icon, title, description, gradient = false }: FeatureCardProps) {
  return (
    <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Icon */}
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
        gradient
          ? 'bg-gradient-primary'
          : 'bg-gradient-to-br from-primary-100 to-accent-100'
      } group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-8 h-8 ${gradient ? 'text-white' : 'text-primary-600'}`} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
