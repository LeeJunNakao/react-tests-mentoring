import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HookProps } from 'utils/types';

type PageProps = {
  title: string;
};

const Page = (props: HookProps<PageProps>) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h2'>{props.title}</Typography>
      <React.Fragment>{props.children}</React.Fragment>
    </Box>
  );
};

export default Page;
