import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'



// eslint-disable-next-line
const newUserUrl = ""



class SignUp extends Component {


  state = {
    username: "",
    password: ""


  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createInventory = (userObj) => {

    console.log("current user: ", this.props.currentUser)
    let userId = parseInt(userObj.id)
    fetch('http://localhost:3000/inventories', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({ user_id: userId })
    }).then(resp => resp.json()).then(data => console.log(data))

  }

  submitHandler = (e) => {
    e.preventDefault()
    let inputObject = { ...this.state }
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(inputObject)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        sessionStorage.clear()
        this.clearForm()
        this.props.addUser(data)
        this.createInventory(data)




      }, this.props.history.push('/'))
    // debugger
  }


  clearForm = () => {
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <div>
        <br />
        <Form required onSubmit={(e) => this.submitHandler(e)}>
          <Form.Field required width={4}>
            <Input label="Username" required focus onChange={(e) => { this.inputHandler(e) }}
              name="username"
              type="text" value={this.state.username} />
          </Form.Field>

          <Form.Field required width={4}>
            <Input label="Password: " required focus onChange={(e) => { this.inputHandler(e) }}
              name="password"
              type="password" value={this.state.password} />
            <Button primary type='submit'>Sign Up!</Button>
          </Form.Field>
        </Form>

      </div>
    )
  }
}

export default SignUp

