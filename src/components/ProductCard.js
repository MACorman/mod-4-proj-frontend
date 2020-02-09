import React from 'react'
import { Grid, Button, Card, Icon, Image } from 'semantic-ui-react'

class ProductCard extends React.Component {

    render() {
        return (
            <Card>
                <Card.Content>
                    <Image src=""></Image>
                    <Icon></Icon>
                    <Card.Header>
                        <h3>{this.props.name}</h3>
                    </Card.Header>
                    <Card.Meta>
                        <p>Category: {this.props.category}</p>
                    </Card.Meta>
                    <Card.Description>
                        <p>Description: {this.props.description}</p>
                    </Card.Description>
                    {/* <p>Sold by: {this.props.inventories.map(prodInventory => prodInventory.user.username)}</p> */}
                    <Button>Buy Now!</Button>
                </Card.Content>
            </Card>


        )
    }
}

export default ProductCard

// do some thinking on app layout - what containers/components do we want? How do we want to structure pages