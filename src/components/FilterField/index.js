import React from 'react';
import { Input } from '../Input';
import { Label } from './styled';

export const FilterField = ({ label, name, ...rest }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} {...rest} />
    </>
  );
};
