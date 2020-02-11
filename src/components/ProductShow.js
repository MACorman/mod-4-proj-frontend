import React from 'react'
import { Button } from 'semantic-ui-react'

class ProductShow extends React.Component {

  handleBuyNow = () => {

  }



  render() {

    return (


      <div>
        <h1>Name: {this.props.product.name}</h1>
        <h2>Description: {this.props.product.description}</h2>
        <h3>Category: {this.props.product.category}</h3>
        <Button primary onClick={(e) => this.props.handleCart(e, this.props.product)}>Add to Cart</Button>
      </div>

    )
  }
}


export default ProductShow