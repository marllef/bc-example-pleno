import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  height: 3rem;
  min-height: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
  z-index: 99;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  font-style: italic;

  b {
    color: #0ea5e9;
  }
`;
