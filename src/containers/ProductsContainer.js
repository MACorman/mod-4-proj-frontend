import React from 'react'
import ProductCard from '../components/ProductCard'

class ProductsContainer extends React.Component {

    state = {
        products: [],
        users: []
    }
    componentDidMount() {
        fetch("http://localhost:3000/products")
        .then(resp => resp.json())
        .then(data => this.setState({products: data}))

        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(data => this.setState({users: data}))
    }

    render() {
        console.log(this.state.products)
        console.log(this.state.users)
        return(
            <div>
                {this.state.products.map(product => <ProductCard key={product.id} {...product} users={this.state.users} />)}
                

            </div>
        )
    }
}

export default ProductsContainer