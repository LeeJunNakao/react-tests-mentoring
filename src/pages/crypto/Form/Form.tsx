import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios, { AxiosResponse } from 'axios';
import CachedIcon from '@mui/icons-material/Cached';
import Autocomplete from '@mui/material/Autocomplete';
import { Coin, CoinOption } from 'entities/Crypto';
import { LoadingWrapper } from './styles';

const debounced = _.debounce(async (fn) => await fn(), 1000);

export type CryptoEntry = Coin & {
  quantity: number;
};

type CoinGeckResponse = {
  coins: Coin[];
};

type Props = {
  add: (v: CryptoEntry) => void;
};

const Form = (props: Props) => {
  const [crypto, setCrypto] = useState('');
  const [quantity, setQuantity] = useState<string | null>(null);

  const [selectedCrypto, setSelectedCrypto] = useState<Coin | null | undefined>(
    null,
  );
  const [searchResult, setSearchResult] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(false);

  const cryptoOptions = searchResult.map(
    (c): CoinOption => ({
      label: c.name,
      id: c.id,
      value: c,
    }),
  );

  useEffect(() => {
    debounced(search);
  }, [crypto]);

  useEffect(() => {
    console.log('!!!!!!!!!!!!!!!!!', selectedCrypto);
  }, [selectedCrypto]);

  const handleChange =
    (setter: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleClick = () => {
    if (selectedCrypto && Number(quantity) >= 0) {
      const register = {
        ...selectedCrypto,

        quantity: Number(quantity),
      };

      props.add(register);

      setCrypto('');
      setQuantity(null);
    }
  };

  const search = async () => {
    if (crypto) {
      try {
        setLoading(true);
        const result: AxiosResponse<CoinGeckResponse> = await axios.get(
          `https://api.coingecko.com/api/v3/search?query=${crypto}`,
        );

        setSearchResult(result.data.coins);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={cryptoOptions}
          sx={{ width: 300 }}
          onChange={(_event: any, item: CoinOption | null) => {
            setSelectedCrypto(item?.value);
            setCrypto(item?.label || '');
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Name or symbol'
              variant='standard'
              value={crypto}
              onChange={handleChange(setCrypto)}
            />
          )}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <TextField
          label='Quantity'
          variant='standard'
          value={quantity}
          onChange={handleChange(setQuantity)}
          type='number'
        />
        {loading ? (
          <LoadingWrapper>
            <CachedIcon />
          </LoadingWrapper>
        ) : (
          <Button variant='contained' onClick={handleClick}>
            add
          </Button>
        )}
      </Box>
    </>
  );
};

export default Form;
