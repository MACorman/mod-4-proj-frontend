import React from 'react'
import InventoryCard from '../components/InventoryCard'
import { Card } from 'semantic-ui-react'

class InventoryContainer extends React.Component {
    render() {
        console.log("label", this.props.productInventories)

        return (
            <div>
                <h2>Your Inventory</h2>
                <Card.Group itemsPerRow={4}>
                    {this.props.productInventories.map(pi => {
                        console.log("PI INVENTORY", pi)

                        if (pi.inventory.user.username === this.props.user.username) {
                            return <InventoryCard key={pi.id} {...pi} />
                        }
                    })}

                </Card.Group>
            </div>
        )
    }
}

export default InventoryContainer
