import React, { Component } from 'react';

class SalesTax extends Component {
  constructor(props) {
    super(props);
    this.state = { salesTax: 1 };
    this.handleSalesTaxChange = this.handleSalesTaxChange.bind(this);
    this.salesTax = this.salesTax.bind(this);
  }
  handleSalesTaxChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  salesTax() {
    return parseInt(this.state.salesTax * this.props.totalPrice.toFixed(2));
  }
  render() {
    return (
      <div>
        <select name="salesTax" onChange={this.handleSalesTaxChange}>
          <option value={1}>Choose a sales tax</option>
          <option value={0}>0%</option>
          <option value={0.06}>6%</option>
          <option value={0.08}>8%</option>
          <option value={0.1}>10%</option>
        </select>
        <p>Sales Tax: ${this.salesTax()}</p>
      </div>
    );
  }
}

export default SalesTax;
