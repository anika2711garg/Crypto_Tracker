import { store } from '../app/store';
import { updatePrices } from '../features/crypto/cryptoSlice';
import { CryptoAsset } from '../types/crypto';

// Simulated WebSocket class for crypto price updates
export class CryptoWebSocket {
  private intervalId: number | null = null;
  private connected: boolean = false;

  constructor(private updateInterval: number = 2000) {}

  connect(): void {
    if (this.connected) return;
    
    this.connected = true;
    console.log('WebSocket connected! Receiving live crypto updates...');
    
    // Simulate WebSocket updates with setInterval
    this.intervalId = window.setInterval(() => {
      this.generateRandomUpdates();
    }, this.updateInterval);
  }

  disconnect(): void {
    if (!this.connected || this.intervalId === null) return;
    
    window.clearInterval(this.intervalId);
    this.intervalId = null;
    this.connected = false;
    console.log('WebSocket disconnected!');
  }

  private generateRandomUpdates(): void {
    const assets = store.getState().crypto.assets;
    
    // Generate random updates for some assets
    const updates = assets.map(asset => {
      // Generate random price fluctuation between -2% and +2%
      const priceChange = (Math.random() * 4 - 2) / 100;
      const newPrice = asset.currentPrice * (1 + priceChange);
      
      // Update hourly, daily, and weekly percentages with slight changes
      const hourChange = asset.priceChange1h + (Math.random() * 0.4 - 0.2);
      const dayChange = asset.priceChange24h + (Math.random() * 0.6 - 0.3);
      const weekChange = asset.priceChange7d + (Math.random() * 0.8 - 0.4);
      
      // Update volume with random fluctuation
      const volumeChange = (Math.random() * 0.1 - 0.05); // -5% to +5%
      const newVolume = asset.volume24h * (1 + volumeChange);
      
      return {
        id: asset.id,
        currentPrice: parseFloat(newPrice.toFixed(2)),
        priceChange1h: parseFloat(hourChange.toFixed(2)),
        priceChange24h: parseFloat(dayChange.toFixed(2)),
        priceChange7d: parseFloat(weekChange.toFixed(2)),
        volume24h: Math.round(newVolume),
        // Add last price to price history and remove oldest
        priceHistory7d: [...asset.priceHistory7d.slice(1), newPrice],
      };
    });
    
    // Dispatch update to Redux store
    store.dispatch(updatePrices({ updates }));
  }
}

// Create and export a singleton instance
export const cryptoWebSocket = new CryptoWebSocket();