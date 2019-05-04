import React, { Component } from 'react';
import PriceListForm from './PriceListForm';
import { totalPrice } from './Helper';
import './PriceList.css';

class PriceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0
    };
    this.addItem = this.addItem.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
  }
  addItem(item) {
    this.setState(st => ({
      items: [...st.items, item]
    }));
  }
  calcTotal(tax) {
    let newTotal = totalPrice(this.state.items) + tax;
    this.setState({ total: newTotal });
  }

  render() {
    return (
      <div>
        <h1>Total Price Calculator</h1>
        <div className="PriceList-Container">
          <PriceListForm
            addItem={this.addItem}
            totalPrice={totalPrice(this.state.items)}
            calcTotal={this.calcTotal}
          />
          <div className="PriceList">
            {this.state.items.map(item => (
              <h4>
                {item.name} <span>${item.price}</span>
              </h4>
            ))}
          </div>
        </div>
        <h4>SubTotal: ${totalPrice(this.state.items).toFixed(2)}</h4>
        <h3>Total Price: ${this.state.total.toFixed(2)}</h3>
      </div>
    );
  }
}

export default PriceList;
