import React from 'react'



class ProductCard extends React.Component {
    render() {
        return(
            <div>
                <h1>Product Card</h1>
                <h3>{this.props.name}</h3>
                <p>{this.props.category}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default ProductCard 