import React from 'react';
import { MessageBoxWrapper } from './styles';

type Props = {
  text: string;
};

const MessageBox = (props: Props) => {
  return <MessageBoxWrapper>{props.text}</MessageBoxWrapper>;
};

export default MessageBox;
