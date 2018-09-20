// @flow
import * as React from 'react';
import Item from './Item';
//import { type Product } from '../types';

const Grid = ({
  products,
  selectedCategory,
}) => (
  <div>
    {products
      //las arrow funcion ya retornan
        .filter(product => !selectedCategory || product.categoryId === selectedCategory)
        .map(product => <Item key={product.id} product={product} />)}
  </div>
);

export default Grid;
