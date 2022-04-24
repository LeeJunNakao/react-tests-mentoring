export type Coin = {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
};

export type CoinOption = {
  id: string;
  label: string;
  value: Coin;
};
