import React, { useEffect, useState } from 'react';
import { FilterBar } from '../../components/FilterBar';
import { HeaderBar } from '../../components/HeaderBar';
import { List } from '../../components/List';
import { ProductService } from '../../services/productService';
import { Container, Main } from './styled';

export const ProductPage = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await ProductService.findAll();

      // armazena as categorias e evita duplicidade
      const mCategories = [...new Set(products.map((item) => item.category))];

      setCategories(mCategories);

      setData(products);
    };

    getProducts().catch((error) => {
      console.error(error.message);
    });
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
