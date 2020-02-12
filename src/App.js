import React from 'react';
import './App.css';
import NavBar from './containers/NavBar'
import SignUp from './components/SignUp'
import { Switch, Route, withRouter } from 'react-router-dom'
import UserContainer from './containers/UserContainer';
import ProductsContainer from './containers/ProductsContainer';
import NewProductForm from './components/NewProductForm'
import ProductShow from './components/ProductShow'
import CheckOut from './components/CheckOut'




class App extends React.Component {

  state = {
    products: [],
    users: [],
    productInventories: [],
    currentUser: null,
    currentCart: [],
    currentProduct: null

  }
  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(resp => resp.json())
      .then(data => this.setState({ products: data }))

    fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(data => this.setState({ users: data }))

    fetch("http://localhost:3000/product_inventories")
      .then(resp => resp.json())
      .then(data => this.setState({ productInventories: data }))

    if (sessionStorage.length > 0) {
      this.setState({ currentUser: JSON.parse(sessionStorage.getItem("currentUser")) })
    }
  }

  logUserIn = (userObj) => {

    let currentUser = this.state.users.find(user => user.username === userObj.username)
    this.setState({ currentUser }, () => {

      sessionStorage.setItem("currentUser", JSON.stringify(this.state.currentUser))
    })

  }

  handleClick = (id) => {
    let product = this.state.products.find(product => product.id === id)
    this.setState({
      currentProduct: product
    })
    this.props.history.push(`/products/${id}`)
  }

  handleCart = (e, productObject) => {
    if (!this.state.currentCart.includes(productObject)) {
      this.setState({
        currentCart: [...this.state.currentCart, productObject]
      })
    } else {
      alert("You already added this item to the cart")
    }
  }

  addNewProduct = (formInput) => {
    let wholeObject = {
      name: formInput.name,
      category: formInput.category
    }

    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(wholeObject)
    })
      .then(resp => resp.json())
      .then(data => {
        this.addNewProductInventory(formInput, data)

        let productNamesArr = this.state.products.map(p => p.name)
        if (!productNamesArr.includes(data.name)) {
          let updatedProductsArr = [...this.state.products, data]
          this.setState({ products: updatedProductsArr })

        }
      })
  }


  addNewProductInventory = (formInput, data) => {

    let object = {
      product_id: data.id,
      description: formInput.description,
      inventory_id: this.state.currentUser.inventories[0].id,
      price: formInput.price,
      quantity: formInput.quantity,
      image: formInput.image
    }

    fetch(`http://localhost:3000/product_inventories`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(object)
    })
      .then(resp => resp.json())
      .then(data => {
        let updatedProductsArr = [...this.state.productInventories, data]
        this.setState({ productInventories: updatedProductsArr })
      })
  }



  deleteInventory = (Id) => {

  }

  logOut = () => {

    this.setState({
      currentUser: null
    }, this.props.history.push('/'))
    sessionStorage.clear()
  }


  render() {
    console.log(this.state.currentUser)


    return (
      <div className="App">
        <NavBar logOut={this.logOut} currentUser={this.state.currentUser} logUserIn={this.logUserIn} currentCart={this.state.currentCart} />
        <Switch>
          <Route exact path='/' render={routerProps => <ProductsContainer handleClick={this.handleClick} {...routerProps} products={this.state.products} />} />
          <Route exact path='/profile' render={routerProps => <UserContainer user={this.state.currentUser ? this.state.currentUser : JSON.parse(sessionStorage.getItem("currentUser"))} deleteInventory={this.deleteInventory} {...routerProps} productInventories={this.state.productInventories} />} />
          <Route exact path='/signup' render={routerProps => <SignUp logUserIn={this.logUserIn} {...routerProps} />} />
          <Route exact path='/products' render={routerProps => <ProductsContainer handleClick={this.handleClick} {...routerProps} products={this.state.products} />} />
          <Route exact path='/newproductform' render={routerProps => <NewProductForm {...routerProps} currentUser={this.state.currentUser} addNewProduct={this.addNewProduct} />} />
          <Route exact path='/products/:id' render={routerProps => <ProductShow handleCart={this.handleCart} product={this.state.currentProduct} {...routerProps} />} />
          <Route exact path='/checkout' render={routerProps => <CheckOut currentCart={this.state.currentCart} {...routerProps} />} />
          <Route exact path='/products/:id' render={routerProps => <ProductShow handleCart={this.handleCart} product={this.state.currentProduct} products={this.state.products} productInventories={this.state.productInventories} addToCart={this.addToCart} {...routerProps} />} />

        </Switch>


      </div>
    );
  }
}

export default withRouter(App);
