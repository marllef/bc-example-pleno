import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${colors.slate[300]};
  border-radius: 3px;
  padding: 0.25rem;
  outline-color: ${colors.emerald[500]};
`;
