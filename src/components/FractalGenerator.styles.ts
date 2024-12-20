import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

export const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 150px;

  label {
    font-size: 0.9rem;
    color: #ccc;
  }

  input[type="range"] {
    width: 100%;
    height: 4px;
    background: #333;
    border-radius: 2px;
    appearance: none;
    outline: none;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      background: #00ff00;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #00cc00;
      }
    }
  }

  input[type="color"] {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: none;
  }

  span {
    font-size: 0.8rem;
    color: #999;
    text-align: center;
  }
`;

export const FractalContainer = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FractalSVG = styled.svg`
  transition: all 0.3s ease;

  path {
    transition: all 0.3s ease;
  }
`;
