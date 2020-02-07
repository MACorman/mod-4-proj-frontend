import React from 'react'
import FilterAndSearch from '../components/FilterAndSearch'
import CartIcon from '../components/CartIcon'
import LoginOrProfile from '../components/LoginOrProfileButton'

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <h1>NavBar</h1>
                <FilterAndSearch />
                <CartIcon />
                <LoginOrProfile logUserIn={this.props.logUserIn} goToUserProfile={this.props.goToUserProfile}/>
            </div>
        )
    }
}

export default NavBar