import axios, { AxiosResponse } from 'axios';
import { Coin, CoinOption } from 'entities/Crypto';

type CoinGeckResponse = {
  coins: Coin[];
};

type SearchResult = {
  [code: string]: {
    data: null | {
      date: string;
      closePrice: number;
      currency: string;
    };
    error: null | {
      code: string;
      message: string;
    };
  };
};

export const searchPrice = async (
  code: string,
  date: string,
): Promise<SearchResult[string]> => {
  const result = await axios.get(
    'https://asset-quotes.herokuapp.com/api/asset-quote/search',
    {
      params: {
        assets: `[${code}]`,
        source: 'crypto',
        date,
        currency: 'BRL',
      },
    },
  );

  return result.data[code];
};

export const searchCrypto = async (crypto: string) => {
  const result: AxiosResponse<CoinGeckResponse> = await axios.get(
    `https://api.coingecko.com/api/v3/search?query=${crypto}`,
  );

  return result.data;
};
