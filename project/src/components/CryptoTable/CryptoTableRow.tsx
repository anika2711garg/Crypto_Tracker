import React, { useMemo } from 'react';
import { CryptoAsset } from '../../types/crypto';
import PriceChange from '../ui/PriceChange';
import PriceChart from './PriceChart';
import { formatCurrency, formatNumber } from '../../utils/formatters';

interface CryptoTableRowProps {
  asset: CryptoAsset;
  isEven: boolean;
}

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ asset, isEven }) => {
  // Determine if 7d trend is positive
  const isPositiveTrend = useMemo(() => 
    asset.priceHistory7d[asset.priceHistory7d.length - 1] >= asset.priceHistory7d[0],
  [asset.priceHistory7d]);

  const rowClass = isEven ? 'bg-gray-800/50' : 'bg-gray-900';

  return (
    <tr className={`${rowClass} border-b border-gray-800 transition-colors hover:bg-gray-800`}>
      <td className="px-4 py-4 text-center">{asset.rank}</td>
      <td className="px-4 py-4">
        <div className="flex items-center">
          <img 
            src={asset.logo} 
            alt={`${asset.name} logo`} 
            className="mr-3 h-6 w-6" 
          />
          <div>
            <div className="font-medium">{asset.name}</div>
            <div className="text-sm text-gray-400">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 font-medium">
        {formatCurrency(asset.currentPrice)}
      </td>
      <td className="px-4 py-4">
        <PriceChange value={asset.priceChange1h} />
      </td>
      <td className="px-4 py-4">
        <PriceChange value={asset.priceChange24h} />
      </td>
      <td className="px-4 py-4">
        <PriceChange value={asset.priceChange7d} />
      </td>
      <td className="px-4 py-4 hidden lg:table-cell">
        {formatCurrency(asset.marketCap)}
      </td>
      <td className="px-4 py-4 hidden md:table-cell">
        {formatCurrency(asset.volume24h)}
      </td>
      <td className="px-4 py-4 hidden lg:table-cell">
        {formatNumber(asset.circulatingSupply)} {asset.symbol}
      </td>
      <td className="px-4 py-4 hidden xl:table-cell">
        {asset.maxSupply ? `${formatNumber(asset.maxSupply)} ${asset.symbol}` : '∞'}
      </td>
      <td className="px-4 py-4 hidden md:table-cell">
        <PriceChart 
          data={asset.priceHistory7d} 
          isPositive={isPositiveTrend}
        />
      </td>
    </tr>
  );
};

export default CryptoTableRow;