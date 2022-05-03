import React, { useEffect, useState } from 'react';
import Page from 'components/Layout/Page';
import NavigatorButton from 'components/Buttons/NavigatorButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/system';
import CryptoList from './List';
import Form, { CryptoEntry } from './Form/Form';

const CryptoPage = () => {
  const [cryptos, setCryptos] = useState<CryptoEntry[]>([]);

  const addCrypto = (crypto: CryptoEntry) => {
    setCryptos([...cryptos, crypto]);
  };

  return (
    <Page title='Crypto'>
      <Box
        sx={{
          maxWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          columnGap: '20px',
        }}
      >
        <NavigatorButton url='/' text='Home' icon={ArrowBackIcon} />
        <Form add={addCrypto} />
        <CryptoList items={cryptos} />
      </Box>
    </Page>
  );
};

export default CryptoPage;
