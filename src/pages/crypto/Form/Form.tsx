/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { Coin, CoinOption } from 'entities/Crypto';
import CircularProgress from '@mui/material/CircularProgress';
import { searchCrypto } from 'services/crypto';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { addCrypto } from '../store/thunks';
import store from '../store';
import { QuantityContainer, LabelError } from './styles';

const debounced = _.debounce(async (fn) => await fn(), 1000);

export type CryptoEntry = {
  code: string;
  quantity: number;
  price?: number;
  total?: number;
};

const Form = () => {
  const [crypto, setCrypto] = useState('');
  const [quantity, setQuantity] = useState<string | null>('');
  const [autocompleteKey, setAutocompleteKey] = useState(1);
  const [selectedCrypto, setSelectedCrypto] = useState<Coin | null | undefined>(
    null,
  );
  const [searchResult, setSearchResult] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(false);
  const [openError, setOpenError] = useState(false);

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

  const handleChange =
    (setter: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleClick = async () => {
    if (selectedCrypto && Number(quantity) >= 0) {
      searchCryptoPrice();
    }
  };

  const clearForm = () => {
    setCrypto('');
    setQuantity('');
    setSelectedCrypto(null);
    setAutocompleteKey(autocompleteKey + 1);
  };

  const searchCryptoPrice = async () => {
    const item = { ...selectedCrypto, quantity: Number(quantity) };
    store.dispatch(
      addCrypto(
        {
          code: item.symbol as string,
          quantity: Number(quantity),
          price: 0,
        },
        setOpenError,
        setLoading,
        clearForm,
      ),
    );
  };
  const quantityError = () => quantity !== null && quantity < '0' && quantity !== '';
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const search = async () => {
    if (crypto) {
      try {
        setLoading(true);

        const result = await searchCrypto(crypto);

        setSearchResult(result.coins);
      } finally {
        setLoading(false);
      }
    }
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

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
          key={autocompleteKey}
          noOptionsText={loading ? 'loading...' : 'No Options'}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Name or symbol'
              variant='standard'
              value={crypto}
              onChange={handleChange(setCrypto)}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color='inherit' size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
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
        <QuantityContainer>
        <TextField
          label='Quantity'
          variant='standard'
          value={quantity}
          onChange={handleChange(setQuantity)}
          type='number'
        />
        { quantityError() ? <LabelError>Não é permitido valores negativos</LabelError> : <div/>}
        </QuantityContainer>      

        <Button variant='contained' onClick={handleClick}>
          add
        </Button>
      </Box>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleClose}
        message='Note archived'
      >
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          This cryptocurrency is not avaible
        </Alert>
      </Snackbar>
    </>
  );
};

export default Form;
