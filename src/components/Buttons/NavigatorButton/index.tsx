import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './styles';

type Props = {
  url: string;
  text: string;
  icon: React.FC<any>;
};

const NavigatorButton = (props: Props) => {
  const navigate = useNavigate();

  const Icon = props.icon;

  return (
    <Wrapper onClick={() => navigate(props.url)}>
      <Icon />
      <span>{props.text}</span>
    </Wrapper>
  );
};

export default NavigatorButton;
