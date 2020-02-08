import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

// eslint-disable-next-line
const newUserUrl = ""

class LoginOrSignUp extends Component {

  state = {
    username: "",
    password: ""


  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
      .then(data => console.log(data))
    this.clearForm()

  }

  clearForm = () => {
    this.setState({
      username: "",
      password: ""
    })
  }




  fetchPost = () => {
    // console.log("Coming from fetchPost", newUserObject)

  }

  render() {
    return (
      <Form onSubmit={(e) => this.submitHandler(e)}>
        <Form.Field>
          <label>Username: </label>
          <input onChange={(e) => { this.inputHandler(e) }}
            placeholder="Username"
            name="username"
            type="text" value={this.state.username} required />
        </Form.Field>
        <Form.Field>
          <label>Password: </label>
          <input onChange={(e) => { this.inputHandler(e) }}
            placeholder="Password"
            name="password"
            type="password" value={this.state.password} required />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default LoginOrSignUp

      //  {/* <Form.Field>
      //     <label>Password Confirmation: </label>
      //     <input onChange={(e) => { this.inputHandler(e) }}
      //       placeholder="Password"
      //       name="passwordConfirmation"
      //       type="password" value={this.state.passwordConfirmation} />
      //   </Form.Field> */}