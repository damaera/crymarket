export type Currency = {
  color: string;
  currencyGroup: string;
  currencySymbol: string;
  decimal_point: number;
  listingDate: string;
  logo: string;
  name: string;
};

export type PriceChange = {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
};

export type ApiResponse<Payload> = {
  code: string;
  message: string;
  payload: Payload;
};
