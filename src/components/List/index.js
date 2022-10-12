import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ type }) => type};
  justify-content: ${({ type }) => (type === 'row' ? 'center' : 'start')};
  margin: 0 auto;
  padding-top: 0.5rem;
  align-items: stretch;
  width: 100%;
  overflow-y: auto;

  li:nth-child(odd) {
    margin: 0 ${({ type }) => (type === 'row' ? 0.5 : 0)}rem;
  }

  li {
    padding-bottom: 0.5rem;
    list-style-type: none;
  }
`;

export const List = ({ data, render, type = 'row' }) => {
  const renderFn = (item, index, arr) => {
    if (typeof render === 'undefined') {
      return (
        <li key={item.id}>
          <Card
            title={item.name}
            description={item.description}
            price={item.price}
            image={item.photo_url}
          />
        </li>
      );
    }

    return render(item, index, arr);
  };

  return <Container type={type}>{(data || []).map(renderFn)}</Container>;
};
