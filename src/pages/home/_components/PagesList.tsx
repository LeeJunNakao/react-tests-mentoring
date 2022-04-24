import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { Item } from './styles';
import { useNavigate } from 'react-router-dom';

export const PagesList = () => {
  const navigate = useNavigate();

  const goToPage = (url: string) => () => {
    navigate(url);
  };

  return (
    <List>
      <Item onClick={goToPage('/todo')}>
        <ListItemAvatar>
          <Avatar>
            <FormatListBulletedOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='To do list' />
      </Item>
      <Item onClick={goToPage('/crypto')}>
        <ListItemAvatar>
          <Avatar>
            <CurrencyBitcoinIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Crypto' />
      </Item>
    </List>
  );
};

export default PagesList;
