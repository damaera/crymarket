import { string } from "prop-types";
import useSWR, { Fetcher, SWRConfiguration } from "swr";
import { ApiResponse, Currency } from "../types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useMarketCurrencies = (config?: SWRConfiguration) => {
  const url = "/pintuApi/v2/wallet/supportedCurrencies";

  return useSWR<ApiResponse<Currency[]>>(url, fetcher, config);
};

export const useMarketChanges = (config?: SWRConfiguration) => {
  const url = "/pintuApi/v2/trade/price-changes";

  return useSWR<ApiResponse<Currency[]>>(url, fetcher, config);
};
