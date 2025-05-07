import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoAsset, CryptoState } from '../../types/crypto';
import { initialCryptoData } from '../../data/initialData';

const initialState: CryptoState = {
  assets: initialCryptoData,
  status: 'succeeded',
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state, action: PayloadAction<{ updates: Partial<CryptoAsset>[] }>) => {
      const { updates } = action.payload;
      
      updates.forEach(update => {
        const index = state.assets.findIndex(asset => asset.id === update.id);
        if (index !== -1) {
          state.assets[index] = { ...state.assets[index], ...update };
        }
      });
    },
    
    sortAssets: (state, action: PayloadAction<{ key: keyof CryptoAsset; direction: 'asc' | 'desc' }>) => {
      const { key, direction } = action.payload;
      
      state.assets.sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];
        
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return direction === 'asc' ? valueA - valueB : valueB - valueA;
        }
        
        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return direction === 'asc' 
            ? valueA.localeCompare(valueB) 
            : valueB.localeCompare(valueA);
        }
        
        return 0;
      });
    }
  }
});

export const { updatePrices, sortAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;