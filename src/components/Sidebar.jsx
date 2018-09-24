// @flow
import React from 'react';
import Form from '../containers/Form'
//import { type Category } from '../types';

const Sidebar = ({categories, changeCategory, addProduct}) => (
  <div>
    <ul>
      <li>
        <button onClick={() => changeCategory(null)}>
          All
        </button>
      </li>
      {categories.map(category => (
        <li key={category.id}>
          <button onClick={() => changeCategory(category.id)}>
            {category.name}
          </button>
        </li>))}
    </ul>
    <Form addProduct={addProduct} />
  </div>
);

export default Sidebar;
