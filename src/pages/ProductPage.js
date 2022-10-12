import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { Carousel } from '../components/carousel';
import { FilterBar } from '../components/FilterBar';
import { HeaderBar } from '../components/HeaderBar';
import { List } from '../components/List';
import { api } from '../services/api';
import colors from '../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${colors.slate[100]};
`;

const Main = styled.main`
  display: flex;
  height: 100%;
  flex-direction: row;
  overflow: hidden;
`;

export const ProductPage = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/products');

      const products = response.data;

      // Filtra as categorias e evita duplicidade
      const mCategories = [...new Set(products.map((item) => item.category))];

      setCategories(mCategories);

      setData(products);
    };

    getData().catch(console.err);
  }, []);

  return (
    <Container>
      <HeaderBar />
      <Main>
        <FilterBar
          categories={categories}
          onFilter={({ name, selected }) => {
            setNameFilter(name);
            setSelected(selected);
          }}
        />

        <List
          data={(selected?.length
            ? data.filter((item) => selected.includes(item.category))
            : data
          ).filter((item) => item.name?.toLowerCase().includes(nameFilter))}
        />
      </Main>
    </Container>
  );
};
