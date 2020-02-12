import React from 'react'
import { withRouter } from 'react-router-dom'
// import FilterAndSearch from '../components/FilterAndSearch'
// import CartIcon from '../components/CartIcon'
import LoginOrProfile from '../components/LoginOrProfileButton'
import { Icon, Menu, Button, Input } from 'semantic-ui-react'


class NavBar extends React.Component {
    state = {
        activeItem: 'home',
        cartItemCount: 0

    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        this.pathHandler(name)

    }

    pathHandler = (path) => {
        switch (path) {
            case 'home':
                this.props.history.push('/')
                break;
            case 'myInventory':
                break;
            case 'sellProduct':
                this.props.history.push('/newproductform')
                break;

            default:
                console.log(this.state.activeItem)
                break;
        }
    }





    render() {




        const { activeItem } = this.state


        return (
            <div>
                <div>
                    <Menu pointing>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='myInventory'
                            active={activeItem === 'myInventory'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='sellProduct'
                            active={activeItem === 'sellProduct'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...' />
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu>
                            <Menu.Item>
                                <Button onClick={() => this.props.history.push('/checkout')} >
                                    <Icon name='cart' />{this.props.currentCart.length}
                                </Button>
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu>
                            <Menu.Item>
                                <Button onClick={() => this.props.history.push('/signup')}>Sign Up!</Button>
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu>
                            <Menu.Item>
                                <LoginOrProfile logUserIn={this.props.logUserIn} goToUserProfile={this.props.goToUserProfile} />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>


                </div>



            </div>
        )
    }
}

export default withRouter(NavBar)