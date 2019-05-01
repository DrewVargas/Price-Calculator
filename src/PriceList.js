import React, { Component } from 'react';
import PriceListForm from './PriceListForm';
import { totalPrice } from './Helper';
import './PriceList.css';

class PriceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ name: 'cookies', price: 3 }]
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    this.setState(st => ({
      items: [...st.items, item]
    }));
  }

  render() {
    return (
      <div>
        <h1>Total Price Calculator</h1>
        <div className="PriceList-Container">
          <PriceListForm addItem={this.addItem} />
          <div className="PriceList">
            {this.state.items.map(item => (
              <h4>
                {item.name} <span>${item.price}</span>
              </h4>
            ))}
          </div>
        </div>
        <h3>Total Price: ${totalPrice(this.state.items)}</h3>
      </div>
    );
  }
}

export default PriceList;
