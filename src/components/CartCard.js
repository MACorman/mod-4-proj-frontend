import React from 'react'
import ProductCard from './ProductCard'


class CartCard extends React.Component {

    buttonHandler = () => {

    }

    render() {
        let uniqueProducts = []
        this.props.products.filter(product => {
            if(!uniqueProducts.includes(product)) {
               return uniqueProducts = [...uniqueProducts, product]
            }
        })
        return (
            <div> 
                {uniqueProducts.map(product => <ProductCard key={product.id} buttonHandler={this.buttonHandler} {...product} />)}
            </div>
        )
    }
}

export default CartCard


