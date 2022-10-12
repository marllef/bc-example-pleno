import styled from 'styled-components';
import colors from '../../utils/colors';

export const Main = styled.main`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 5px;
`;

export const Title = styled.h2`
  padding: 0.5rem 1rem;
  text-align: center;
  color: ${colors.emerald[500]};
  background-color: ${colors.slate[100]};
  border-radius: 5px;
`;

export const Row = styled.div`
  display: flex;
  margin: 1rem;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: x-large;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${colors.slate[600]};
  b {
    font-size: 5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 0.5rem;
`;

export const Label = styled.h3`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  color: ${colors.emerald[500]};
`;

export const Description = styled.p`
  text-align: center;
`;

export const Back = styled.a`
  display: flex;
  justify-content: center;
  font-size: medium;
  width: 100%;
  text-decoration: none;
  color: ${colors.emerald[500]};
  padding: 0.75rem;
`;

export const Image = styled.img`
  width: 50%;
  border: 2px solid ${colors.emerald[500]};
  border-radius: 5px;
`;

export const Price = styled.h2`
  display: flex;
  width: 100%;
  font-size: xx-large;
  justify-content: center;
`;
