import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import { Divider } from '../Divider';
import { FilterField } from '../FilterField';
import { Input } from '../Input';
import { List } from '../List';
import { CategoryItem } from './CategoryItem';
import { Container, Label, Paper } from './styled';



export const FilterBar = ({ categories, onFilter = () => {} }) => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState([]);

  const handleFilter = (evt) => {
    if (evt.target.checked) {
      setSelected([...selected, evt.target.value]);
    } else {
      setSelected(selected.filter((item) => item !== evt.target.value));
    }
  };

  useEffect(() => {
    onFilter({ name: (filter || '').toLowerCase(), selected });
    console.log(filter);
  }, [selected, filter]);

  return (
    <Container>
      <Paper>
        <FilterField
          name={'filter'}
          label={'Filtro'}
          onChange={(evt) => setFilter(evt.target.value)}
          placeholder={'Filtrar resultados...'}
        />
        <Divider space={0.75} />
        <Label>Categorias</Label>
        <List
          data={categories}
          type={'column'}
          render={(item, index) => (
            <CategoryItem
              key={item + index}
              value={item}
              onChange={handleFilter}
            />
          )}
        />
      </Paper>
    </Container>
  );
};
