import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: x-small;
`;

const CheckBox = styled.input`
  color: red;

  &:checked {
    accent-color: ${colors.emerald[500]};
  }
`;

const Value = styled.label`
  margin-left: 0.2rem;
`;

export const CategoryItem = ({ value, ...rest }) => {
  return (
    <ListItem>
      <CheckBox id={value} type={'checkbox'} value={value} {...rest} />
      <Value htmlFor={value}>{value}</Value>
    </ListItem>
  );
};
