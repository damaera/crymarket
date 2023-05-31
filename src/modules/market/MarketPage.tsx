import { Inter } from "next/font/google";
import {
  useMarketChanges,
  useMarketCurrencies,
} from "@/modules/market/marketApi";

import { ReactSVG } from "react-svg";
import { LatestPrice } from "@/modules/market/LatestPrice";
import { PriceChangeText } from "@/modules/market/PriceChangeText";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function MarketPage() {
  const marketCurrencies = useMarketCurrencies();
  const marketChanges = useMarketChanges({ refreshInterval: 1000 });

  const aggregatedCurrencies = marketCurrencies?.data?.payload
    ?.map((currency) => {
      const priceChange = marketChanges.data?.payload?.find(
        (priceChange) =>
          priceChange.pair.split("/")[0] ===
          currency.currencySymbol.toLowerCase()
      );

      return { ...currency, priceChange };
    })
    .filter((currency) => currency.priceChange);

  return (
    <>
      <Head>
        <title>Crypto Market Hari Ini</title>
      </Head>
      <main className={`${inter.className} max-w-5xl mx-auto px-4 py-12`}>
        <h1 className="text-3xl font-bold">
          Harga Crypto Dalam Rupiah Hari Ini
        </h1>

        <div className="h-4" />

        <table className="table-auto w-full border border-slate-200">
          <thead className="bg-blue-50 h-12 border-b border-slate-200">
            <tr className="!text-left">
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
            {aggregatedCurrencies?.map((c) => {
              return (
                <tr
                  key={c.currencySymbol}
                  className="py-2 h-12 cursor-pointer hover:bg-slate-100"
                >
                  <td className="pl-4">
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
                    <div className="font-medium text-slate-400">
                      {c.currencySymbol}
                    </div>
                  </td>
                  <td>
                    <div className="font-medium tabular-nums">
                      <LatestPrice price={c.priceChange?.latestPrice} />
                    </div>
                  </td>
                  <td>
                    <div className="font-medium tabular-nums">
                      <PriceChangeText change={c.priceChange?.day} />
                    </div>
                  </td>
                  <td>
                    <div className="font-medium tabular-nums">
                      <PriceChangeText change={c.priceChange?.week} />
                    </div>
                  </td>
                  <td>
                    <div className="font-medium tabular-nums">
                      <PriceChangeText change={c.priceChange?.month} />
                    </div>
                  </td>
                  <td>
                    <div className="font-medium tabular-nums">
                      <PriceChangeText change={c.priceChange?.year} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
