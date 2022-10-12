import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { Carousel } from '../components/carousel';
import { FilterBar } from '../components/FilterBar';
import { HeaderBar } from '../components/HeaderBar';
import { List } from '../components/List';
import { api } from '../services/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  height: 100%;
  flex-direction: row;
  overflow: hidden;
`;

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/products', {
        headers: {
          'auth-token': 'SecretAuthToken',
        },
      });

      const mCategories = [
        ...new Set(response.data.map((item) => item.category)),
      ];

      setCategories(mCategories);

      setData(response.data);
    };

    getData().catch(console.err);
  }, []);

  return (
    <Container>
      <HeaderBar />
      <Main>
        <FilterBar
          categories={categories}
          onFilter={(filtered) => {
            setNameFilter(filtered.name);
            setSelected(filtered.selected);
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
