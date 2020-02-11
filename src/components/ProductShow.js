import React from 'react'
import { Button } from 'semantic-ui-react'
import InventoryCard from './InventoryCard'

class ProductShow extends React.Component {

  state = {
    productInventories: this.props.productInventories
  }

  componentDidMount = () => {
    let filteredArr = [...this.state.productInventories]
    filteredArr = filteredArr.filter(pi => pi.product.name === this.props.product.name)
    sessionStorage.setItem("product_inventories", JSON.stringify(filteredArr))

    if(sessionStorage.length > 0) {
      this.setState({productInventories: JSON.parse(sessionStorage.getItem("product_inventories"))})
    } else if (sessionStorage.length === 0) {
      this.setState({productInventories: filteredArr})
    }
  }

  handleBuyNow = () => {

  }

  render() {
    return (
      <div>
        <h2>Product Listings</h2>
        {this.state.productInventories.map(pi => <InventoryCard key={pi.id} {...pi} addToCart={this.props.addToCart}/>)}
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