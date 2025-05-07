import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { cryptoWebSocket } from './services/cryptoService';
import CryptoTable from './components/CryptoTable/CryptoTable';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  useEffect(() => {
    // Connect to simulated WebSocket when component mounts
    cryptoWebSocket.connect();
    
    // Disconnect when component unmounts
    return () => {
      cryptoWebSocket.disconnect();
    };
  }, []);

  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        
        <main className="flex-grow p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Today's Cryptocurrency Prices</h2>
            <CryptoTable />
          </div>
        </main>
        
        <Footer />
      </div>
    </Provider>
  );
}

export default App;