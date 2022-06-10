import React from 'react';
import Page from 'components/Layout/Page';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SelectableList from 'components/Lists/SelectableList';
import MessageBox from 'components/MessageBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigatorButton from 'components/Buttons/NavigatorButton';
import { useHooks } from './todo-list-hooks'
import { MessageWrapper } from './styles';


const ToDoPage = () => {
  const {items, itemsDone, setItemsDone, inputValue, handleChange, addItem, removeItens} = useHooks();
  return (
    <Page title='To Do List'>
      <>
        <Box
          sx={{
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <NavigatorButton text='Home' url='/' icon={ArrowBackIcon} />

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
          <MessageWrapper>
            {items.length > 0 && items.length === itemsDone.length && (
              <MessageBox text='All tasks completed successfully' />
            )}
          </MessageWrapper>

          {itemsDone.length ? (
            <Button onClick={removeItens}>
              remover
            </Button>
          ) :
            (<div />)}
          <SelectableList items={items} onChange={setItemsDone} />
        </Box>
      </>
    </Page>
  );
};

export default ToDoPage;
