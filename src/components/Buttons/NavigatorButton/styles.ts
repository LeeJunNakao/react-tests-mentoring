import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  align-items: center;
  height: 50px;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: -10px;

  svg {
    font-size: 40px;
  }

  &:hover {
    cursor: pointer;
  }
`;
