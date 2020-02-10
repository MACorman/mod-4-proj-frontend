import React from 'react'
import ProductCard from '../components/ProductCard'
import { Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class ProductsContainer extends React.Component {

    // state = {
    //     products: [],
    //     users: []
    // }
    // componentDidMount() {
    //     fetch("http://localhost:3000/products")
    //     .then(resp => resp.json())
    //     .then(data => this.setState({products: data}))

    //     fetch("http://localhost:3000/users")
    //     .then(resp => resp.json())
    //     .then(data => this.setState({users: data}))
    // }



    render() {


        return (
            <Card.Group itemsPerRow={4}>
                {this.props.products.map(product => <ProductCard handleCart={this.props.handleCart} handleClick={this.props.handleClick} key={product.id} {...product} users={this.props.users} />)}
            </Card.Group>
        )
    }
}

export default withRouter(ProductsContainer)