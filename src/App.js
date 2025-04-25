import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { startPriceSimulation } from './features/crypto/mockWebSocket';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    startPriceSimulation(dispatch, store.getState);
  }, [dispatch, store]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;