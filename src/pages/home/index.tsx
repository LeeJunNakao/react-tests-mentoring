import React from 'react';
import Page from 'components/Layout/Page';
import PagesList from './_components/PagesList';

const HomePage = () => {
  return (
    <Page title='Pages'>
      <PagesList />
    </Page>
  );
};

export default HomePage;
