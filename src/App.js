import React from 'react';
// import { Container, Divider } from 'semantic-ui-react'
import './App.css';
import NavBar from './containers/NavBar'
import LoginOrSignUp from './components/LoginOrSignUp'
import { Switch, Route, withRouter } from 'react-router-dom'
import UserContainer from './containers/UserContainer';
import ProductsContainer from './containers/ProductsContainer';
import NewProductForm from './components/NewProductForm'
import ProductShow from './components/ProductShow'



class App extends React.Component {

  state = {
    products: [],
    users: [],
    currentUser: null,
    currentCart: [],
    currentProduct: {}

  }
  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(resp => resp.json())
      .then(data => this.setState({ products: data }))

    fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(data => this.setState({ users: data }))
  }

  logUserIn = (userObj) => {
    let currentUser = this.state.users.find(user => user.username === userObj.username)
    this.setState({ currentUser })
  }

  handleClick = (e, id) => {
    let product = this.state.products.find(product => product.id === id)
    this.setState({
      currentProduct: product
    })
    this.props.history.push(`/products/${id}`)
  }

  handleCart = (e, productObject) => {
    // console.log("got here", productObject)
    if (!this.state.currentCart.includes(productObject)) {
      this.setState({
        currentCart: [...this.state.currentCart, productObject]
      })
    } else {
      alert("You already added this item to the cart")
    }
  }

  //get current user and render their profile
  // goToUserProfile = () => {
  //   let currentUser = this.state.currentUser
  // }

  render() {

    return (
      <div className="App">
        <NavBar logUserIn={this.logUserIn} currentCart={this.state.currentCart} />
        <Switch>
          <Route exact path='/' render={routerProps => <ProductsContainer handleClick={this.handleClick} {...routerProps} products={this.state.products} />} />
          <Route exact path='/profile' render={routerProps => <UserContainer user={this.state.currentUser} {...routerProps} />} />
          <Route exact path='/signup' render={routerProps => <LoginOrSignUp  {...routerProps} />} />
          <Route exact path='/products' render={routerProps => <ProductsContainer handleClick={this.handleClick} {...routerProps} products={this.state.products} />} />
          <Route exact path='/newproductform' render={routerProps => <NewProductForm {...routerProps} />} />
          <Route exact path='/products/:id' render={routerProps => <ProductShow handleCart={this.handleCart} product={this.state.currentProduct} {...routerProps} />} />
        </Switch>


      </div>
    );
  }
}

export default withRouter(App);
