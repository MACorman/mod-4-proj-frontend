import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

class InventoryCard extends React.Component {

    deleteHandler = (e) => {
        let productInventoryID = e.target.parentNode.parentNode
        this.props.deleteInventory(productInventoryID)
    }

    render() {
        return (
            <Card id={this.props.id}>
                <Card.Content>
                    <Image src={this.props.image}></Image>
                    <Icon></Icon>
                    <Card.Header>
                        <h3>{this.props.product.name}</h3>
                    </Card.Header>
                    <Card.Description>
                        <p>Description: {this.props.description}</p>
                    </Card.Description>
                    <Card.Meta>
                        <p>${this.props.price}.00</p>
                        <p>{this.props.quantity} Left in Stock</p>
                    </Card.Meta>
                    <Button primary onClick={this.deleteHandler}>Delete From Inventory</Button>
                </Card.Content>
            </Card>
        )
    }
}

export default InventoryCard