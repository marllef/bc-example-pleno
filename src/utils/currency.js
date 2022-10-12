import currency from 'currency.js';

export const BRL = (value) =>
  currency(value, {
    separator: '.',
    decimal: ',',
    symbol: 'R$',
  }).format();
