import React from 'react';
import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);

  return (
    <div className="overflow-x-auto rounded-lg shadow-md bg-white p-4">
      <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Logo</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Symbol</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">1h %</th>
            <th className="px-4 py-3">24h %</th>
            <th className="px-4 py-3">7d %</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">24h Volume</th>
            <th className="px-4 py-3">Supply</th>
            <th className="px-4 py-3">Max Supply</th>
            <th className="px-4 py-3">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr
              key={asset.id}
              className="bg-white hover:bg-gray-50 transition rounded-md shadow-sm"
            >
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3 text-xl">{asset.logo}</td>
              <td className="px-4 py-3">{asset.name}</td>
              <td className="px-4 py-3">{asset.symbol}</td>
              <td className="px-4 py-3">${asset.price.toLocaleString()}</td>
              <td className={`px-4 py-3 ${asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>{asset.change1h}%</td>
              <td className={`px-4 py-3 ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>{asset.change24h}%</td>
              <td className="px-4 py-3 text-green-500">{asset.change7d}%</td>
              <td className="px-4 py-3">${asset.marketCap.toLocaleString()}</td>
              <td className="px-4 py-3">${asset.volume24h.toLocaleString()}</td>
              <td className="px-4 py-3">{asset.supply}</td>
              <td className="px-4 py-3">{asset.maxSupply}</td>
              <td className="px-4 py-3">
                <img src={asset.chart} alt="7D Chart" width="80" className="rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
