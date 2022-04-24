import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { CryptoEntry } from '../Form/Form';

type Props = {
  items: CryptoEntry[];
};

export const CryptoList = (props: Props) => {
  const cryptoList = props.items.map((entry) => (
    <ListItem key={entry.id}>
      <span>{entry.name}</span>
      <span>{entry.quantity}</span>
    </ListItem>
  ));
  return <List>{cryptoList}</List>;
};

export default CryptoList;
