import React from 'react';
import styled from 'styled-components';

const Container = styled.main``;

export const Carousel = () => {
  return (
    <Container>
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
    </Container>
  );
};
