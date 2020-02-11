import React from 'react'
import { Form, Input, Button, Dropdown } from 'semantic-ui-react'
import { Fragment } from 'react'

class NewProductForm extends React.Component {

  state = {
    name: "",
    description: "",
    category: "", 
    price: null,
    quantity: null,
    image: ""

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let formInput = { ...this.state }
    this.props.addNewProduct(formInput)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      name: "",
      description: "",
      category: "",
      price: null,
      quantity: null,
      image: ""
    })
  }

  render() {


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
          <Form.Field width={6}>
            <Input placeholder="Price" type="number" name="price" value={this.state.price} onChange={(e) => { this.handleChange(e) }}></Input>
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Quantity" type="number" name="quantity" value={this.state.quantity} onChange={(e) => { this.handleChange(e) }}></Input>
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Image" name="image" value={this.state.image} onChange={(e) => { this.handleChange(e) }}></Input>
          </Form.Field>
          <Button primary type="submit">Submit</Button>
        </Form>
      </Fragment>
    )
  }
}

export default NewProductForm