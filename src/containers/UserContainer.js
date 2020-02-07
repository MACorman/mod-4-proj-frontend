import React from 'react'
import InventoryContainer from './InventoryContainer'
import CartContainer from './CartContainer'

class UserContainer extends React.Component {
    render() {
        // console.log("Mighty Boosh", this.props.user.product_inventories)
        return(
            <div>

                <h1>{this.props.user ? this.props.user.username : "No User Logged In"}</h1>
                <InventoryContainer user={this.props.user} productInventories={this.props.user.product_inventories}/>
                <CartContainer />
            </div>
        )
    }
}

export default UserContainer 

