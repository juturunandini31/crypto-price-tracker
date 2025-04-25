import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
      logo: '🟠',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '19.85M BTC',
      maxSupply: '21M BTC',
      chart: '/chart.png',
    },
    {
      id: 2,
      logo: '⚫',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1802.46,
      change1h: 0.60,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      supply: '120.71M ETH',
      maxSupply: '∞',
      chart: '/chart.png',
    },
    {
      id: 3,
      logo: '🟢',
      name: 'Tether',
      symbol: 'USDT',
      price: 1.00,
      change1h: 0.00,
      change24h: 0.00,
      change7d: 0.04,
      marketCap: 145320022085,
      volume24h: 92288882007,
      supply: '145.27B USDT',
      maxSupply: 'N/A',
      chart: '/chart.png',
    },
    {
      id: 4,
      logo: '⚪',
      name: 'XRP',
      symbol: 'XRP',
      price: 2.22,
      change1h: 0.46,
      change24h: 0.54,
      change7d: 6.18,
      marketCap: 130073814966,
      volume24h: 5131481491,
      supply: '58.39B XRP',
      maxSupply: '100B XRP',
      chart: '/chart.png',
    },
    {
      id: 5,
      logo: '🟡',
      name: 'BNB',
      symbol: 'BNB',
      price: 606.65,
      change1h: 0.09,
      change24h: -1.20,
      change7d: 3.73,
      marketCap: 85471956947,
      volume24h: 1874281784,
      supply: '140.89M BNB',
      maxSupply: '200M BNB',
      chart: '/chart.png',
    },
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset(state, action) {
      const index = state.assets.findIndex(asset => asset.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = { ...state.assets[index], ...action.payload };
      }
    },
  },
});

export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
