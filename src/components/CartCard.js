import React from 'react'
import ProductCard from './ProductCard'
import { Grid, Button, Card, Icon, Image } from 'semantic-ui-react'

class CartCard extends React.Component {
    render() {
        return(
            <div>
                {this.props.products.map(product => <ProductCard key={product.id} {...product}/>)}
            </div>
        )
    }
}

export default CartCard