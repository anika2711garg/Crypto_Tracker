import React from 'react';
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts';

interface PriceChartProps {
  data: number[];
  isPositive: boolean;
}

const PriceChart: React.FC<PriceChartProps> = ({ data, isPositive }) => {
  // Format data for Recharts
  const chartData = data.map((price, index) => ({
    day: index,
    value: price,
  }));

  // Determine chart color based on trend
  const chartColor = isPositive ? '#10B981' : '#EF4444';

  return (
    <div className="h-12 w-48">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${isPositive ? 'up' : 'down'}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis domain={['dataMin', 'dataMax']} hide />
          <Area
            type="monotone"
            dataKey="value"
            stroke={chartColor}
            fillOpacity={1}
            fill={`url(#gradient-${isPositive ? 'up' : 'down'})`}
            strokeWidth={1.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;