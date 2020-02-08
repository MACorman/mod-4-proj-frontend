import React from 'react'
import ProductCard from '../components/ProductCard'
import { Card } from 'semantic-ui-react'

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
            <div>
                {this.props.products.map(product => <Card key={product.id}><ProductCard  {...product} users={this.props.users} /></Card>)}


            </div>
        )
    }
}

export default ProductsContainer