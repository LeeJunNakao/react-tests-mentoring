import React from 'react';
import { Provider } from 'react-redux';
import Page from 'components/Layout/Page';
import NavigatorButton from 'components/Buttons/NavigatorButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/system';
import CryptoList from './List';
import Form from './Form/Form';
import store from './store';

const CryptoPage = () => {
  return (
    <Provider store={store}>
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
          <Form />
          <CryptoList />
        </Box>
      </Page>
    </Provider>
  );
};

const WrappedPage = () => {
  return (
    <Provider store={store}>
      <CryptoPage />
    </Provider>
  );
};

export default WrappedPage;
