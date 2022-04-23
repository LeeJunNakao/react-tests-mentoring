import React from 'react';
import Page from 'components/Layout/Page';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SelectableList from 'components/Lists/SelectableList';
import { useState } from 'react';
import MessageBox from 'components/MessageBox';

const ToDoPage = () => {
  const [items, setItems] = useState<string[]>([]);

  const [inputValue, setInputValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <Page title='To Do List'>
      <>
        <Box
          sx={{
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '40px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              columnGap: '20px',
            }}
          >
            <TextField
              id='outlined-required'
              label='Item to add'
              variant='standard'
              value={inputValue}
              onChange={handleChange}
            />
            <Button variant='contained' onClick={addItem}>
              add
            </Button>
          </Box>

          <MessageBox text='All tasks completed successfully' />

          <SelectableList items={items} />
        </Box>
      </>
    </Page>
  );
};

export default ToDoPage;
