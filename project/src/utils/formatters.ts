// Format large numbers to compact notation (e.g., 1.2B, 45.3M)
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: value > 1_000_000 ? 'compact' : 'standard',
    maximumFractionDigits: value > 1 ? 2 : 6,
  }).format(value);
};

// Format large numbers (e.g., market cap, volume)
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value);
};

// Format percentage change with sign and 2 decimal places
export const formatPercentage = (value: number): string => {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
};

// Determine CSS class based on percentage value
export const getPriceChangeClass = (value: number): string => {
  if (value > 0) return 'text-green-500';
  if (value < 0) return 'text-red-500';
  return 'text-gray-400';
};