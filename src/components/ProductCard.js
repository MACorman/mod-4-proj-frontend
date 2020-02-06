import React from 'react'



class ProductCard extends React.Component {

    InventoryUserMatch = (inventory) => {
        return this.props.users.map(user => {
            return user.inventories.map(i => {
                if (i.id == inventory.id) {
                    return user.username
                }
            })
        })
    }

    render() {
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>Category: {this.props.category}</p>
                <p>Description: {this.props.description}</p>
                <p>Sold by: {this.props.inventories.map(inventory => this.InventoryUserMatch(inventory))}</p>
                <button>Buy Now!</button>
            </div>
        )
    }
}

export default ProductCard 