import { CryptoAsset } from '../types/crypto';

// Generate random price history data for 7 days
const generatePriceHistory = (basePrice: number): number[] => {
  return Array.from({ length: 7 }, () => {
    const deviation = (Math.random() * 0.2) - 0.1; // -10% to +10% deviation
    return basePrice * (1 + deviation);
  });
};

export const initialCryptoData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    currentPrice: 60142.23,
    priceChange1h: 0.53,
    priceChange24h: -1.32,
    priceChange7d: 4.37,
    marketCap: 1172898276944,
    volume24h: 34578923465,
    circulatingSupply: 19500000,
    maxSupply: 21000000,
    priceHistory7d: generatePriceHistory(60000),
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    currentPrice: 3289.45,
    priceChange1h: -0.23,
    priceChange24h: 2.54,
    priceChange7d: -1.16,
    marketCap: 394753092340,
    volume24h: 21345687432,
    circulatingSupply: 120000000,
    maxSupply: null,
    priceHistory7d: generatePriceHistory(3300),
  },
  {
    id: 'tether',
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    logo: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
    currentPrice: 1.00,
    priceChange1h: 0.01,
    priceChange24h: 0.02,
    priceChange7d: -0.01,
    marketCap: 96438762453,
    volume24h: 56743287654,
    circulatingSupply: 96438762453,
    maxSupply: null,
    priceHistory7d: generatePriceHistory(1),
  },
  {
    id: 'bnb',
    rank: 4,
    name: 'BNB',
    symbol: 'BNB',
    logo: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
    currentPrice: 562.78,
    priceChange1h: 1.45,
    priceChange24h: 0.89,
    priceChange7d: 3.45,
    marketCap: 86876543210,
    volume24h: 2345678901,
    circulatingSupply: 154532876,
    maxSupply: 200000000,
    priceHistory7d: generatePriceHistory(560),
  },
  {
    id: 'solana',
    rank: 5,
    name: 'Solana',
    symbol: 'SOL',
    logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    currentPrice: 143.21,
    priceChange1h: -0.76,
    priceChange24h: -3.21,
    priceChange7d: 12.45,
    marketCap: 62345678901,
    volume24h: 3456789012,
    circulatingSupply: 435678901,
    maxSupply: null,
    priceHistory7d: generatePriceHistory(140),
  }
];