import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.aside`
  min-width: 15rem;
  max-width: 15rem;

  padding: 0.5rem;

  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Paper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-size: smaller;
  color: ${colors.emerald[500]};
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 0.25rem;
`;
