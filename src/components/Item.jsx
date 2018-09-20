// @flow
import React from 'react';
//import { type Product } from '../types';

const Item = ({ product }) => (
  <div>
    <h1>{product.name}</h1>
    <p>{product.price}</p>
  </div>
);

export default Item;
