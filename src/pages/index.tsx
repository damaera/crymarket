import { Inter } from "next/font/google";
import {
  useMarketChanges,
  useMarketCurrencies,
} from "@/modules/market/marketApi";

import { ReactSVG } from "react-svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const marketCurrencies = useMarketCurrencies();
  const marketChanges = useMarketChanges({ refreshInterval: 1000 });

  return (
    <main className={`${inter.className}`}>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>CRYPTO</th>
            <th></th>
            <th>HARGA</th>
            <th>24 JAM</th>
            <th>1 MGG</th>
            <th>1 BLN</th>
            <th>1 THN</th>
          </tr>
        </thead>
        <tbody>
          {marketCurrencies?.data?.payload?.map((c) => {
            const priceChange = marketChanges.data?.payload?.find(
              (p) => p.pair.split("/")[0] == c.currencySymbol.toLowerCase()
            );

            if (!priceChange) {
              return null;
            }

            return (
              <tr key={c.currencySymbol}>
                <td>
                  <div style={{ color: c.color }} className="currency-icon">
                    <ReactSVG
                      src={c.logo.replace(
                        "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/",
                        "/pintuAssets/"
                      )}
                    />
                  </div>
                </td>

                <td>
                  <div className="font-medium">{c.name}</div>
                </td>
                <td>
                  <div className="font-medium">{c.currencySymbol}</div>
                </td>
                <td>
                  <div className="font-medium tabular-nums">
                    {priceChange?.latestPrice}
                  </div>
                </td>
                <td>
                  <div className="font-medium tabular-nums">
                    {priceChange?.day}
                  </div>
                </td>
                <td>
                  <div className="font-medium tabular-nums">
                    {priceChange?.week}
                  </div>
                </td>
                <td>
                  <div className="font-medium tabular-nums">
                    {priceChange?.month}
                  </div>
                </td>
                <td>
                  <div className="font-medium tabular-nums">
                    {priceChange?.year}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
