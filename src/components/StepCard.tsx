import { LucideIcon } from "lucide-react";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function StepCard({ number, icon: Icon, title, description }: StepCardProps) {
  return (
    <div className="relative group">
      {/* Step Number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg z-10">
        <span className="text-white font-bold text-lg">{number}</span>
      </div>

      {/* Card */}
      <div
        className="p-8 pt-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full"
        style={{backgroundColor: '#524f4f', border: '1px solid rgba(255, 255, 255, 0.1)'}}
      >
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
          style={{background: 'linear-gradient(135deg, rgba(59, 126, 246, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)'}}
        >
          <Icon className="w-7 h-7 text-primary-400" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
