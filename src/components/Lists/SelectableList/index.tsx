import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { ListWrapper } from './styles';

type Props = {
  items: string[];
  onChange?: (v: string[]) => void;
};

const SelectableList = (props: Props) => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (index: string) => () => {
    if (checked.includes(index)) {
      setChecked(checked.filter((i) => i !== index));
    } else {
      setChecked([...checked, index]);
    }
  };

  useEffect(() => {
    if (props.onChange) props.onChange(checked);
  }, [checked]);

  const Items = props.items.map((value, index) => {
    const labelId = `checkbox-list-label-${value}`;

    return (
      <ListItem key={index}>
        <ListItemButton onClick={handleToggle(value)} dense>
          <ListItemIcon>
            <Checkbox
              edge='start'
              checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={value} />
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <ListWrapper>
      <List></List>
      {Items}
    </ListWrapper>
  );
};

export default SelectableList;
