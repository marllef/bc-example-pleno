import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderBar } from '../components/HeaderBar';
import { api } from '../services/api';
import colors from '../utils/colors';
import { BRL } from '../utils/currency';
import { Container } from './ProductPage';

const Main = styled.main`
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

const Title = styled.h2`
  padding: 0.5rem 1rem;
  text-align: center;
  color: ${colors.emerald[500]};
  background-color: ${colors.slate[100]};
  border-radius: 5px;
`;

const Row = styled.div`
  display: flex;
  margin: 1rem;
`;

const Center = styled.div`
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

const Content = styled.div`
  width: 100%;
  padding: 0 0.5rem;
`;

const Label = styled.h3`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  color: ${colors.emerald[500]};
`;

const Description = styled.p`
  text-align: center;
`;

const Back = styled.a`
  display: flex;
  justify-content: center;
  font-size: medium;
  width: 100%;
  text-decoration: none;
  color: ${colors.emerald[500]};
  padding: 0.75rem;
`;

const Image = styled.img`
  width: 50%;
  border: 2px solid ${colors.emerald[500]};
  border-radius: 5px;
`;

const Price = styled.h2`
  display: flex;
  width: 100%;
  font-size: xx-large;
  justify-content: center;
`;

export const DetailsPage = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const response = await api.get(`/products/${id}`);
      const product = response.data;

      setData(product);
    };
    getProduct().catch(console.error);
  }, []);

  if (!data)
    return (
      <Container>
        <HeaderBar />
        <Center>
          <b>404</b>
          Produto não encontrado
          <Link to={'/'} component={Back}>
            Voltar
          </Link>
        </Center>
      </Container>
    );

  return (
    <Container>
      <HeaderBar />
      <Main>
        <Title>{data?.name}</Title>
        <Row>
          <Image src={data.photo_url} />
          <Content>
            <Label>Descrição</Label>
            <Description>{data.description}</Description>
            <Label>Categoria</Label>
            <Description>{data.category}</Description>
            <Label>Preço</Label>
            <Price>{BRL(data.price)}</Price>
            <Link to={'/'} component={Back}>
              Voltar
            </Link>
          </Content>
        </Row>
      </Main>
    </Container>
  );
};
