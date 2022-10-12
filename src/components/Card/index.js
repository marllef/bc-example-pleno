import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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

export const Card = ({ id, image, price, title = '', description }) => {
  const history = useHistory();
  return (
    <Container>
      <Image src={image} />
      <Price>{BRL(price)}</Price>
      <Title>{title?.substring(0, 40)}</Title>
      <Content>
        <Description>{description?.substring(0, 120)}</Description>
      </Content>
      <Info>
        <More onClick={() => history.push(`/${id}`)}>Ver Detalhes</More>
      </Info>
    </Container>
  );
};
