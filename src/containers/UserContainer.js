import React from 'react'
import InventoryContainer from './InventoryContainer'
import CartContainer from './CartContainer'

class UserContainer extends React.Component {
    render() {
        return(
            <div>

                <h1>{this.props.user ? this.props.user.username : "No User Logged In"}'s Profile</h1>
                <p>Welcome back!</p>
                <InventoryContainer user={this.props.user} productInventories={this.props.user.product_inventories} deleteInventory={this.props.deleteInventory}/>
                <br/>
                <CartContainer carts={this.props.user.carts} />
            </div>
        )
    }
}

export default UserContainer 

