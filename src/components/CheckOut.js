import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import InventoryCard from './InventoryCard'

class CheckOut extends Component {

  checkout = () => {
    this.props.purchaseProducts()
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        {this.props.currentCart.map(pi => <InventoryCard key={pi.id} {...pi} checkout={this.checkout} removeFromCart={this.props.removeFromCart}/>)}
        <button onClick={this.checkout} >Checkout Now</button>
      </div>
    )
  }
}

export default CheckOut