import styled, { keyframes } from 'styled-components';

export const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  width: 100%;
`;

export const AppContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #00ff00;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
`;

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @media (prefers-reduced-motion: no-preference) {
    &:nth-of-type(2) {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

export const Card = styled.div`
  padding: 2em;
`;

export const ReadTheDocs = styled.p`
  color: #888;
`;
