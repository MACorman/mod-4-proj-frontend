import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

class ProductCard extends React.Component {
    render() {
        return (
            <Card >
                <Card.Content>
                    <Image src=""></Image>
                    <Icon></Icon>
                    <Card.Header>
                        <h3>{this.props.name}</h3>
                    </Card.Header>
                    <Card.Meta>
                        <p>Category: {this.props.category}</p>
                        {/* <p>Sold by: {this.props.inventories.map(i => `${i.user.username} `)}</p> */}
                    </Card.Meta>
                    {!this.props.buttonHandler && <Button onClick={() => this.props.handleClick(this.props.id)} primary>View Product Listings</Button>}
                </Card.Content>
            </Card>
        )
    }
}

export default withRouter(ProductCard)
