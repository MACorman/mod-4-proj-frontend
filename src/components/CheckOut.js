import React, { Component } from 'react'
import InventoryCard from './InventoryCard'
import { Button } from 'semantic-ui-react'

class CheckOut extends Component {

  checkout = () => {
    this.props.purchaseProducts()
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        {this.props.currentCart.map(pi => <InventoryCard key={pi.id} {...pi} checkout={this.checkout} removeFromCart={this.props.removeFromCart}/>)}
        <Button primary onClick={this.checkout} >Checkout Now</Button>
      </div>
    )
  }
}

export default CheckOut