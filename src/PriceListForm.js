import React, { Component } from 'react';

class PriceListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', price: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: '', price: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="price">price:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default PriceListForm;
