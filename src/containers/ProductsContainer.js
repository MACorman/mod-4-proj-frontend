import React from 'react'
import ProductCard from '../components/ProductCard'

class ProductsContainer extends React.Component {

    state = {
        products: []
    }
    componentDidMount() {
        fetch("http://localhost:3000/products")
        .then(resp => resp.json())
        .then(data => this.setState({products: data}))
    }

    render() {
        console.log(this.state.products)
        return(
            <div>
                {this.state.products.map(product => <ProductCard key={product.id} {...product} />)}
                

            </div>
        )
    }
}

export default ProductsContainer