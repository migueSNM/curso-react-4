// @flow
import React from 'react';
import axios, { type $AxiosXHR } from 'axios';
import Grid from '../components/Grid';
import Sidebar from '../components/Sidebar';
//import { type Product, type Category } from '../types';

const BASE_URL = 'http://develop.plataforma5.la:3000/api';

// type Props = {};
//
// type State = {
//   products: Product[],
//   categories: Category[],
//   selectedCategory: ?number,
//   loading: boolean,
// };

export default class App extends React.Component<Props, State> {
  //No creo un constructor ya que la función que necesitaba bindear está declarada como arrow function

  state = {
    products: [],
    categories: [],
    selectedCategory: null,
    loading: true,
  }

  componentDidMount() {
    Promise.all([this.fetchProducts(), this.fetchCategories()])
      .then(() => this.setState({ loading: false }));
  }

  fetchProducts() {
    return axios.get(`${BASE_URL}/products`)
      .then((res) => res.data)
      .then((products) => this.setState({ products }));
  }

  fetchCategories() {
    return axios.get(`${BASE_URL}/categories`)
      .then((res) => res.data)
      .then((categories) => this.setState({ categories }));
  }

  //no es necesario hacer el bind this porque esta declarado como arrow function
  changeCategory = (selectedCategory) => {
    this.setState({
      selectedCategory,
    });
  };

addProduct = (product) => {
    this.setState({
        products: [product, ...this.state.products],
    });
}

  render() {
    return (
      this.state.loading ?
        <div>Loading...</div>
        :
        <div>
          <Sidebar categories={this.state.categories} changeCategory={this.changeCategory} />
          <Grid products={this.state.products} selectedCategory={this.state.selectedCategory} />
        </div>
    );
  }
}
