import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
`;

export const Label = styled.label`
  color: #ccc;
  font-size: 0.9rem;
`;

export const Select = styled.select`
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }

  option {
    background: #1a1a1a;
    color: #fff;
  }
`;
