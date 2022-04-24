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
