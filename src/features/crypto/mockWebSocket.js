export function startPriceSimulation(dispatch, getState) {
    setInterval(() => {
      const assets = getState().crypto.assets;
      assets.forEach(asset => {
        const change = (Math.random() - 0.5) * 2;
        dispatch({
          type: 'crypto/updateAsset',
          payload: {
            id: asset.id,
            price: +(asset.price * (1 + change / 100)).toFixed(2),
            change1h: +(change).toFixed(2),
            change24h: +(change * 2).toFixed(2),
            volume24h: Math.round(asset.volume24h * (1 + change / 100)),
          },
        });
      });
    }, 1500);
  }
  