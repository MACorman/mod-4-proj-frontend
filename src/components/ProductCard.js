import React from 'react'

class ProductCard extends React.Component {

    render() {
        console.log("INVENTORIES: ", this.props.inventories)
        return(
            <div className="product-card">
                <h3>{this.props.name}</h3>
                <p>Category: {this.props.category}</p>
                <p>Description: {this.props.description}</p>
                {/* <p>Sold by: {this.props.inventories.map(prodInventory => prodInventory.user.username)}</p> */}
                <button>Buy Now!</button>
            </div>
        )
    }
}

export default ProductCard 

// do some thinking on app layout - what containers/components do we want? How do we want to structure pages