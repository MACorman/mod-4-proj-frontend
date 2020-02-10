import React from 'react'
import { Form, Input, Button, Dropdown } from 'semantic-ui-react'
import { Fragment } from 'react'

class NewProductForm extends React.Component {

  state = {
    name: "",
    description: "",
    category: ""

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let formInput = { ...this.state }
    this.productPost(formInput)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      name: "",
      description: "",
      category: ""
    })
  }

  productPost = (formInput) => {
    let wholeObject = {
      "id": 6,
      "name": formInput.name,
      "description": formInput.description,
      "category": formInput.category,
      "product_carts": [
        {
          "id": ""
        }
      ],
      "product_inventories": [
        {
          "id": "",
          "price": "",
          "quantity": ""
        }
      ],
      "carts": [
        {
          "id": ""
        }
      ],
      "inventories": [
        {
          "id": "",
          "user": {
            "id": "",
            "username": "Ted",
            "password": "456",
            "created_at": "2020-02-09T16:27:55.497Z",
            "updated_at": "2020-02-09T16:27:55.497Z"
          }
        }
      ],
      "users": [
        {
          "id": "",
          "username": "",
          "password": ""
        }
      ]
    }


    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(wholeObject)
    }).then(resp => resp.json())
      .then(data => console.log(data))
  }


  render() {

    console.log(this.props)
    return (
      <Fragment>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field width={6}>
            <Input placeholder="Name" name="name" value={this.state.name} onChange={(e) => { this.handleChange(e) }}></Input>
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Description" name="description" value={this.state.description} onChange={(e) => { this.handleChange(e) }}></Input>
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Category" name="category" value={this.state.category} onChange={(e) => { this.handleChange(e) }}></Input>
          </Form.Field>
          <Button primary type="submit">Submit</Button>
          {/* <Button secondary onClick={this.props.history.goBack}>Back</Button> */}
        </Form>
      </Fragment>
    )
  }
}

export default NewProductForm