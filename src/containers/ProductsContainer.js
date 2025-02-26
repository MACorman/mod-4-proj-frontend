import React from 'react'
import ProductCard from '../components/ProductCard'
import { Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class ProductsContainer extends React.Component {
    
    render() {
        let uniqueProducts = []
        this.props.products.filter(product => {
            if(!uniqueProducts.includes(product.name)) {
               return uniqueProducts = [...uniqueProducts, product]
            }
        })
        return (
            <Card.Group itemsPerRow={4}>
                {uniqueProducts.map(product => <ProductCard handleClick={this.props.handleClick} key={product.id} {...product} users={this.props.users} />)}
            </Card.Group>
        )
    }
}

export default withRouter(ProductsContainer)