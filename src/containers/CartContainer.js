import React from 'react' 
import CartCard from '../components/CartCard'
import { Card } from 'semantic-ui-react'

class CartContainer extends React.Component {
    render() {
        return(
            <div>
                <h2>Past Purchases</h2>
                <Card.Group itemsPerRow={4}>
                {this.props.carts.map(cart => {
                    if(cart.user.id === this.props.user.id) {
                       return <CartCard key={cart.id} {...cart} />
                    }
                })}
                </Card.Group>
            </div>
        )
    }
}

export default CartContainer
