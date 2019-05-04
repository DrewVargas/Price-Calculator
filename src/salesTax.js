import React, { Component } from 'react';

class SalesTax extends Component {
  constructor(props) {
    super(props);
    this.state = { salesTax: 0, totalTax: 0 };
    this.handleSalesTaxChange = this.handleSalesTaxChange.bind(this);
    this.handleTaxSubmit = this.handleTaxSubmit.bind(this);
    this.salesTax = this.salesTax.bind(this);
  }
  handleSalesTaxChange(e) {
    this.setState({
      salesTax: e.target.value,
      totalTax: this.salesTax()
    });
  }
  handleTaxSubmit(e) {
    e.preventDefault();
    let subTax = parseFloat(this.state.salesTax) * this.props.totalPrice;
    this.props.calcTotal(subTax);
  }
  salesTax() {
    let percent = parseFloat(this.state.salesTax);
    return (percent * this.props.totalPrice).toFixed(2);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleTaxSubmit}>
          <select
            value={this.state.salesTax}
            onChange={this.handleSalesTaxChange}
          >
            <option value={0}>0%</option>
            <option value={0.06}>6%</option>
            <option value={0.08}>8%</option>
            <option value={0.1}>10%</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <p>Sales Tax: ${this.salesTax()}</p>
      </div>
    );
  }
}

export default SalesTax;
