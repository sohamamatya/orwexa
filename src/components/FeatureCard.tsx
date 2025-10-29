import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

export default function FeatureCard({ icon: Icon, title, description, gradient = false }: FeatureCardProps) {
  return (
    <div
      className="group relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      style={{backgroundColor: '#524f4f', border: '1px solid rgba(255, 255, 255, 0.1)'}}
    >
      {/* Icon */}
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
        gradient
          ? 'bg-gradient-primary'
          : ''
      } group-hover:scale-110 transition-transform duration-300`}
      style={!gradient ? {background: 'linear-gradient(135deg, rgba(59, 126, 246, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)'} : {}}
      >
        <Icon className={`w-8 h-8 ${gradient ? 'text-white' : 'text-primary-400'}`} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
