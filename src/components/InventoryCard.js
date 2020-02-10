import React from 'react'
import { Grid, Button, Card, Icon, Image } from 'semantic-ui-react'

class InventoryCard extends React.Component {

    deleteHandler = (e) => {
        let productInventoryID = e.target.parentNode.parentNode
        this.props.deleteInventory(productInventoryID)
    }

    render() {
        return(
            <Card id={this.props.productInventories[0].id}>
                <Card.Content>
                    <Image src={this.props.productInventories[0].image}></Image>
                    <Icon></Icon>
                    <Card.Header>
                        <h3>{this.props.name}</h3>
                    </Card.Header>
                    <Card.Description>
                        <p>Description: {this.props.productInventories[0].description}</p>
                    </Card.Description>
                    <Card.Meta>
                        <p>${this.props.productInventories[0].price}.00</p>
                        <p>{this.props.productInventories[0].quantity} Left in Stock</p>
                    </Card.Meta>
                    <Button primary onClick={this.deleteHandler}>Delete From Inventory</Button>
                </Card.Content>
            </Card>
        )
    }
}

export default InventoryCard