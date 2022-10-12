import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HeaderBar } from '../../components/HeaderBar';
import { ProductService } from '../../services/productService';
import { BRL } from '../../utils/currency';
import { Container } from '../Products/styled';
import {
  Back,
  Center,
  Content,
  Description,
  Image,
  Label,
  Main,
  Price,
  Row,
  Title,
} from './styled';

export const DetailsPage = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const product = await ProductService.findOne(id);

      setData(product);
    };

    getProduct().catch((error) => {
      console.error(error.message);
      setError(Boolean(error));
    });
  }, [id]);

  if (!data && error)
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
          <Image src={data?.photo_url} />
          <Content>
            <Label>Descrição</Label>
            <Description>{data?.description}</Description>
            <Label>Categoria</Label>
            <Description>{data?.category}</Description>
            <Label>Preço</Label>
            <Price>{BRL(data?.price)}</Price>
            <Link to={'/'} component={Back}>
              Voltar
            </Link>
          </Content>
        </Row>
      </Main>
    </Container>
  );
};
