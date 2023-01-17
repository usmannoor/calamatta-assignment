export interface Stock {
  name: string;
  price: number;
  high: number;
  low: number;
  '52_wk_high': number;
  '52_wk_low': number;
  prev_close: number;
  active?: boolean;
}

export interface QuoteResponse {
  quoteResponse: BaseResponse;
}

export interface BaseResponse {
  result: StockInterface[];
  errors: ResponseError | null;
}

export interface ResponseError {
  code: string;
  description: string;
}

export interface StockInterface {
  language?: string;
  region?: string;
  quoteType?: string;
  typeDisp?: string;
  quoteSourceName?: string;
  triggerable?: boolean;
  customPriceAlertConfidence?: string;
  currency?: string;
  exchange?: string;
  shortName?: string;
  longName?: string;
  messageBoardId?: string;
  exchangeTimezoneName?: string;
  exchangeTimezoneShortName?: string;
  gmtOffSetMilliseconds?: number;
  market?: string;
  esgPopulated?: boolean;
  regularMarketChangePercent?: number;
  regularMarketPrice?: number;
  marketState?: string;
  sharesOutstanding?: number;
  bookValue?: number;
  fiftyDayAverage?: number;
  fiftyDayAverageChange?: number;
  fiftyDayAverageChangePercent?: number;
  twoHundredDayAverage?: number;
  twoHundredDayAverageChange?: number;
  twoHundredDayAverageChangePercent?: number;
  marketCap?: number;
  forwardPE?: number;
  priceToBook?: number;
  sourceInterval?: number;
  exchangeDataDelayedBy?: number;
  averageAnalystRating?: string;
  tradeable?: boolean;
  cryptoTradeable?: boolean;
  firstTradeDateMilliseconds?: number;
  priceHint?: number;
  postMarketChangePercent?: number;
  postMarketTime?: number;
  postMarketPrice?: number;
  postMarketChange?: number;
  regularMarketChange?: number;
  regularMarketTime?: number;
  regularMarketDayHigh?: number;
  regularMarketDayRange?: string;
  regularMarketDayLow?: number;
  regularMarketVolume?: number;
  regularMarketPreviousClose?: number;
  bid?: number;
  ask?: number;
  bidSize?: number;
  askSize?: number;
  fullExchangeName?: string;
  financialCurrency?: string;
  regularMarketOpen?: number;
  averageDailyVolume3Month?: number;
  averageDailyVolume10Day?: number;
  fiftyTwoWeekLowChange?: number;
  fiftyTwoWeekLowChangePercent?: number;
  fiftyTwoWeekRange?: string;
  fiftyTwoWeekHighChange?: number;
  fiftyTwoWeekHighChangePercent?: number;
  fiftyTwoWeekLow?: number;
  fiftyTwoWeekHigh?: number;
  earningsTimestamp?: number;
  earningsTimestampStart?: number;
  earningsTimestampEnd?: number;
  trailingAnnualDividendRate?: number;
  trailingPE?: number;
  trailingAnnualDividendYield?: number;
  epsTrailingTwelveMonths?: number;
  epsForward?: number;
  epsCurrentYear?: number;
  priceEpsCurrentYear?: number;
  displayName?: string;
  symbol?: string;
  isActive?: boolean;
}
