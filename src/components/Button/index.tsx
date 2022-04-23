import React from "react";

type Props = {
  disabled?: boolean;
  onClick?: (event: any) => void;
  text: string;
};

const Button = (props: Props) => {
  const handleClick = (event: any) => {
    if (!props.disabled && props.onClick) props.onClick(event);
  };

  return <button onClick={handleClick}>{props.text}</button>;
};

export default Button;
