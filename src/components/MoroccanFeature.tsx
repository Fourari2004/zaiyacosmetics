import React from 'react';

interface MoroccanFeatureProps {
  title: string;
  description: string;
  icon?: string;
}

export const MoroccanFeature: React.FC<MoroccanFeatureProps> = ({ 
  title, 
  description,
  icon 
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-[#f9f7f0] rounded-xl shadow-sm border border-[#e6e0d4]">
      {/* Icon container - brown circle with green star */}
      <div className="w-16 h-16 rounded-full bg-[#5D4037] flex items-center justify-center mb-4">
        {icon ? (
          <span className="text-2xl">{icon}</span>
        ) : (
          // SVG for a 5-pointed star similar to the Moroccan flag star
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="#4CAF50"
          >
            <path d="M12 2L14.09 8.26L20 8.71L15.5 12.94L17.11 19.29L12 15.75L6.89 19.29L8.5 12.94L4 8.71L9.91 8.26L12 2Z" />
          </svg>
        )}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      
      {/* Description */}
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};