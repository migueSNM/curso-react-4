import React from 'react';
import axios, { type $AxiosXHR } from 'axios';

class Form extends React.Component{

  state = {
      name: '',
      description: '',
      price: '',
      availability: true,
      categoryId: 1,
      image: '',
  };

  handleChange = (event) => {
      let {name} = event.target;
    this.setState({
        [name]: event.target.value,
    })
  };

  handleSubmit = (e) => {
      e.preventDefault();

      const product = this.state;
      axios.post('http://develop.plataforma5.la:3000/api/products', product)
          .then(res => {
              console.log(res);
              console.log(res.data);
          })
          .then(this.props.addProduct);
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
          <label>
              Price:
              <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
          </label>
          <label>
              Availability:
              <input type="text" name="availability" value={this.state.availability} onChange={this.handleChange} />
          </label>
          <label>
              Category ID:
              <input type="text" name="categoryId" value={this.state.categoryId} onChange={this.handleChange} />
          </label>
          <label>
              Image:
              <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
          </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
