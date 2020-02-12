import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

class InventoryCard extends React.Component {

    clickHandler = (e) => {
        if(e.target.innerText === "Delete From Inventory") {
            let productInventoryID = this.props.id
            let productId = this.props.product.id
            this.props.deleteInventory(productInventoryID, productId)
        } 
        else if (e.target.innerText === "Add To Cart") {
            let productInventoryID = this.props.id
            this.props.addToCart(productInventoryID)
        }
        
    }

    removeHandler = () => {
        let productInventoryID = this.props.id
        this.props.removeFromCart(productInventoryID)
    }


    render() {
        return (
            <Card>
                <Card.Content>
                    <Image src={this.props.image}></Image>
                    <Card.Header>
                        <h3>{this.props.product.name}</h3>
                    </Card.Header>
                    <Card.Description>
                        <p>Description: {this.props.description}</p>
                    </Card.Description>
                    <Card.Meta>
                        <p>${this.props.price}.00</p>
                        <p>{this.props.quantity > 0 ? `${this.props.quantity} Left in Stock` : "Out of Stock" } </p>
                    </Card.Meta>
                    {this.props.checkout ? <Button primary onClick={this.removeHandler}>Remove From Cart</Button> : <Button primary onClick={this.clickHandler}>{this.props.deleteInventory ? "Delete From Inventory" : "Add To Cart" }</Button>}
                </Card.Content>
            </Card>
        )
    }
}

export default InventoryCard