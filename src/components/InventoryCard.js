import React from 'react'

class InventoryCard extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>${this.props.productInventories.map(i => i.price)}.00</p>
                <p>{this.props.productInventories.map(i => i.quantity)} Left in Stock</p>
            </div>
        )
    }
}

export default InventoryCard