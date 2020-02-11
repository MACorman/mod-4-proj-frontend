import React from 'react'
import ProductCard from './ProductCard'


class CartCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.products.map(product => <ProductCard key={product.id} {...product} />)}
            </div>
        )
    }
}

export default CartCard