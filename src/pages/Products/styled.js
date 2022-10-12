import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${colors.slate[100]};
`;

export const Main = styled.main`
  display: flex;
  height: 100%;
  flex-direction: row;
  overflow: hidden;
`;
