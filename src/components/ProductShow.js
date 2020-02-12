import React from 'react'
import InventoryCard from './InventoryCard'

class ProductShow extends React.Component {

  state = {
    product: []
  }

  componentDidMount() {
  const id = this.props.product.id
  // for some reason on page refresh product becomes null and cant read id of null
  fetch(`http://localhost:3000/products/${id}`)
  .then(resp => resp.json())
  .then(data => this.setState({product: data}))
  }

  render() {
    return (
      <div>
        <h2>Product Listings for {this.state.product.name}</h2>
        {this.state.product.product_inventories ? this.state.product.product_inventories.map(pi => <InventoryCard key={pi.id} {...pi} addToCart={this.props.addToCart} product={this.props.product} />) : "Please wait, page is loading."}
      </div>

    )
  }
}


export default ProductShow