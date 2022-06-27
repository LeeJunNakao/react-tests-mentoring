import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  @keyframes rotation {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: rotation 1s infinite linear;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelError = styled.span`
  color: red;
  font-size: 12px;
`;
