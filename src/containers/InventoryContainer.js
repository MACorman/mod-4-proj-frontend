import React from 'react'
import InventoryCard from '../components/InventoryCard'
import { Card } from 'semantic-ui-react'

class InventoryContainer extends React.Component {
    render() {
        return (
            <div>
                <h2>Your Inventory</h2>
                <Card.Group itemsPerRow={4}>
                    {this.props.productInventories.map(pi => {
                        if (pi.inventory.user.username === this.props.user.username) {
                            return <InventoryCard key={pi.description} {...pi} deleteInventory={this.props.deleteInventory} />
                        }
                    })}
                </Card.Group>
            </div>
        )
    }
}

export default InventoryContainer
