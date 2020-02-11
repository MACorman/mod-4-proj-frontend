import React from 'react'
import { Button } from 'semantic-ui-react'
import InventoryCard from './InventoryCard'

class ProductShow extends React.Component {

  state = {
    products: []
  }

  componentDidMount() {
  const id = this.props.product.id
  // for some reason on page refresh product becomes null and cant read id of null
  fetch(`http://localhost:3000/products/${id}`)
  .then(resp => resp.json())
  .then(data => this.setState({products: data}))
  }

  // handleBuyNow = () => {

  // }

  render() {
    console.log("heyyoooo: ", this.state.products.product_inventories)
    return (
      <div>
        <h2>Product Listings</h2>
        {this.state.products.product_inventories ? this.state.products.product_inventories.map(pi => <InventoryCard key={pi.id} {...pi} addToCart={this.props.addToCart} product={this.props.product} />) : "Please wait, page is loading."}
      </div>

      // <div>
      //   <h1>Name: {this.props.product.name}</h1>
      //   <h2>Description: {this.props.product.description}</h2>
      //   <h3>Category: {this.props.product.category}</h3>
      //   <Button primary onClick={(e) => this.props.handleCart(e, this.props.product)}>Add to Cart</Button>
      // </div>

    )
  }
}


export default ProductShow