import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { formatPercentage } from '../../utils/formatters';

interface PriceChangeProps {
  value: number;
  withIcon?: boolean;
  className?: string;
}

const PriceChange: React.FC<PriceChangeProps> = ({ 
  value, 
  withIcon = true,
  className = '' 
}) => {
  // Determine text color based on value
  const textColor = value > 0 ? 'text-green-500' : value < 0 ? 'text-red-500' : 'text-gray-400';
  
  return (
    <div className={`flex items-center ${textColor} ${className}`}>
      {withIcon && value !== 0 && (
        value > 0 
          ? <ArrowUpRight className="mr-1 h-3 w-3" /> 
          : <ArrowDownRight className="mr-1 h-3 w-3" />
      )}
      <span>{formatPercentage(value)}</span>
    </div>
  );
};

export default PriceChange;