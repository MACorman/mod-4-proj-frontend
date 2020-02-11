import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, Button, Card, Icon, Image } from 'semantic-ui-react'

class ProductCard extends React.Component {
    render() {
        return (
            <Card onClick={(e) => this.props.handleClick(e, this.props.id)}>
                <Card.Content>
                    <Image src=""></Image>
                    <Icon></Icon>
                    <Card.Header>
                        <h3>{this.props.name}</h3>
                    </Card.Header>
                    <Card.Meta>
                        <p>Category: {this.props.category}</p>
                        {/* <p>Sold by: {this.props.inventories.map(prodInventory => prodInventory.user.username)}</p> */}
                    </Card.Meta>
                    <Button primary>Buy Now</Button>
                </Card.Content>
            </Card>


        )
    }
}

export default withRouter(ProductCard)

// do some thinking on app layout - what containers/components do we want? How do we want to structure pages