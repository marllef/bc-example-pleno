import React from 'react';
import { useHistory } from 'react-router-dom';
import { Brand, Container } from './styled';

export const HeaderBar = () => {
  const history = useHistory();

  return (
    <Container>
      <Brand onClick={() => history.push('/')}>
        Kuppi <b>Products</b>
      </Brand>
    </Container>
  );
};
