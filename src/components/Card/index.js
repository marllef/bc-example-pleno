import React from 'react';
import { BRL } from '../../utils/currency';
import {
  Container,
  Content,
  Description,
  Image,
  Info,
  More,
  Price,
  Title,
} from './styled';

export const Card = ({ image, price, title = '', description }) => {
  return (
    <Container>
      <Image src={image} />
      <Price>{BRL(price)}</Price>
      <Title>{title?.substring(0, 40)}</Title>
      <Content>
        <Description>{description?.substring(0, 120)}</Description>
      </Content>
      <Info>
        <More>Ver Detalhes</More>
      </Info>
    </Container>
  );
};
