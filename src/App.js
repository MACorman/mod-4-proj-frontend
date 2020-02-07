import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar'
import Main from './containers/Main'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserContainer from './containers/UserContainer';
import ProductsContainer from './containers/ProductsContainer';

class App extends React.Component {
  
  state = {
    products: [],
    users: [], 
    currentUser: null,

}
componentDidMount() {
    fetch("http://localhost:3000/products")
    .then(resp => resp.json())
    .then(data => this.setState({products: data}))

    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(data => this.setState({users: data}))
}

logUserIn = (userObj) => {
  let currentUser = this.state.users.find(user => user.username === userObj.username)
  this.setState({ currentUser })
}

//get current user and render their profile
// goToUserProfile = () => {
//   let currentUser = this.state.currentUser
// }

  render() {
    return (
      <div className="App">
        <NavBar logUserIn={this.logUserIn} />
        <Switch>
          <Route exact path='/' render={routerProps => <ProductsContainer {...routerProps} products={this.state.products}/>}/>
          <Route exact path='/profile' render={routerProps => <UserContainer user={this.state.currentUser} {...routerProps} />} />
          <Route exact path='/products' render={routerProps => <ProductsContainer {...routerProps} products={this.state.products} />} />
        </Switch>

        {/* <Main products={this.state.products} users={this.state.users} currentUser={this.state.currentUser} />  */}
      </div>
    );
  }
}

export default App;
