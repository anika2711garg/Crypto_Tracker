import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { sortAssets } from '../../features/crypto/cryptoSlice';
import CryptoTableRow from './CryptoTableRow';
import { ArrowDownUp } from 'lucide-react';
import { CryptoAsset } from '../../types/crypto';

type SortDirection = 'asc' | 'desc';
type SortKey = keyof CryptoAsset;

interface SortState {
  key: SortKey;
  direction: SortDirection;
}

const CryptoTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { assets } = useAppSelector(state => state.crypto);
  
  const [sortState, setSortState] = useState<SortState>({
    key: 'rank',
    direction: 'asc'
  });

  // Handle sorting
  const handleSort = (key: SortKey) => {
    const direction = 
      sortState.key === key && sortState.direction === 'asc' ? 'desc' : 'asc';
    
    setSortState({ key, direction });
    dispatch(sortAssets({ key, direction }));
  };
  
  // Get sort indicator
  const getSortIndicator = (key: SortKey) => {
    if (sortState.key !== key) return null;
    
    return (
      <span className="ml-1 inline-block">
        {sortState.direction === 'asc' ? '↑' : '↓'}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-800 bg-gray-900 shadow-lg">
      <table className="min-w-full divide-y divide-gray-800">
        <thead className="bg-gray-800">
          <tr>
            <th 
              className="px-4 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('rank')}
            >
              # {getSortIndicator('rank')}
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center">
                Name {getSortIndicator('name')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('currentPrice')}
            >
              <div className="flex items-center">
                Price {getSortIndicator('currentPrice')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('priceChange1h')}
            >
              <div className="flex items-center">
                1h % {getSortIndicator('priceChange1h')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('priceChange24h')}
            >
              <div className="flex items-center">
                24h % {getSortIndicator('priceChange24h')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('priceChange7d')}
            >
              <div className="flex items-center">
                7d % {getSortIndicator('priceChange7d')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:table-cell cursor-pointer"
              onClick={() => handleSort('marketCap')}
            >
              <div className="flex items-center">
                Market Cap {getSortIndicator('marketCap')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell cursor-pointer"
              onClick={() => handleSort('volume24h')}
            >
              <div className="flex items-center">
                Volume (24h) {getSortIndicator('volume24h')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:table-cell"
            >
              Circulating Supply
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden xl:table-cell"
            >
              Max Supply
            </th>
            <th 
              className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell"
            >
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <CryptoTableRow 
              key={asset.id} 
              asset={asset} 
              isEven={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;