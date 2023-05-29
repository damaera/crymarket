import { Inter } from "next/font/google";
import {
  useMarketChanges,
  useMarketCurrencies,
} from "@/modules/market/marketApi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const marketCurrencies = useMarketCurrencies();
  const marketChanges = useMarketChanges({ refreshInterval: 1000 });

  return (
    <main className={`${inter.className}`}>
      <table className="table-auto">
        <thead>
          <tr>
            <th>CRYPTO</th>
          </tr>
        </thead>
        <tbody>
          {marketCurrencies?.data?.payload?.map((c) => (
            <tr key={c.currencySymbol}>
              <td>
                <div style={{ color: "red" }}>
                  {/* <img
                    src={c.logo}
                    width={32}
                    height={32}
                    className="fill-current"
                  /> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
