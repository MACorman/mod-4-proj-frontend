import React from 'react'
import InventoryCard from '../components/InventoryCard'

class InventoryContainer extends React.Component {
    render() {
        // console.log("make it nice: ", this.props.user.products)
        return(
            <div>
                {this.props.user.products ? this.props.user.products.map(product => <InventoryCard key={product.id} productInventories={this.props.user.product_inventories} {...product} />) : "No products to show"}
            </div>
        )
    }
}

export default InventoryContainer

// add product cards
{/* <ProductCard key={product.id} {...product}/> */}
