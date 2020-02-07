import React from 'react' 

class CartIcon extends React.Component {

    state = {
        cartItemCount: 0
    }

    render() {
        return(
            <div>
                <button>Cart 🛍: {this.state.cartItemCount}</button>
            </div>
        )
    }
}

export default CartIcon 