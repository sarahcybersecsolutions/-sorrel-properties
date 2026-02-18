import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('KES'); // KES or USD

  const exchangeRate = 0.0077; // 1 KES = 0.0077 USD (approximate)

  const formatPrice = (priceInKES) => {
    if (currency === 'USD') {
      const priceInUSD = priceInKES * exchangeRate;
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(priceInUSD);
    } else {
      // Format in Kenyan Shillings
      if (priceInKES >= 1000000) {
        return `KES ${(priceInKES / 1000000).toFixed(2)}M`;
      } else if (priceInKES >= 1000) {
        return `KES ${(priceInKES / 1000).toFixed(0)}K`;
      }
      return `KES ${priceInKES.toLocaleString()}`;
    }
  };

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'KES' ? 'USD' : 'KES');
  };

  return (
    <CurrencyContext.Provider value={{ currency, formatPrice, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};